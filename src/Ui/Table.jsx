import React from 'react';

export const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
