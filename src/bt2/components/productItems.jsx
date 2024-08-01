import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function ProductItems({ product }) {
  return (
    <div>
      <div className="h-[400px] w-[200px] p-1 bg-gradient-to-r from-pink-100 to-pink-200 shadow-xl rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
        <div className="relative h-52">
          <img
            src={product.imgSrc}
            alt={product.name}
            className="h-full w-full object-cover rounded-t-xl"
          />
        </div>
        <div className="text-left p-4">
          <h1 className="text-lg font-bold text-gray-800">{product.name}</h1>
          <p className="text-yellow-500 mt-1">{product.rating}</p>
          <div className="flex justify-between items-center mt-3">
            <h2 className="text-xl font-semibold text-red-500">
              {product.price}
            </h2>
            <ShoppingCartOutlinedIcon className="text-blue-500 cursor-pointer transition-transform hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
