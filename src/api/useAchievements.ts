import { useFetch } from '~/hooks/useFetch';
import { ProductType } from '~/screens/menu/Menu';

export type AchievementType = {
  id: string;
  title: string;
  description: string;
  type: 'cash' | 'product' | 'discount';
  reward: string;
  rewardValue: number;
  cost: number;
  restaurantId: number;
  createdAt: string;
  product: ProductType;
};

export default () => {
  const { data, error, isLoading } =
    useFetch<AchievementType[]>('achievements');

  return {
    achievements: data || [],
    isError: error,
    isLoading,
  };
};
