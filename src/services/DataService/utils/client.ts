import axios, {
  type AxiosInstance,
  type CreateAxiosDefaults,
  AxiosResponse,
} from 'axios';

const getAxiosClient = (config?: CreateAxiosDefaults): AxiosInstance => {
  const client = axios.create({
    baseURL: '/',
    timeout: 10000,
    ...config,
  });

  return client;
};

export const apiClient = getAxiosClient();

export type TAxiosResponse = AxiosResponse;
