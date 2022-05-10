import myAxios from './axios';

export function postAnsAPI(paramsList?: any) {
  return myAxios({
    url: '/api/submit',
    method: 'post',
    data: paramsList,
  });
}
