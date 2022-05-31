import React from "react";

export default function ProductItem({product}) {
  return (
    <div>
      <div className="card mt-5">
        <img
          width="350px"
          src={product.image}
          alt=""
        />
        <p>{product.name}</p>
        <p>{product.price} $</p>
        <button
          className="w-50 bg-dark text-light border border-none mb-3"
          style={{ height: "50px" }} data-toggle="modal" data-target="#exampleModal"
        >
          add to card
        </button>
    
        
      </div>
    </div>
  );
}
