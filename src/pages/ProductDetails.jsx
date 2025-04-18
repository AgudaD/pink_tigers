import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({ products }) => {
    const { productId } = useParams();

    const product = products.find((product) => product.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

  return (
    <div>
        <div className="flex items-center justify-center bg-white shadow-md rounded-lg m-4 hover:shadow-lg transition-shadow duration-300">
            <div key={product.id} className="flex items-center justify-center  space-y-4">
            <img src={product.image} alt={product.name} className="w-full h-[20rem] object-cover mb-4" />
            <div className="p-4 space-y-5">
                <h2 className="text-lg font-semibold capitalize">{product.name}</h2>
                <p className="text-gray-600 capitalize">${product.price}</p>
                <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetails