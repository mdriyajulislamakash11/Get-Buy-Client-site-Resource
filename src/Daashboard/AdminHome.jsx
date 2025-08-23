import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import {
  FaDollarSign,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
} from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BAR_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const PIE_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => (await axiosSecure.get("/admin-stats")).data,
  });

  const { data: chartStats = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => (await axiosSecure.get("/order-stats")).data,
  });

  if (isLoading) return <p className="text-center text-lg mt-20">Loading...</p>;

  // Pie Chart Data
  const pieChartData = chartStats.map((item) => ({
    name: item.category || "Unknown",
    value: item.revenue || 0,
  }));

  // Pie Chart Custom Label
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Custom Triangle Bar
  const TriangleBar = ({ fill, x, y, width, height }) => {
    const getPath = (x, y, width, height) =>
      `M${x},${y + height}C${x + width / 3},${y + height} ${
        x + width / 2
      },${y + height / 3} ${x + width / 2},${y}C${x + width / 2},${y + height / 3} ${
        x + (2 * width) / 3
      },${y + height} ${x + width},${y + height} Z`;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-3xl font-bold text-center md:text-left mb-6">
        📊 Admin Dashboard
      </h2>

      {/* Main Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<FaDollarSign />}
          title="Revenue"
          value={`$${stats.revenue?.toFixed(2) || "0.00"}`}
          gradient="from-purple-600 to-pink-500"
        />
        <StatCard
          icon={<FaUsers />}
          title="Users"
          value={stats.users || 0}
          gradient="from-green-400 to-blue-500"
        />
        <StatCard
          icon={<FaBoxOpen />}
          title="Products"
          value={stats.products || 0}
          gradient="from-yellow-400 to-orange-500"
        />
        <StatCard
          icon={<FaShoppingCart />}
          title="Orders"
          value={stats.orders || 0}
          gradient="from-red-400 to-pink-500"
        />
      </div>

      {/* Category Stats */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Category Stats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {chartStats.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-4 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-lg font-semibold">{item.category}</h4>
              <p className="mt-2">Quantity: {item.quantity}</p>
              <p>Revenue: ${item.revenue?.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartStats} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar dataKey="quantity" shape={<TriangleBar />} label={{ position: "top" }}>
              {chartStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={BAR_COLORS[index % BAR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Reusable Stats Card Component
const StatCard = ({ icon, title, value, gradient }) => (
  <div
    className={`bg-gradient-to-r ${gradient} text-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300`}
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

export default AdminHome;
