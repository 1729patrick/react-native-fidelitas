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

type Facility = { title: string };

type Restaurant = {
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
  facilities: Facility[];
};

type ContextProps = {
  restaurant?: Restaurant;
  restaurantId: number;
};

const RestaurantContext = createContext<ContextProps>({
  restaurant: undefined,
  restaurantId,
});

export const RestaurantProvider: React.FC = ({ children }) => {
  const [restaurant, setRestaurant] = useState<Restaurant>();

  const getRestaurant = async () => {
    try {
      const { data } = await api.get<Restaurant>(`restaurants/${restaurantId}`);

      setRestaurant(data);
    } catch (err) {}
  };

  const { setStorage } = useStorage<Restaurant>(
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
