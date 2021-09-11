import { useFetch } from '~/hooks/useFetch';

export type PaymentType = {
  id: number;
  number: string;
  secureCode?: string;
  expirationDate?: string;
};

export default () => {
  const { data, error, isLoading } = useFetch<PaymentType[]>('user/payments');

  return {
    payments: data,
    isError: error,
    isLoading,
  };
};
