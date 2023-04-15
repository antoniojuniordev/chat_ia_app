import handleResponse from './handlers/handleResponse';
import handlerParams from './handlers/handlerParams';

type UseFetchProps = {
  method: 'get' | 'post';
  url: string;
  body?: object;
  params?: object
}

export default function useFetch({
  method, url, params, body,
}: UseFetchProps) {
  // eslint-disable-next-line no-undef
  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) requestOptions.body = JSON.stringify(body);

  return fetch(handlerParams(`https://9ad6-2804-29b8-500b-d0e2-fdea-c3ea-d530-5702.ngrok-free.app${url}`, params), requestOptions).then(
    handleResponse,
  ).catch((error) => ({ error, success: false }));
}
