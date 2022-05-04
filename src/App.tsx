import { List, Space, Tag } from "antd-mobile";
import { CheckList } from "antd-mobile";
import { ListItem } from "antd-mobile/es/components/list/list-item";
import { data } from "./data";

export type QuestionType = {
  topic: string;
  type: number;
  options: string[];
}

enum TopicEnum {
  单选 = 1,
  多选,

}

export default function App() {
  console.log(data);
  function encode(index: number) {
    return String.fromCharCode(index + 65);
  }
  return (
    <List header='试卷'>
      {data.map((item, index) => 
        <>
          <ListItem key={index}>
            <Space>
              <span>{index + 1}. {item.topic}</span>
              <Tag>{TopicEnum[item.type]}</Tag>
            </Space>
         </ListItem>
          <CheckList multiple={item.type == 2}>
            {item.options.map((item, index) => 
              <CheckList.Item value={encode(index)} key={index}>{String.fromCharCode(index + 65) +'. ' +  item}</CheckList.Item>
            )}  
          </CheckList>
        </>
        )
      }
    </List>
  )
}