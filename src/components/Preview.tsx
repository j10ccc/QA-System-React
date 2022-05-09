import { Button, CheckList, Form, List, Space, Tag } from 'antd-mobile';
import EachQuestion from './EachQuection';

export default function Preview(props: any) {
  const { data, ansList, toggleAns } = props;
  function submit() {
    console.log(ansList);
  }
  return (
    <Form
      footer={
        <Button block type='submit' color='primary' onClick={submit}>
          提交试卷
        </Button>
      }
    >
      <List header='试卷总览' className='preview'>
        {data.map((item, index) => (
          <EachQuestion
            item={item}
            index={index}
            toggleAns={toggleAns}
            key={index}
            field={ansList[index]}
          />
        ))}
      </List>
    </Form>
  );
}
