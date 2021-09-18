import { useFetch } from '~/hooks/useFetch';
import { formatDate2ISO8601 } from '~/util/Formatters';
import qs from 'qs';
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

const startDate = formatDate2ISO8601(new Date());

const query = qs.stringify({ startDate });

export const GET_RESERVATION_URL = `user/reservations?${query}`;
export default () => {
  const { data, error, isLoading } =
    useFetch<ReservationType[]>(GET_RESERVATION_URL);

  return {
    reservations: data || [],
    isError: error,
    isLoading,
  };
};
