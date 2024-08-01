import React from "react";
import "./productList.css";

function ProductList() {
  return (
    <div className='h-[500px] w-full text-blue-700 bg-white flex justify-evenly '>
      <div className="sp">
        <img
          src="https://th.bing.com/th/id/OIP.Ra9fhUYxkXh4aTIIancCWAHaJ4?rs=1&pid=ImgDetMain"
          alt=""
        />
        12PRM <br />
        5000$ <br />
        <button>mua ngay</button>
      </div>
      <div className="sp">
        <img
          src="https://th.bing.com/th/id/OIP.Ra9fhUYxkXh4aTIIancCWAHaJ4?rs=1&pid=ImgDetMain"
          alt=""
        />
        12prm <br />
        5000$ <br />
        <button>mua ngay</button>
      </div>
      <div className="sp">
        <img
          src="https://th.bing.com/th/id/OIP.Ra9fhUYxkXh4aTIIancCWAHaJ4?rs=1&pid=ImgDetMain"
          alt=""
        />
        12prm <br />
        5000$ <br />
        <button>mua ngay</button>
      </div>{" "}
      <div className="sp">
        <img
          src="https://th.bing.com/th/id/OIP.Ra9fhUYxkXh4aTIIancCWAHaJ4?rs=1&pid=ImgDetMain"
          alt=""
        />
        12prm <br />
        5000$ <br />
        <button>mua ngay</button>
      </div>
    </div>
  );
}

export default ProductList;
