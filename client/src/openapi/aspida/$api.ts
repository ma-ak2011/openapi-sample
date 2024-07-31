import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_vqzfdw } from './api/staffs';
import type { Methods as Methods_178ohdz } from './api/staffs/_id';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/staffs/';
  const PATH1 = '/';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    api: {
      staffs: {
        _id: (val2: number | string) => {
          const prefix2 = `${PATH0}${val2}`;

          return {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_178ohdz['get']['resBody'], BasicHeaders, Methods_178ohdz['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_178ohdz['get']['resBody'], BasicHeaders, Methods_178ohdz['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json().then(r => r.body),
            /**
             * @returns OK
             */
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_178ohdz['put']['resBody'], BasicHeaders, Methods_178ohdz['put']['status']>(prefix, `${prefix2}${PATH1}`, PUT, option).json(),
            /**
             * @returns OK
             */
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_178ohdz['put']['resBody'], BasicHeaders, Methods_178ohdz['put']['status']>(prefix, `${prefix2}${PATH1}`, PUT, option).json().then(r => r.body),
            /**
             * @returns OK
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_178ohdz['delete']['resBody'], BasicHeaders, Methods_178ohdz['delete']['status']>(prefix, `${prefix2}${PATH1}`, DELETE, option).json(),
            /**
             * @returns OK
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_178ohdz['delete']['resBody'], BasicHeaders, Methods_178ohdz['delete']['status']>(prefix, `${prefix2}${PATH1}`, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH1}`,
          };
        },
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_vqzfdw['get']['resBody'], BasicHeaders, Methods_vqzfdw['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_vqzfdw['get']['resBody'], BasicHeaders, Methods_vqzfdw['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        post: (option: { body: Methods_vqzfdw['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_vqzfdw['post']['resBody'], BasicHeaders, Methods_vqzfdw['post']['status']>(prefix, PATH0, POST, option).json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_vqzfdw['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_vqzfdw['post']['resBody'], BasicHeaders, Methods_vqzfdw['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
