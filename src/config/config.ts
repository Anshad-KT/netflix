
import { baseUrl} from '../constants/constants'
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export default instance
