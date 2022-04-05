import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 80401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 105500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 217010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 200405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 250900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 281000,
    },
  ];
  return [
    <div className="grid md:grid-cols-3 sm:grid-cols-1 ">
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-blue-600">
          Month Wise Sell
        </h1>
        <LineChart width={500} height={300} data={data}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      ,
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-blue-600">
          Investment vs Revenue
        </h1>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Bar dataKey="investment" fill="#8884d8"></Bar>
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      ,
    </div>,
  ];
};

export default Dashboard;
