import { API_BASE_URL } from '@config';
import _axios, { AxiosInstance } from 'axios';
import { SWRConfiguration } from 'swr';
import util from 'util';

// Axios Instance 생성
const createAxiosInstance = (baseURL: string) => {
  const instance = _axios.create({
    baseURL,
    timeout: 5000,
    withCredentials: false,
    headers: {
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
    },
  });

  if (process.browser && process.env.NODE_ENV !== 'production') {
    axiosLoggingLoader(instance);
  }

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.data?.message) {
        console.log(
          `%c[ URL ] ${err.response.config.url} [ MESSAGE ] ${JSON.stringify(err.response.data.message)}`,
          'color: #f03e3e;',
        );
      }
      return Promise.reject(err);
    },
  );

  return instance;
};

// 개발용 Browser Axios Logging
const axiosLoggingLoader = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const method = config.method ?? '';
      // console.groupCollapsed('Request Logging...');
      console.log(`%c📌 API Request  Logging.. [${method.toUpperCase()}] ${config.url}`, 'color: #37b24d;');
      const isBody = ['post', 'put', 'patch'].includes(method);
      if ((isBody && config.data) || (!isBody && config.params)) {
        console.log(
          `[ ${['post', 'put', 'patch'].includes(method) ? 'body' : 'params'} ]`,
          config.params ?? config.data,
        );
      }
      return config;
    },
    (err) => {
      const now = new Date();
      console.error(`🤒 ${now.toISOString()} [ ${err.config.method.toUpperCase()} ] : ${err.request.path}`);
      console.log('\n[ Stack ] : ', err);
      if (err.request) {
        console.log('\n[ RequestHeader ] : ', util.inspect(err.request._header));
      }

      if (err.config) {
        console.log('\n[ ConfigHeader ] : ', util.inspect(err.config.headers));
        console.log('\n[ RequestQuery ] : ', util.inspect(err.config.params));
        console.log('\n[ RequestBody ] : ', util.inspect(err.config.data));
      }

      if (err.response) {
        console.log('\n[ ResponseHeader ] : ', util.inspect(err.response.headers));
        console.log('\n[ ResponseData ] : ', util.inspect(err.response.data));
      }

      console.log('======================================================\n');
      return Promise.reject(err);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      console.log(
        `%c📫 API Response Logging.. [${response.config.method?.toUpperCase()}] ${response.config.url}`,
        'color: #31B4D9;',
        response.data,
      );
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};

export const axios = createAxiosInstance(API_BASE_URL);

const SWRFetcher = (url: string) => axios.get(url).then((res) => res.data);

export const SWRGlobalConfig: SWRConfiguration = {
  // 기본 Fetcher
  fetcher: SWRFetcher,
};
