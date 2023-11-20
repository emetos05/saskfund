"use client";
import { useState } from "react";

import styles from "./home.module.css";
// import AllProfile from "./components/allProfile";
// import Eligibility from "@/components/eligibility";
import ClientDetails from "./components/clientDetails";

export default function Home() {
  let name = "";
  let id = 0;
  let url;

  const [term, setTerm] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const [allProfile, setAllProfile] = useState([]);
  const [eligibility, setEligibility] = useState({});

  isNaN(+term) ? (name = term) : (id = +term);

  const getClient = async (e) => {
    e.preventDefault();

    id > 0
      ? (url = `/api/profile?id=${id}`)
      : (url = `/api/profile?name=${name}`);

    const res = await fetch(url);
    if (res) {
      const json = await res.json();
      const data = json.clientProfile;

      if (id) {
        const profileData = {
          id: data.id,
          name: data.name,
          gender: data.gender,
          age: data.age,
          city: data.city,
          goldMembership: data.financial.goldMembership === 0 ? "No" : "Yes",
        };
        setAllProfile([profileData]);
      } else if (name) {
        const manyProfile = [];

        data.map((profile) => {
          const profileData = {
            id: profile.id,
            name: profile.name,
            gender: profile.gender,
            age: profile.age,
            city: profile.city,
            goldMembership:
              profile.financial.goldMembership === 0 ? "No" : "Yes",
          };
          manyProfile.push(profileData);
        });
        setAllProfile(manyProfile);
      }

      setIsProfile(true);
    }

    setTerm("");
  };

  const checkEligibility = async (e) => {
    e.preventDefault();

    url = `/api/eligibility?id=${id}`;

    const res = await fetch(url);
    if (res) {
      const json = await res.json();
      setEligibility(json);

      setIsProfile(false);
    }

    setTerm("");
  };

  return (
    <section className="flex flex-col">
      <div className={`${styles.intro} text-white mb-8`}>
        <div className="flex font-semibold text-lg justify-center mb-9">
          Dream big with SaskFund Co.
        </div>
        <form onSubmit={getClient}>
          <div className="flex input justify-center mb-9">
            <label htmlFor="searchTerm" className="mr-8"></label>
            <input
              id="searchTerm"
              className="rounded px-3 py-4 w-96 text-black"
              name="search"
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Client ID or Name"
            ></input>
          </div>
          <div className="flex submitPanel justify-center ">
            <button
              className={`${styles.btn} ${styles.btnBlue} mx-8`}
              type="submit"
            >
              Get Client Details
            </button>
            <button
              onClick={checkEligibility}
              className={`${styles.btn} ${styles.btnBlue}`}
              type="button"
            >
              Check Eligibility
            </button>
          </div>
        </form>
      </div>
      <ClientDetails
        isProfile={isProfile}
        allProfile={allProfile}
        eligibility={eligibility}
      />
    </section>
  );
}
