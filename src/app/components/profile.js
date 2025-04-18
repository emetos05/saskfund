import React from "react";
import styles from "./profile.module.css";

const Profile = ({ profile }) => {
  return (
    <div className="grid justify-items-center w-full">
      <div
        className={`${styles.clientData} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 content-start h-auto w-full sm:w-4/5 md:w-2/3 m-4 p-4 rounded-lg border shadow-lg bg-white`}
      >
        <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-200">
          <h1 className="text-sm font-semibold text-gray-600 mb-1">Client ID</h1>
          <span className="text-base text-gray-800">{profile.id}</span>
        </div>
        <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-200">
          <h1 className="text-sm font-semibold text-gray-600 mb-1">Name</h1>
          <span className="text-base text-gray-800">{profile.name}</span>
        </div>
        <div className="p-3 border-b sm:border-b-0 border-gray-200">
          <h1 className="text-sm font-semibold text-gray-600 mb-1">Gender</h1>
          <span className="text-base text-gray-800">{profile.gender}</span>
        </div>
        <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-200">
          <h1 className="text-sm font-semibold text-gray-600 mb-1">Age</h1>
          <span className="text-base text-gray-800">{profile.age}</span>
        </div>
        <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-200">
          <h1 className="text-sm font-semibold text-gray-600 mb-1">City</h1>
          <span className="text-base text-gray-800">{profile.city || "N/A"}</span>
        </div>
        <div className="p-3">
          <h1 className="text-sm font-semibold text-gray-600 mb-1">Gold Membership</h1>
          <span className="text-base text-gray-800">{profile.financial?.goldMembership === 1 ? "Yes" : "No"}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
