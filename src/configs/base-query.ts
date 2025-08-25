import { apiConfig } from './http';

export interface PostRequestPropsType<T> {
  endpoint: string;
  payload: Record<string, T>;
  config?: any;
}

export interface PutRequestPropsType<T> {
  endpoint: string;
  payload: Record<string, T>;
  config?: any;
}

export interface GetRequestPropsType<T> {
  endpoint: string;
  payload?: Record<string, T>;
  config?: any;
}

export interface PostRequestReturnType<T> {
  data: T;
  message: string;
  accessToken?: string;
  status?: string;
  statusCode?: number;
}

export interface PutRequestReturnType<T> {
  data: T;
  message: string;
  status?: string;
  statusCode?: number;
}

export interface GetRequestReturnType<T> {
  data: T;
  status?: string;
  timestamp: number;
}

export const postRequest = async <T>({
  endpoint,
  payload,
  config = {},
}: PostRequestPropsType<T>): Promise<PostRequestReturnType<T>> => {
  return await apiConfig.post(endpoint, payload, {
    ...config,
    params: config.params,
  });
};
export const putRequest = async <T>({
  endpoint,
  payload,
  config = {},
}: PutRequestPropsType<T>): Promise<PostRequestReturnType<T>> => {
  return await apiConfig.put(endpoint, payload, {
    ...config,
    params: config.params,
  });
};

export const getRequest = async <T>({
  endpoint,
  payload,
  config = {},
}: GetRequestPropsType<T>): Promise<GetRequestReturnType<T>> => {
  return await apiConfig.get(endpoint, { params: payload, ...config });
};
