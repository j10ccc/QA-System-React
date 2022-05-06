import { NavBar } from "antd-mobile";
import { useState, createContext } from "react";
import Indicator from "./components/Indicator";
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
  return (
    <>
      <NavBar back={null}>
        <div>{data.name}</div>
      </NavBar>

      <DataContext.Provider value={data}>
        <Indicator total={data.data?.length} curPage={curPage} setCurPage={setCurPage} />
        <Slide data={data} curPage={curPage} setCurPage={setCurPage} />

      </DataContext.Provider>
    </>
  )
}