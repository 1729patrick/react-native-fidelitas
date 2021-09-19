import { useFetch } from '~/hooks/useFetch';

export type AchievementType = {
  id: string;
  title: string;
  description: string;
  type: 'shareApp' | 'visitRestaurant' | 'purchasePrice' | 'purchaseEvaluation';
  rewardTitle: string;
  rewardType: 'cash' | 'product' | 'discount';
  rewardValue: number;
  purchasePrice?: number;
  cost: number;
  status: 'ACTIVE' | 'DELETED';
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
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
