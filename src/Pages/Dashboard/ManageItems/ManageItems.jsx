import React from "react";
import UseMenu from "../../../Hooks/UseMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageItems = () => {
  const [menu, , refetch] = UseMenu();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = item =>{
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
 
    axiosSecure.delete(`/menu/${item._id}`)
    .then(res =>{
        console.log('deleted count', res.data);
        if(res.data.deletedCount > 0){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            refetch()
        }
    })
        }
      });
  }
  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"hurry up"}
        Heading={"what's new"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Photo</th>
              <th>Name</th>
              <th className="text-right">Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td> {item.category}</td>
                <td className="text-right">${item.price}</td>
                <td>
                <button onClick={() => handleDelete(item)} className="btn bg-sky-400 btn-xs text-lg"><FaEdit/> </button>
                </td>
                <td>
                <button onClick={() => handleDelete(item)} className="btn btn-xs text-lg"><FaTrash/> </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
