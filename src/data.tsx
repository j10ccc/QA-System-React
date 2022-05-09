import { QuestionType } from './App';

export type DataType = {
  msg: string;
  name?: string;
  data?: QuestionType[];
};
export const dataSource: DataType = {
  msg: 'SUCCESS',
  name: '第七届网络安全宣传月测试',
  data: [
    {
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
      topic: '3.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
      ],
    },
    {
      topic: '4.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
      ],
    },
    {
      topic: '5.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
      ],
    },
    {
      topic: '6.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
      ],
    },
    {
      topic: '7.大学生最容易上当的原因是什么？',
      type: 1,
      score: 1,
      options: [
        { index: 1, content: '自以为是' },
        { index: 2, content: '不够骗子聪明' },
      ],
    },
  ],
};
