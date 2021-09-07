import { useFetch } from '~/hooks/useFetch';

export type AddressType = {
  id: number;
  lat?: number;
  long?: number;
  line1: string;
  line2: string;
  postalCode: string;
  city: string;
  country?: string;
  responsible: string;
  phone: string;
  notes?: string;
  primary: boolean;
};

export default () => {
  const { data, error, isLoading } = useFetch<AddressType[]>('addresses');

  return {
    addresses: data,
    isError: error,
    isLoading,
  };
};
