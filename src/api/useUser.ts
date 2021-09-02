import { useFetch } from '~/hooks/useFetch';

function useReservations() {
  const { data, error, isLoading } = useFetch('/user/reservations');

  return {
    reservations: data,
    isError: error,
    isLoading,
  };
}
