import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const MonthlyTarget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Chart data
  const chartOptions = {
    chart: {
      type: 'radialBar',
      width: '80%',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        dataLabels: {
          show: true,
          name: {
            fontSize: '16px',
            color: '#000',
          },
          value: {
            fontSize: '30px',
            color: '#000',
          },
        },
      },
    },
    fill: {
      colors: ['#4CAF50'],
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  };
  
  const chartSeries = [75]; // This can be dynamic

  return (
    <div className="w-full   shadow-lg rounded-lg p-6 dark:bg-white dark:text-black">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-black">Monthly Target</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Target you’ve set for each month</p>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-500 hover:text-gray-700 dark:text-black dark:hover:text-gray-300"
        >
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute bg-white border shadow-lg rounded-lg p-2 mt-1 w-40">
            <button className="text-gray-500 text-sm py-2 px-3 hover:bg-gray-100 w-full text-left">View More</button>
            <button className="text-gray-500 text-sm py-2 px-3 hover:bg-gray-100 w-full text-left">Delete</button>
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="flex justify-center py-6 dark:text-gray-500">
        <ApexCharts  options={chartOptions} series={chartSeries} type="radialBar" height="250" />
      </div>
{/* 
      <span className="absolute left-1/2 top-[85%] -translate-x-1/2 -translate-y-[85%] rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">+10%</span> */}

      {/* Info Text */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-800 mt-3">
        You earn $3287 today, it's higher than last month. Keep up your good work!
      </p>

      {/* Target, Revenue, and Today Section */}
      <div className="flex justify-between mt-6">
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-800">Target</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-black">$20K</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-800">Revenue</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-black">$15K</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-800">Today</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-black">$3287</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTarget;
