import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1ja31bm } from './_id';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/staffs/';
  const PATH1 = '/';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: number | string) => {
      const prefix0 = `${PATH0}${val0}`;

      return {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1ja31bm['get']['resBody'], BasicHeaders, Methods_1ja31bm['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1ja31bm['get']['resBody'], BasicHeaders, Methods_1ja31bm['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        put: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1ja31bm['put']['resBody'], BasicHeaders, Methods_1ja31bm['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).json(),
        /**
         * @returns OK
         */
        $put: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1ja31bm['put']['resBody'], BasicHeaders, Methods_1ja31bm['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1ja31bm['delete']['resBody'], BasicHeaders, Methods_1ja31bm['delete']['status']>(prefix, `${prefix0}${PATH1}`, DELETE, option).json(),
        /**
         * @returns OK
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1ja31bm['delete']['resBody'], BasicHeaders, Methods_1ja31bm['delete']['status']>(prefix, `${prefix0}${PATH1}`, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}${PATH1}`,
      };
    },
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * @returns OK
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns OK
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
