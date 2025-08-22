import React from "react";
import useProduct from "../hook/useProduct";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../hook/useAxiosSecure";
import { Link } from "react-router-dom";

const ManagementProduct = () => {
  const [product, , refetch] = useProduct();
  const axiosSecure = useAxiosSecure();

  //   const handleUpdate = (product) => {
  //     axiosSecure.patch(`/products/${product._id}`).then((res) => {
  //       if (res.data.modifiedCount > 0) {
  //         Swal.fire({
  //           icon: "success",
  //           title: "Updated!",
  //           text: "Product updated successfully",
  //         });
  //         refetch()
  //       }
  //     });
  //   };

  const handleDelete = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${product.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${product._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire(
              "Deleted!",
              `${product.name} has been deleted.`,
              "success"
            );
          }
        });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Manage Products: {product.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td>{index + 1}</td>
                <td>
                  <img className="w-20 " src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td className="flex gap-2">
                  <Link to={`/dashboard/updateProduct/${item?._id}`}>
                    <button
                      // onClick={() => handleUpdate(item)}
                      className="btn btn-sm btn-info text-white"
                    >
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-sm btn-error text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagementProduct;
