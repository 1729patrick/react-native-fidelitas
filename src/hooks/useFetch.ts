import useSWRNative, {
  useSWRNativeRevalidate,
} from '@nandorojo/swr-react-native';

import useSWR from 'swr';
import api from '~/util/api';

const fetcher = (url: string) => {
  console.log(`[URL]: ${url}`);
  return api.get(url).then(res => res.data);
};

export function useFetch<Data = any, Error = any>(url: string | null) {
  const { data, error } = useSWR<Data, Error>(url, fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    focusThrottleInterval: 5000,
  });

  return { data, error, isLoading: !error && !data };
}
