import React from 'react';
import { NavBar } from 'antd-mobile';
import { useState, useEffect } from 'react';
import { getQuestionAPI } from './api/question';
import Indicator from './components/Indicator';
import PagePrompter from './components/PagePrompter';
import Slide from './Slide';
import { shuffle } from './Utils';
import HandleLoad from './components/HandleLoad';
import ShowResult from './components/ShowResult';
import { useTitle } from 'ahooks';

type OptionType = {
  index: number;
  content: string;
};
export type QuestionType = {
  index?: number;
  topic: string;
  type: number;
  score?: number;
  options: OptionType[];
};
export type AnswerType = {
  id: number;
  key: Array<number>;
};
export type ErrorInfoType = {
  code: number;
  msg: string;
};

function initialAnsList(len: number) {
  const tmpList: AnswerType[] = [];
  for (let i = 0; i < len; i++) tmpList.push({ id: i, key: [] });
  return tmpList;
}
const defaultTitle = 'JH-QA';

export default function App() {
  const [title, setTitle] = useState('');
  const [questionList, setQuestionList] = useState<QuestionType[]>([]);
  const [listLen, setListLen] = useState(0);
  const [loadStatus, setLoadStatus] = useState(1); // 0 完成, 1 加载中, 2 加载失败, 3 提交完成
  const [errorInfo, setErrorInfo] = useState({ msg: '未知错误', code: 0 }); // 默认状态没有发送请求
  const [score, setScore] = useState(0);
  let loaded = false;
  let paperCode;
  useEffect(() => {
    if (!loaded) {
      initialData();
      loaded = true;
    }
  }, []);

  async function initialData() {
    try {
      paperCode = location.href.split('/?')[1].split('&')[0].split('=')[1];
    } catch (e) {
      console.log(e);
      setLoadStatus(2);
      return;
    }
    await getQuestionAPI(paperCode)
      .then((res) => {
        if (res.data.msg !== 'SUCCESS') {
          setErrorInfo(res.data);
          setLoadStatus(2);
          return;
        }
        let initialData: any = new Array<QuestionType>();
        res.data.data.forEach((item: any, index: number) => {
          const obj: any = new Object();
          obj.index = index;
          obj.topic = item.Topic;
          obj.type = item.TypeNum;
          obj.options = [];
          item.Options.forEach((item: string, index: number) => {
            obj.options.push({ index, content: item });
          });
          initialData.push(obj);
        });
        initialData.map((item: QuestionType) => {
          item.options = shuffle(item.options);
          return item;
        });
        initialData = shuffle(initialData);
        setLoadStatus(0); // 处理 请求之后 setState 造成的 rerender
        setQuestionList(initialData);
        setAnsList(initialAnsList(res.data.data.length));
        setListLen(res.data.data.length);
        setTitle(res.data.name);
      })

      .catch((e) => {
        console.log(e);
        setLoadStatus(2);
      });
  }

  const [curPage, setCurPage] = useState(1);
  const [ansList, setAnsList] = useState<AnswerType[]>([]);
  function toggleAns(ans: AnswerType) {
    setAnsList((status) =>
      status.map((item, index) => (index === ans.id ? ans : item))
    );
  }
  useTitle((title === '' ? '' : title + ' | ') + defaultTitle);
  // TODO: 增加进度条
  // TODO: 增加信息栏
  if (loadStatus === 0)
    return (
      <>
        <NavBar back={null}>
          <div>{title}</div>
        </NavBar>
        <Indicator
          total={listLen}
          data={questionList}
          curPage={curPage}
          setCurPage={setCurPage}
        />
        <Slide
          total={listLen}
          data={questionList}
          curPage={curPage}
          setCurPage={setCurPage}
          toggleAns={toggleAns}
          ansList={ansList}
          setScore={setScore}
          setLoadStatus={setLoadStatus}
        />
        <PagePrompter
          total={listLen}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      </>
    );
  else if (loadStatus === 3) return <ShowResult score={score} />;
  else return <HandleLoad errorInfo={errorInfo} statusCode={loadStatus} />;
}
