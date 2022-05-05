import { NavBar } from "antd-mobile";
import { createContext } from "react";
import Preview from "./components/Preview";
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

  return (
    <>
      <DataContext.Provider value={data}>
        <Preview />
      </DataContext.Provider>
    </>
  )
}