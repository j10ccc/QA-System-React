import axios from 'axios';
import { TestContext } from '../config';

export default function myAxios(axiosConfig: any) {
  const service = axios.create({
    baseURL: TestContext.baseURL,
    timeout: 10000,
  });

  return service(axiosConfig);
}
