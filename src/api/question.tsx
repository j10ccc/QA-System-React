import { QuestionType } from '../App';
import myAxios from './axios';

export type DataType = {
  msg: string;
  name?: string;
  data?: QuestionType[];
};
export function getQuestionAPI(paramsList?: any) {
  const { id, time } = paramsList;
  return myAxios({
    url: '/api/getQuestion?id=' + id + '&time=' + time,
    method: 'get'
  });
}
