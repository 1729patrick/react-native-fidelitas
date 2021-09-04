import { useFetch } from '~/hooks/useFetch';

export default (restaurantId: number) => {
  const { data, error, isLoading } = useFetch(`restaurants/${restaurantId}`);
  console.log({ data });
  return {
    restaurant: data,
    isError: error,
    isLoading,
  };
};
