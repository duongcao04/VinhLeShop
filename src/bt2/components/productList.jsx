import React from "react";
import ProductItems from "./productItems";


const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Whey Bạc",
      price: "1.400.000đ",
      rating: "★★★★★",
      imgSrc: "../img/whey bạc.webp",
    },
    {
      id: 2,
      name: "Whey vàng",
      price: "1.280.000đ",
      rating: "★★★★☆",
      imgSrc: "https://bizweb.dktcdn.net/thumb/large/100/350/151/products/z4434587843349-60f9d00c0a9c1fa13ef0bf6496032ce9.jpg?v=1688891064003",
      
    },
    {
      id: 3,
      name: "Whey tím",
      price: "1.350.000đ",
      rating: "★★★★★",
      imgSrc: "https://bizweb.dktcdn.net/thumb/large/100/350/151/products/z4434587843349-60f9d00c0a9c1fa13ef0bf6496032ce9.jpg?v=1688891064003",
      
    },
    {
      id: 4,
      name: "Whey đỏ",
      price: "1.320.000đ",
      rating: "★★★★☆",
      imgSrc: "https://bizweb.dktcdn.net/thumb/large/100/350/151/products/z4434587843349-60f9d00c0a9c1fa13ef0bf6496032ce9.jpg?v=1688891064003",
      
    },
    {
      id: 5,
      name: "Whey cô đơn",
      price: "1.310.000đ",
      rating: "★★★★★",
      imgSrc: "https://bizweb.dktcdn.net/thumb/large/100/350/151/products/z4434587843349-60f9d00c0a9c1fa13ef0bf6496032ce9.jpg?v=1688891064003",
      
    },
    {
      id: 6,
      name: "Whey cô đơn",
      price: "1.310.000đ",
      rating: "★★★★★",
      imgSrc: "https://bizweb.dktcdn.net/thumb/large/100/350/151/products/z4434587843349-60f9d00c0a9c1fa13ef0bf6496032ce9.jpg?v=1688891064003",
    },
    {
      id: 7,
      name: "Whey cô đơn",
      price: "1.310.000đ",
      rating: "★★★★★",
      imgSrc: "https://bizweb.dktcdn.net/thumb/large/100/350/151/products/z4434587843349-60f9d00c0a9c1fa13ef0bf6496032ce9.jpg?v=1688891064003",
    },
    {
      id: 8,
      name: "Whey cô đơn",
      price: "1.310.000đ",
      rating: "★★★★★",
      imgSrc: "https://bizweb.dktcdn.net/thumb/large/100/350/151/products/z4434587843349-60f9d00c0a9c1fa13ef0bf6496032ce9.jpg?v=1688891064003",
      
    },
  ];
  return (
    <div className=" grid grid-cols-4 place-items-center   ">
      {products.map((product, index) => (
        <div key={index} className="p-5">
          <ProductItems product={product} />  
        </div>
      ))}
    </div>
  );
};

export default ProductList;
