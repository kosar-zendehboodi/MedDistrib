import React from "react";
import { FiFilter } from 'react-icons/fi';
const RecentOrdersTable = ({ columns, datas }) => {
  return (
    <div className="flex col-auto justify-center items-center ">
      <div className="overflow-x-auto bg-white shadow flex justify-center flex-col items-center rounded-lg">
        <div className="flex flex-row items-center justify-between p-3 ">
          <div>
            <h2>آخرین فروش</h2>
          </div>
          <div className="flex flex-row justify-end  pr-44">
            <button class=" text-black p-2 ml-2 rounded flex items-center border border-gray-200/65">
              <FiFilter className="text-black" />
              فیلتر
            </button>
            <button class=" text-black p-2 rounded flex items-center border border-gray-200/65">
            
              مشاهده همه
            </button>
          </div>
        </div>
        <table className="min-w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-6 py-3 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datas.map((row, index) => (
              <tr
                key={index}
                className="rounded-lg border border-gray-200/50 hover:bg-gray-50 transition"
              >
                {columns.map((col) => (
                  <td key={col} className="text-center px-6 py-4 text-gray-800">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
