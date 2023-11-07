import React from "react";

const FoodCard = ({items}) => {
    const {name, recipe, image, price} = items;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="text-white bg-slate-700 absolute right-0 px-5 rounded-sm mr-5 mt-5">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="border-b-yellow-400 px-4 py-2 border-b-2 bg-white text-yellow-300 hover:bg-black hover:rounded-md">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
