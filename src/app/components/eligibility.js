import React from "react";
import styles from "./profile.module.css";

const Eligibility = ({ eligibility }) => {
  if (Object.keys(eligibility).length === 0) {
    return "";
  } else {
    return (
      <div className="grid justify-items-center">
        <div
          className={`${styles.clientData} grid grid-cols-3 content-start h-auto w-1/2 m-4 p-4 rounded border shadow`}
        >
          <div>
            <h1>Client ID</h1>
            <span>{eligibility.clientId}</span>
          </div>
          <div>
            <h1>Name</h1>
            <span>{eligibility.name}</span>
          </div>
          <div>
            <h1>Loan Eligibility</h1>
            <span>{String(eligibility.eligibility)}</span>
          </div>
          <div>
            <h1>Maximum Monthly Payment</h1>
            <span>{eligibility.maxMonthlyPayment}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Eligibility;
