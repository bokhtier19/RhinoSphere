"use client";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import { Loader } from "lucide-react";

interface Fee {
  id: number;
  amount: number;
  status: string;
  dueDate: string;
  paidAt?: string | null;
  student: {
    name: string;
    guardian: {
      email: string;
    };
  };
}


const FeePage = () => {
  const [loading, setLoading] = useState(true);
  const [fees, setFees] = useState<Fee[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchFromAPI("api/fees", "GET");
        setFees(data);
      } catch (error) {
        console.error("Failed to fetch Users", error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
      <Loader className="h-8 w-8 animate-spin text-primary" />
    </div>;
    }

  return (
   <div className="p-6">
  <h2 className="text-xl font-bold mb-4">Manage Fees</h2>
  <table className="w-full border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="p-2 border">ID</th>
        <th className="p-2 border">Student</th>
        <th className="p-2 border">Guardian Email</th>
        <th className="p-2 border">Amount</th>
        <th className="p-2 border">Status</th>
        <th className="p-2 border">Due Date</th>
        <th className="p-2 border">Paid At</th>
      </tr>
    </thead>
    <tbody>
      {fees.map((fee) => (
        <tr key={fee.id} className="text-justify">
          <td className="p-2 border">{fee.id}</td>
          <td className="p-2 border">{fee.student?.name}</td>
          <td className="p-2 border">{fee.student?.guardian?.email}</td>
          <td className="p-2 border">₹{fee.amount}</td>
          <td className="p-2 border">{fee.status}</td>
          <td className="p-2 border">
            {new Date(fee.dueDate).toLocaleDateString()}
          </td>
          <td className="p-2 border">
            {fee.paidAt ? new Date(fee.paidAt).toLocaleDateString() : "—"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default FeePage;
