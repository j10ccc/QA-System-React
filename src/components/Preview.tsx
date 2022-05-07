import { Button, CheckList, Form, List, Space, Tag } from "antd-mobile";
import { useContext } from "react";
import EachQuestion from "./EachQuection";
import { DataType } from "../data";

export default function Preview(props: any) {

  const data: DataType = props.data;
  return (
    <Form
      footer={
        <Button block type="submit" color="primary">
          提交试卷
        </Button>
      }
    >
      <List header='试卷总览' className="preview">
        {data.data?.map((item, index) =>
          <EachQuestion item={item} index={index} key={index} />
        )
        }
      </List>
    </Form>
  )
}