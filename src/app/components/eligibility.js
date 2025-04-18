import React from "react";
import styles from "./profile.module.css";

const Eligibility = ({ eligibility }) => {
  if (Object.keys(eligibility).length === 0) {
    return "";
  } else {
    return (
      <div className="grid justify-items-center w-full">
        <div
          className={`${styles.clientData} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 content-start h-auto w-full sm:w-4/5 md:w-2/3 m-4 p-4 rounded-lg border shadow-lg bg-white`}
        >
          <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-200">
            <h1 className="text-sm font-semibold text-gray-600 mb-1">Client ID</h1>
            <span className="text-base text-gray-800">{eligibility.clientId}</span>
          </div>
          <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-200">
            <h1 className="text-sm font-semibold text-gray-600 mb-1">Name</h1>
            <span className="text-base text-gray-800">{eligibility.name}</span>
          </div>
          <div className="p-3 border-b sm:border-b-0 border-gray-200">
            <h1 className="text-sm font-semibold text-gray-600 mb-1">Loan Eligibility</h1>
            <span className={`text-base font-semibold ${eligibility.eligibility ? "text-green-600" : "text-red-600"}`}>
              {String(eligibility.eligibility)}
            </span>
          </div>
          <div className="p-3 col-span-1 sm:col-span-2 md:col-span-3">
            <h1 className="text-sm font-semibold text-gray-600 mb-1">Maximum Monthly Payment</h1>
            <span className="text-base text-gray-800">${eligibility.maxMonthlyPayment.toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Eligibility;
