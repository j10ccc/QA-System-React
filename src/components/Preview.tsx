import { CheckList, List, Space, Tag } from "antd-mobile";
import { ListItem } from "antd-mobile/es/components/list/list-item";
import { useContext } from "react";
import EachQuestion from "./EachQuection";
import { DataType } from "../data";

export default function Preview(props: any) {

  const data: DataType = props.data;
  return (
    <List header='试卷总览'>
      {data.data?.map((item, index) =>
        <EachQuestion item={item} index={index} key={index} />
      )
      }
    </List>
  )
}