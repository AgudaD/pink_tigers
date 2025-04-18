import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Product = ({ id, image, name, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg m-4 hover:shadow-lg transition-shadow duration-300">
      <div key={id} className="flex flex-col items-start justify-center  space-y-4">
        <img src={image} alt={name} className="w-full h-[20rem] object-cover mb-4" />
        <div className="p-4 space-y-5">
            <h2 className="capitalize">{name}</h2>
            <p className="text-gray-600 text-lg capitalize font-semibold">${price}</p>
            <Link to={`/products/${id}`}><Button text="buy now" className="mt-4" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
