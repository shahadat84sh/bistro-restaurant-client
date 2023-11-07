import React from "react";
import ItemCard from "../../Home/PopularMenu/ItemCard";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-4">
        <button className="border-b-8 hover:bg-gray-400 hover:rounded-lg btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          <Link to={`/order/${title}`}>Order Your Favourite food</Link>
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
