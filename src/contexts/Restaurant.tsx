import React, { createContext, useContext, useEffect, useState } from 'react';
import { AddressType } from '~/api/useAddresses';
import useStorage from '~/hooks/useStorage';

import api from '~/util/api';

const restaurantId = 1;

export type WorkHour = {
  breakfast?: string[];
  lunch?: string[];
  dinner?: string[];
};

export type WorkHours = {
  sunday: WorkHour;
  monday: WorkHour;
  tuesday: WorkHour;
  wednesday: WorkHour;
  thursday: WorkHour;
  friday: WorkHour;
  saturday: WorkHour;
};

type Contact = {
  type: 'phone' | 'email';
  contact: string;
};

export type FacilityType = { title: string };

type RestaurantType = {
  id: number;
  name: string;
  description: string;
  address: AddressType;
  workHours: WorkHours;
  contacts: Contact[];
  facilities: FacilityType[];
};

type ContextProps = {
  restaurant?: RestaurantType;
  restaurantId: number;
};

const RestaurantContext = createContext<ContextProps>({
  restaurant: undefined,
  restaurantId,
});

export const RestaurantProvider: React.FC = ({ children }) => {
  const [restaurant, setRestaurant] = useState<RestaurantType>();

  const getRestaurant = async () => {
    try {
      const { data } = await api.get<RestaurantType>(
        `restaurants/${restaurantId}/details`,
      );

      setRestaurant(data);
    } catch (err) {
      console.error(err);
    }
  };

  const { setStorage } = useStorage<RestaurantType>(
    '@fidelitas:restaurant',
    setRestaurant,
  );

  useEffect(() => {
    setStorage(restaurant);
  }, [setStorage, restaurant]);

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurant, restaurantId }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
