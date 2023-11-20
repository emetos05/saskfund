import React from "react";
import Profile from "./profile";

const AllProfile = ({ allProfile }) => {
  return (
    <div>
      {allProfile.map((profile) => (
        <Profile profile={profile} key={profile.id} />
      ))}
    </div>
  );
};

export default AllProfile;
