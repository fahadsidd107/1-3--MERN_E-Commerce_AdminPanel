import React, { useMemo } from "react";
import "./Chart.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ title, data, userDataKey, salesDataKey, grid }) {
  const [chartData, setChartData] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getChartData = async () => {
      try {
        const res = await userRequest(`/user/stats`);
        res.data.map((item) => {
          setChartData((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch (err) {}
    };
    getChartData();
  }, [MONTHS]);

  // console.log(chartData);

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" stroke="#5551bd" />
          <YAxis />
          <Line type="monotone" dataKey={salesDataKey} stroke="#5551bd" />
          <Line
            type="monotone"
            dataKey={userDataKey}
            stroke="rgb(16, 170, 124)"
          />
          <Legend />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
