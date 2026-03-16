"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ReportsPage() {
  const [revenue, setRevenue] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem("token");

        const [revenueRes] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}report/dailyRevenue`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          //   axios.get(
          //     `${process.env.NEXT_PUBLIC_BASE_URL}product/product-summary`,
          //     {
          //       headers: {
          //         Authorization: `Bearer ${token}`,
          //       },
          //     }
          //   ),
        ]);
        setRevenue(revenueRes.data);
        // setCategories(categoryRes.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>

      <h2 className="text-xl mb-4">Revenue</h2>

      {revenue.map((r: any) => (
        <p key={r.day}>
          {r.day} - ${r.revenue}
        </p>
      ))}
    </div>
  );
}
