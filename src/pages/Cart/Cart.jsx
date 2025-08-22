import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useCart from "../../hook/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete oparetions:
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">🛒 My Cart</h2>
        <div className="flex justify-between mb-4">
          <p className="text-lg font-semibold">Total Items: {cart.length}</p>
          <p className="text-lg font-semibold">
            Total Price: ${total.toFixed(2)}
          </p>
          {
            cart.length ? <Link to='/dashboard/payment'>
            <button className="btn btn-primary px-8">Pay</button>
          </Link> : <button disabled={ !cart.length } className="btn btn-primary px-8">Pay</button>
          }
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
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error btn-sm text-white"
                    >
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
