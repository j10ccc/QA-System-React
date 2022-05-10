import { QuestionType } from './App';
import { shuffle } from './Utils';

export type DataType = {
  msg: string;
  name?: string;
  data?: QuestionType[];
};
function initialData(data: QuestionType[]) {
  return data.map((item, index) => {
    Object.assign(item, { index: index });
  }); // encode question
}
export function dataSource(): DataType {
  let tmpData = rawData;
  tmpData.data.map((item) => {
    item.options = shuffle(item.options);
    return item;
  });
  return tmpData;
}

const rawData = {
  msg: 'SUCCESS',
  name: '第七届网络安全宣传月测试',
  data: [
    {
      index: 0,
      topic: '1.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
        { index: 3, content: '不熟悉互联网金融' },
        { index: 4, content: '戒备心不强' },
      ],
    },
    {
      index: 1,
      topic: '2.大学生最容易上当的原因是什么？',
      type: 2,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
        { index: 3, content: '不熟悉互联网金融' },
        { index: 4, content: '戒备心不强' },
      ],
    },
    {
      index: 2,
      topic: '3.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
        { index: 3, content: '这是第三个选项' },
      ],
    },
    {
      index: 3,
      topic: '4.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
      ],
    },
    {
      index: 4,
      topic: '5.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
      ],
    },
    {
      index: 5,
      topic: '6.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
      ],
    },
  ],
};
