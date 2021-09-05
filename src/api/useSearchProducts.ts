import { useFetch } from '~/hooks/useFetch';
import { ProductType } from '~/screens/menu/Menu';

export default (term: string) => {
  const { data, error, isLoading } = useFetch<ProductType[]>(
    term?.length >= 3 ? `/products/search?term=${term}` : null,
  );

  return {
    products: data,
    isError: error,
    isLoading,
  };
};
