import { useFetch } from '~/hooks/useFetch';

export type NotificationType = {
  id?: number;
  title?: string;
  description: string;
  type: 'email' | 'pushNotification' | 'sms';
  restaurantId: number;
  createdAt: number;
  read: boolean;
};

export default () => {
  const { data, error, isLoading } =
    useFetch<NotificationType[]>('user/notifications');

  return {
    notifications: data,
    isError: error,
    isLoading,
  };
};
