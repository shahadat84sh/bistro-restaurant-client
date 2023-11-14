import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_image_upload_token;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const {register,handleSubmit, reset} = useForm();

  const onSubmit= data => {
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(img_hosting_url,{
        method:'POST',
        body:formData
    })
    .then(res => res.json())
    .then(imgResponse =>{
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url
            const {name, price, category, recipe} = data;
            const newItem = {name, price:parseFloat(price), category, recipe, image:imgURL} 
            console.log(newItem);
            axiosSecure.post('/menu', newItem)
            .then( data=>{
                console.log('Data after axios post', data.data);
                if(data.data.insertedId){
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "An Item has been added successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        };
    })
  }
  return (
    <div className="w-full">
      <Helmet title="Bistro Boss | Dashboard | Add An Item"></Helmet>
      <SectionTitle
        subHeading="What's New"
        Heading="Add an Item"
      ></SectionTitle>
      <div className="hero bg-base-200 mb-16">
        <div className="hero-content w-3/4">
          <div className="card flex-shrink-0 w-full shadow-xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Recipe Name"
                  {...register("name", { required: true, maxLength: 120 })}
                  className="input input-bordered"
                />
              </div>
              <div className="flex w-full gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Category*</span>
                  </label>
                  <select defaultValue={"Category"}{...register("category", {required:true})} className="select select-bordered w-full">
                    <option disabled >
                      Category
                    </option>
                    <option>Pizza</option>
                    <option>Salad</option>
                    <option>Soup</option>
                    <option>Drinks</option>
                    <option>Desert</option>
                  </select>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Price*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    {...register("price", { required: true })}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <label className="label">
                <span className="label-text">About Recipe*</span>
              </label>
              <textarea
                className=" w-full textarea textarea-bordered"
                placeholder="Recipe Detail"
                {...register("recipe", { required: true, maxLength: 220 })}
              ></textarea>
              <input
                type="file"
                {...register("image", { required: true})}
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
              <input
                type="submit"
                value="Add Item"
                className=" bg-yellow-700 btn btn-sm w-28"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
