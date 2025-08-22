import { useQuery } from "@tanstack/react-query";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import SectionlTitle from "../pages/Share/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch payment history
  const { data: payments = [] } = useQuery({
    queryKey: [user?.email, "payment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <SectionlTitle
        heading="Payment History"
        subHeading="Your previous payments"
      />

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
              <th className="border border-gray-300 px-4 py-2">Amount ($)</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 ? (
              payments.map((p, index) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{p.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{p.transactionId}</td>
                  <td className="border border-gray-300 px-4 py-2">${p.price}</td>
                  <td className="border border-gray-300 px-4 py-2 capitalize">{p.status}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <td className="border border-gray-300 px-4 py-2">
  {new Date("2025-08-22T14:30:00").toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</td>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No payments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
