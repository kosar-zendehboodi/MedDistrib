import React from "react";
import { SquareEqual, SquareUser } from "lucide-react";
import OrderCard from "../../../Ui/OrderCard";
import Chart from "../../../Ui/Chart";
import MonthlyTarget from "../../../Ui/MontlyTarget";
import Table from "../../common/Table/Table";
import { useDarkMode } from "../../../context/DarkmodeContext";

const AdminDashboard = () => {
  const { isDarkMode } = useDarkMode(); // گرفتن وضعیت دارک مود

  const data = [502, 623, 784, 541, 633, 710, 801, 902, 985, 1072, 1145, 1201];
  const columns = ["اسم محصول", "شرکت", "آی‌دی محصول در شرکت", "شناسه دارویی"];
  const datas = [
    { "اسم محصول": "محصول A", شرکت: "شرکت X", "آی‌دی محصول در شرکت": "12345", "شناسه دارویی": "A123" },
    { "اسم محصول": "محصول B", شرکت: "شرکت Y", "آی‌دی محصول در شرکت": "67890", "شناسه دارویی": "B456" },
    { "اسم محصول": "محصول C", شرکت: "شرکت Z", "آی‌دی محصول در شرکت": "11223", "شناسه دارویی": "C789" },
  ];

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <h2>med rep Page</h2>
      <div className="flex justify-center items-center">
        <div className="grid-cols-1 w-2xl col-auto">
          <div className="flex row-auto justify-center">
            <div className="p-4">
              <OrderCard
                className="p-4 border border-gray-200/65"
                icon={<SquareEqual className="w-6 h-8" />}
                title="مشتریان"
                value="$20,000"
                percentage={-2.5}
                percentageColor={isDarkMode ? "text-green-400" : "text-green-600"}
              />
            </div>
            <div className="p-4">
              <OrderCard
                className="p-4 border border-gray-200/65"
                icon={<SquareUser className="w-6 h-8" />}
                title="مشتریان"
                value="$20,000"
                percentage={-2.5}
                percentageColor={isDarkMode ? "text-red-400" : "text-red-600"}
              />
            </div>
          </div>
          <div>
            <Chart className={isDarkMode ? "bg-gray-800" : "bg-white"} data={data} />
          </div>
        </div>
        <div className="mt-7 grid-cols-0 w-xs">
          <MonthlyTarget />
        </div>
      </div>
      <div className="flex justify-evenly p-4">
        <Table
          className={isDarkMode ? "border border-gray-700" : "border border-gray-200/65"}
          columns={columns}
          datas={datas}
        />
        <div><div>non</div></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
