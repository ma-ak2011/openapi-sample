import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_wokrjd } from './staffs';
import type { Methods as Methods_1fp6hwa } from './staffs/_id';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/staffs/';
  const PATH1 = '/';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    staffs: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH0}${val1}`;

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1fp6hwa['get']['resBody'], BasicHeaders, Methods_1fp6hwa['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1fp6hwa['get']['resBody'], BasicHeaders, Methods_1fp6hwa['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1fp6hwa['put']['resBody'], BasicHeaders, Methods_1fp6hwa['put']['status']>(prefix, `${prefix1}${PATH1}`, PUT, option).json(),
          /**
           * @returns OK
           */
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1fp6hwa['put']['resBody'], BasicHeaders, Methods_1fp6hwa['put']['status']>(prefix, `${prefix1}${PATH1}`, PUT, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1fp6hwa['delete']['resBody'], BasicHeaders, Methods_1fp6hwa['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option).json(),
          /**
           * @returns OK
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1fp6hwa['delete']['resBody'], BasicHeaders, Methods_1fp6hwa['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH1}`,
        };
      },
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_wokrjd['get']['resBody'], BasicHeaders, Methods_wokrjd['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_wokrjd['get']['resBody'], BasicHeaders, Methods_wokrjd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * @returns OK
       */
      post: (option: { body: Methods_wokrjd['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_wokrjd['post']['resBody'], BasicHeaders, Methods_wokrjd['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_wokrjd['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_wokrjd['post']['resBody'], BasicHeaders, Methods_wokrjd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
