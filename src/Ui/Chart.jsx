import React from "react";
import Chart from "react-apexcharts";
import { MoreHorizontal } from "lucide-react";

const ChartComponent = ({ data }) => {
  const options = {
    chart: {
      id: "basic-bar",
      background: "#ffffff",
      
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "30%",
      },
    },
    xaxis: {
      categories: [
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
    },
    yaxis: {
      title: {
        text: "Value",
      },
    },
    title: {
      text: "Monthly Sales",
      align: "left",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "10px",
        fontWeight: "normal",
        colors: ["#000"],
      },
      offsetY: 5,
      rotation: 0,
    },
  };

  const series = [
    {
      name: "Sales",
      data: data,
    },
  ];

  return (
    <div className="chart-container rounded-xl pt-1  bg-white m-4 ">
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Chart options={options} series={series} type="bar" height={260} />{" "}
      </div>
    </div>
  );
};

export default ChartComponent;
