import React from "react";
import styles from "./profile.module.css";

const Profile = ({ profile }) => {
  return (
    <div className="grid justify-items-center">
      <div
        className={`${styles.clientData} grid grid-cols-3 content-start h-auto w-1/2 m-4 p-4 rounded border shadow`}
      >
        <div>
          <h1>Client ID</h1>
          <span>{profile.id}</span>
        </div>
        <div>
          <h1>Name</h1>
          <span>{profile.name}</span>
        </div>
        <div>
          <h1>Gender</h1>
          <span>{profile.gender}</span>
        </div>
        <div>
          <h1>Age</h1>
          <span>{profile.age}</span>
        </div>
        <div>
          <h1>City</h1>
          <span>{profile.city}</span>
        </div>
        <div>
          <h1>Gold Membership</h1>
          <span>{profile.financial?.goldMembership === 1 ? "Yes" : "No"}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
