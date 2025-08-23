import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../hook/useAxiosSecure';
import { FaDollarSign, FaUsers, FaBoxOpen, FaShoppingCart } from 'react-icons/fa';

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();

    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    if (isLoading) {
        return <p className="text-center text-lg font-semibold">Loading...</p>;
    }

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">📊 Admin Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Revenue */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                    <FaDollarSign className="text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Revenue</h3>
                    <p className="text-3xl font-bold mt-2">${stats.revenue || 0}</p>
                </div>

                {/* Users */}
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                    <FaUsers className="text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Users</h3>
                    <p className="text-3xl font-bold mt-2">{stats.users || 0}</p>
                </div>

                {/* Products */}
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                    <FaBoxOpen className="text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Products</h3>
                    <p className="text-3xl font-bold mt-2">{stats.products || 0}</p>
                </div>

                {/* Orders */}
                <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                    <FaShoppingCart className="text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Orders</h3>
                    <p className="text-3xl font-bold mt-2">{stats.orders || 0}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
