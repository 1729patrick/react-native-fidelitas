import React, { ReactNode } from 'react';

type ProductProps = {
  header: ReactNode;
  list: ReactNode;
};

const Product: React.FC<ProductProps> = ({ header, list }) => {
  return (
    <>
      {header}
      {list}
    </>
  );
};

export default Product;
