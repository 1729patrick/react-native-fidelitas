import React, { createContext, useContext, useEffect, useState } from 'react';
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
  address: {
    lat: number;
    long: number;
    line1: string;
    line2: string;
    postalCode: string;
    city: string;
    country: string;
    responsible: string;
    phone: string;
    notes: string;
    primary: boolean;
  };
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
        `restaurants/${restaurantId}`,
      );

      setRestaurant(data);
    } catch (err) {}
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
