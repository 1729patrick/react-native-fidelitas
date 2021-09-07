import { useFetch } from '~/hooks/useFetch';
import { ProductType } from '~/screens/menu/Menu';

const restaurantId = 1;

export default () => {
  const { data, error, isLoading } = useFetch<ProductType[]>(
    `restaurants/${restaurantId}`,
  );

  return {
    restaurant: data,
    isError: error,
    isLoading,
  };
};
