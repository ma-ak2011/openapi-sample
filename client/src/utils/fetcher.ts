import {Fetcher} from "swr";

export const fetcher: Fetcher<Response, string> = (url) =>
  fetch(url).then((res) => res.json());
