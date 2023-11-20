import React from "react";

import AllProfile from "./allProfile";
import Eligibility from "./eligibility";

const ClientDetails = ({ isProfile, allProfile, eligibility }) => {
  if (isProfile) {
    return <AllProfile allProfile={allProfile} />;
  }
  return <Eligibility eligibility={eligibility} />;
};

export default ClientDetails;
