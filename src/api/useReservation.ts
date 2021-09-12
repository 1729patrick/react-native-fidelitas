import { useFetch } from '~/hooks/useFetch';

export type ReservationType = {
  id: number;
  date: string;
  time: string;
  adults: number;
  kids: number;
  babies: number;
  type: 'breakfast' | 'lunch' | 'dinner';
  status: 'canceled' | 'inReview' | 'confirmed';
  clientNotes?: string;
  adminNotes?: string;
  createdAt: string;
};

export default () => {
  const { data, error, isLoading } =
    useFetch<ReservationType[]>('user/reservations');

  return {
    reservations: data || [],
    isError: error,
    isLoading,
  };
};
