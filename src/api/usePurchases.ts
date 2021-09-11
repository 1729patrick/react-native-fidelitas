import { useFetch } from '~/hooks/useFetch';
import { ProductType } from '~/screens/menu/Menu';
import { AddressType } from './useAddresses';
import { PaymentType } from './usePayments';

export type PurchaseType = {
  id: number;
  deliveryType: string;
  promotionCode: string;
  subTotal: number;
  discount: number;
  total: number;
  restaurantId: number;
  createdAt: string;
  address: AddressType;
  payment: PaymentType;
  products: ProductType[];
};

export default () => {
  const { data, error, isLoading } = useFetch<PurchaseType[]>('user/purchases');

  return {
    purchases: data,
    isError: error,
    isLoading,
  };
};
