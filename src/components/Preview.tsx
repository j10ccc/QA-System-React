import { Button, Form, List } from 'antd-mobile';
import { postAnsAPI } from '../api/score';
import EachQuestion from './EachQuection';

export default function Preview(props: any) {
  const { data, ansList, toggleAns } = props;
  function submit() {
    postAnsAPI(ansList).then((res) => {
      console.log(res.data);
    });
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
        {data.map((item: any, index: any) => (
          <EachQuestion
            item={item}
            index={index}
            toggleAns={toggleAns}
            key={index}
            field={ansList[item.index]}
          />
        ))}
      </List>
    </Form>
  );
}
