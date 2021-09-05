import React, { createContext, useContext, useMemo, useState } from 'react';
import { ProductType } from '~/screens/menu/Menu';

export type BasketType = {
  product: ProductType;
  quantity: number;
}[];

type ContextProps = {
  basket: BasketType;
  addToBasket: (quantity: number, product: ProductType) => void;
  clearBasket: () => void;
  price: number;
};

const BasketContext = createContext<ContextProps>({
  basket: [],
  addToBasket: () => null,
  clearBasket: () => null,
  price: 0,
});

export const BasketProvider: React.FC = ({ children }) => {
  const [basket, setBasket] = useState<BasketType>([]);

  const addToBasket = (quantity: number, product: ProductType) => {
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

  const clearBasket = () => {
    setBasket([]);
  };

  const price = useMemo(() => {
    return basket.reduce(
      (acc, { quantity, product }) => (product.price || 0) * quantity + acc,
      0,
    );
  }, [basket]);

  return (
    <BasketContext.Provider value={{ basket, addToBasket, clearBasket, price }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
