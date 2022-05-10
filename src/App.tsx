import { NavBar, Space } from 'antd-mobile';
import { useState, createContext } from 'react';
import Indicator from './components/Indicator';
import PagePrompter from './components/PagePrompter';
import { dataSource } from './data';
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
  score: number;
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

const data: QuestionType[] = shuffle(dataSource().data);
export const DataContext = createContext(data);
export default function App() {
  const [curPage, setCurPage] = useState(1);
  const dataLen = data.length || 0;
  const [ansList, setAnsList] = useState<AnswerType[]>(initialAnsList(dataLen));
  function toggleAns(ans: AnswerType) {
    console.log(ans);
    setAnsList((status) =>
      status.map((item, index) => (index == ans.id ? ans : item)),
    );
  }
  // TODO: Context 优化
  // TODO: 增加进度条
  // TODO: 增加信息栏

  return (
    <>
      <DataContext.Provider value={data}>
        <NavBar back={null}>
          <div>{dataSource.name}</div>
        </NavBar>
        <Indicator total={dataLen} curPage={curPage} setCurPage={setCurPage} />
        <Slide
          curPage={curPage}
          setCurPage={setCurPage}
          toggleAns={toggleAns}
          ansList={ansList}
        />
      </DataContext.Provider>
      {curPage == dataLen + 1 ? null : (
        <PagePrompter len={dataLen} curPage={curPage} setCurPage={setCurPage} />
      )}
    </>
  );
}
