import {AxiosRequestConfig} from 'axios';
export {};

declare global {
  type ActionBase<T = undefined> = T extends undefined
    ? {
        type: string;
      }
    : {
        type: string;
        payload: T;
      };
  type ResponseBase<T = any, TStatus = boolean> = {
    code: number;
  } & (TStatus extends true
    ? {
        data: T;

        status: true;
      }
    : {
        status: false;

        msg?: string | null;
      });
  interface ParamsNetwork extends AxiosRequestConfig {
    url: string;
    params?: Record<string, string | number>;
    path?: Record<string, string | number>;
    body?: Record<string, unknown>;
  }
}
