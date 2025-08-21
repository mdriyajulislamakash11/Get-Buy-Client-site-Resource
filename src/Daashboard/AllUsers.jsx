import React from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser, FaUserAlt } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Something went wrong!</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.name || "N/A"}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                    <button className="btn text-orange-400 ">
                        <FaUserAlt />
                    </button>
                </td>
                <td className="p-2">
                  <button className="btn text-red-600 ">
                    <FaTrashAlt />{" "}
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

export default AllUsers;
