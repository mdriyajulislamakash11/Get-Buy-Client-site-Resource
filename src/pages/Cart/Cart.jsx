import React from "react";
import useCart from "../../hook/useCart";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [cart, refetch] = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="py-16">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">🛒 My Cart</h2>
        <div className="flex justify-between mb-4">
          <p className="text-lg font-semibold">Total Items: {cart.length}</p>
          <p className="text-lg font-semibold">
            Total Price: ${total.toFixed(2)}
          </p>
          <button className="btn btn-outline px-8">Pay</button>
        </div>

        <div className="overflow-x-auto shadow rounded-lg">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-indigo-500 text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td>{index + 1}</td>
                  <td>
                    <div className="w-16 h-16 rounded-lg overflow-hidden border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="font-medium">{item.name}</td>
                  <td className="text-indigo-600 font-semibold">
                    ${item.price}
                  </td>
                  
                  <td>
                    <button className="btn btn-error btn-sm text-white">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
