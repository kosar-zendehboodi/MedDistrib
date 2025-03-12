import React from "react";

const InfoCard = ({ icon, title, value, percentage, percentageColor = "text-error-600" }) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl w-3xs shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-200">
        {icon}
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
          <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
            {value}
          </h4>
        </div>

        {percentage && (
          <span
            className={`flex items-center gap-1 rounded-full bg-error-50 py-0.5 pl-2 pr-2.5 text-sm font-medium ${percentageColor} dark:bg-error-500/15 dark:text-error-500`}
          >
            <svg
              className="fill-current"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.31462 10.3761C5.45194 10.5293 5.65136 10.6257 5.87329 10.6257C5.8736 10.6257 5.8739 10.6257 5.87421 10.6257C6.0663 10.6259 6.25845 10.5527 6.40505 10.4062L9.40514 7.4082C9.69814 7.11541 9.69831 6.64054 9.40552 6.34754C9.11273 6.05454 8.63785 6.05438 8.34486 6.34717L6.62329 8.06753L6.62329 1.875C6.62329 1.46079 6.28751 1.125 5.87329 1.125C5.45908 1.125 5.12329 1.46079 5.12329 1.875L5.12329 8.06422L3.40516 6.34719C3.11218 6.05439 2.6373 6.05454 2.3445 6.34752C2.0517 6.64051 2.05185 7.11538 2.34484 7.40818L5.31462 10.3761Z"
              />
            </svg>
            {percentage}%
          </span>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
