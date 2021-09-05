import { useFetch } from '~/hooks/useFetch';
import { ProductType } from '~/screens/menu/Menu';

export default () => {
  const { data, error, isLoading } = useFetch<ProductType[]>('products');

  return {
    products: data,
    isError: error,
    isLoading,
  };
};
