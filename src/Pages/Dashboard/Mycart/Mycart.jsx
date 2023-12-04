import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const Mycart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://bisto-boss-server-two.vercel.app/carts/${item._id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data=>{
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            })
        }
      });
  }

  return (
    <div className="w-full">
      <Helmet>
        <title> Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase text-semibold flex justify-evenly h-[60px] items-center">
        <h1 className="text-3xl">Total order :{cart.length}</h1>
        <h1 className="text-3xl">Total Price: ${totalPrice}</h1>
        <Link to='/dashboard/payment'><button className="btn bg-[#D1A054] btn-sm">Pay now</button></Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Food Image</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) =><tr key={item._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-circle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.name}
              </td>
              <td className="text-end">${item.price}</td>
              <th>
                <button onClick={() => handleDelete(item)} className="btn bg-red-600 btn-xs text-lg"><FaTrash/> </button>
              </th>
            </tr>)}
 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mycart;
