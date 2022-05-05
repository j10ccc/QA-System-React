import { CheckList, List, Space, Swiper, Tag } from "antd-mobile";
import { useContext } from "react";
import { DataContext } from "./App";
import EachQuestion from './components/EachQuection'

export default function Slide() {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <Swiper loop={false}>
      {data.map((item, index) =>
        <Swiper.Item key={index}>
          <List header={'第 ' + `${index + 1}` + ' 题'}>
            <EachQuestion item={item} index={index} />
          </List>
        </Swiper.Item>
      )}
    </Swiper>
  )
}