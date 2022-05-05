import { CheckList, List, Space, Tag } from "antd-mobile";
import { ListItem } from "antd-mobile/es/components/list/list-item";
import { DataContext } from "../App";
import { useContext } from "react";
import EachQuestion from "./EachQuection";


export default function Preview(props: any) {

  const data = useContext(DataContext);
  return (
    <List header='试卷总览'>
      {data.map((item, index) =>
        <EachQuestion item={item} index={index} />
      )
      }
    </List>
  )
}