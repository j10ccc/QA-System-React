import { NavBar, Space } from "antd-mobile";
import { useState, createContext } from "react";
import Indicator from "./components/Indicator";
import PagePrompter from "./components/PagePrompter";
import { data } from "./data";
import Slide from "./Slide";

type OptionType = {
  index: number;
  content: string;
}
export type QuestionType = {
  topic: string;
  type: number;
  score: number;
  options: OptionType[];
}

export const DataContext = createContext(data);
export default function App() {

  const [curPage, setCurPage] = useState(1);
  const dataLen = data.data?.length || 0;
  return (
    <Space block direction="vertical">
      <DataContext.Provider value={data}>
        <NavBar back={null}>
          <div>{data.name}</div>
        </NavBar>
        <Indicator total={data.data?.length} curPage={curPage} setCurPage={setCurPage} />
        <Slide curPage={curPage} setCurPage={setCurPage} />

      </DataContext.Provider>
      {curPage == dataLen + 1 ? null : <PagePrompter len={dataLen} curPage={curPage} setCurPage={setCurPage} />}
    </Space>
  )
}