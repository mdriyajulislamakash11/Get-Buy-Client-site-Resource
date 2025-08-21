import React from "react";
import { FaUtensils } from "react-icons/fa";
import SectionlTitle from "../pages/Share/SectionTitle";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionlTitle
        heading={"add an item"}
        subHeading="what's new "
      ></SectionlTitle>

      {/* react hook from theke ana hoyese */}
      <div className="p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              required
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Popular">Popular</option>
                <option value="Fashion & Apparel">Fashion & Apparel</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Beauty & Personal Care">"Beauty & Personal Care"</option>
                <option value= "Sports & Outdoors"> "Sports & Outdoors"</option>
                <option value="Books & Stationery">"Books & Stationery"</option>
                <option value="Toys & Games">"Toys & Games"</option>
                <option value= "Health & Wellness"> "Health & Wellness"</option>
                <option value="Automotive">"Automotive"</option>
                <option value="Groceries">"Groceries"</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
          </div>

          {/* recipe details */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Your bio</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Bio"
            ></textarea>
          </div>

          {/* file input */}
          <div className=" my-5">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full "
            />
          </div>

          <button type="submit" className="btn">
            Add Items <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
