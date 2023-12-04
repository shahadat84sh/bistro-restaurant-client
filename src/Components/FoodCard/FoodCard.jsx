import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({items}) => {
  const {name, recipe, image, price, _id} = items;
  const [,refetch] = useCart()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleAddToCart = item =>{
    if(user && user.email){
      const cartItem = {menuItemId : _id, name, price, image, email: user.email}
      fetch('https://bisto-boss-server-two.vercel.app/carts', {
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch()      
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your food item has been add to cart",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
    else{
      Swal.fire({
        title: "Yo have to Log In first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log In"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      });
    }
  } 

    

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
          <button onClick={() => handleAddToCart(items)} className="border-b-yellow-400 px-4 py-2 border-b-2 bg-white text-yellow-300 hover:bg-black hover:rounded-md">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
