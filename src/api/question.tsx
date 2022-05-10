import { QuestionType } from '../App';
import myAxios from './axios';
import { TestContext } from '../test';

export type DataType = {
  msg: string;
  name?: string;
  data?: QuestionType[];
};
export function getQuestionAPI(paramsList?: any) {
  return myAxios({
    url: '/api/getQuestion?id=' + TestContext.contestID,
    method: 'get',
  });
}
