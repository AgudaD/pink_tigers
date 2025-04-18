import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="bg-amber-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">  
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
