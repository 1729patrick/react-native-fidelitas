import React, { createContext, useContext, useState } from 'react';
import { BasketType, MenuItemType } from '~/screens/menu/Menu';

type ContextProps = {
  basket: BasketType;
  addToBasket: (quantity: number, product: MenuItemType) => void;
};

const BasketContext = createContext<ContextProps>({
  basket: [],
  addToBasket: () => null,
});

export const BasketProvider: React.FC = ({ children }) => {
  const [basket, setBasket] = useState<BasketType>([]);

  const addToBasket = (quantity: number, product: MenuItemType) => {
    setBasket(basket => {
      const index = basket.findIndex(({ product: p }) => p.id === product.id);

      if (index === -1) {
        return [...basket, { quantity, product }];
      }

      const newBasket = [...basket];
      newBasket.splice(index, 1, { product, quantity });

      return newBasket;
    });
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
