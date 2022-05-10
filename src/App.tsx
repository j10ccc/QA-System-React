import { NavBar } from 'antd-mobile';
import { useState, createContext, useEffect } from 'react';
import { getQuestionAPI } from './api/question';
import Indicator from './components/Indicator';
import PagePrompter from './components/PagePrompter';
import Slide from './Slide';
import { shuffle } from './Utils';

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

function initialAnsList(len: number) {
  let tmpList: AnswerType[] = [];
  for (let i = 0; i < len; i++) tmpList.push({ id: i, key: [] }); // TODO: from 0? 1?
  return tmpList;
}

export const DataContext = createContext({});

export default function App() {
  const [title, setTitle] = useState('');
  const [questionList, setQuestionList] = useState<QuestionType[]>([]);
  const [listLen, setListLen] = useState(0);

  let loaded = false; // 处理 请求之后 setState 造成的 rerender
  useEffect(() => {
    if (!loaded) {
      initialData();
      loaded = true;
    }
  }, []);

  async function initialData() {
    await getQuestionAPI().then((res) => {
      const msg = res.data.msg;
      let initialData: any = new Array<QuestionType>();

      res.data.data.map((item: any, index: number) => {
        let obj: any = new Object();
        obj.index = index;
        obj.topic = item.Topic;
        obj.type = item.TypeNum;
        obj.options = [];
        item.Options.map((item: string, index: number) => {
          obj.options.push({ index: index, content: item })
        });
        initialData.push(obj)
      });
      initialData.map((item: QuestionType) => {
        item.options = shuffle(item.options);
        return item;
      });
      initialData = shuffle(initialData);
      setQuestionList(initialData);
      setAnsList(initialAnsList(res.data.data.length));
      setListLen(res.data.data.length);
      setTitle(res.data.name);
    });
  }

  const [curPage, setCurPage] = useState(1);
  const [ansList, setAnsList] = useState<AnswerType[]>([]);
  function toggleAns(ans: AnswerType) {
    console.log(ans);
    setAnsList((status) =>
      status.map((item, index) => (index == ans.id ? ans : item)),
    );
  }
  // TODO: 增加进度条
  // TODO: 增加信息栏
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
      />
      <PagePrompter total={listLen} curPage={curPage} setCurPage={setCurPage} />
    </>
  );
}
