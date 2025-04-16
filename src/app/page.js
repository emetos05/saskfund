"use client";
import { useState } from "react";

import styles from "./home.module.css";
// import AllProfile from "./components/allProfile";
// import Eligibility from "@/components/eligibility";
import ClientDetails from "./components/clientDetails";

export default function Home() {
  const [term, setTerm] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const [allProfile, setAllProfile] = useState([]);
  const [eligibility, setEligibility] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getClient = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setIsProfile(true);
    setEligibility({});

    try {
      const url = term.trim().length > 0 
        ? `/api/profile?${isNaN(term) ? 'name' : 'id'}=${term}`
        : null;

      if (!url) {
        setError("Please enter a valid name or ID");
        return;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to fetch client details");
        return;
      }

      setAllProfile(Array.isArray(data.clientProfile) ? data.clientProfile : [data.clientProfile]);
    } catch (error) {
      setError("An error occurred while fetching client details");
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
      setTerm("");
    }
  };

  const checkEligibility = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setIsProfile(false);
    setAllProfile([]);

    try {
      const url = term.trim().length > 0 
        ? `/api/eligibility?${isNaN(term) ? 'name' : 'id'}=${term}`
        : null;

      if (!url) {
        setError("Please enter a valid name or ID");
        return;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        if (data.profiles) {
          setError("Multiple clients found. Please use client ID instead.");
          setAllProfile(data.profiles);
          return;
        }
        setError(data.error || "Failed to check eligibility");
        return;
      }

      setEligibility(data);
    } catch (error) {
      setError("An error occurred while checking eligibility");
      console.error("Error checking eligibility:", error);
    } finally {
      setLoading(false);
      setTerm("");
    }
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
              placeholder="Enter Client Name or ID"
              required
            ></input>
          </div>
          <div className="flex submitPanel justify-center">
            <button
              className={`${styles.btn} ${styles.btnBlue} mx-8`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Get Client Details"}
            </button>
            <button
              onClick={checkEligibility}
              className={`${styles.btn} ${styles.btnBlue}`}
              type="button"
              disabled={loading}
            >
              {loading ? "Loading..." : "Check Loan Eligibility"}
            </button>
          </div>
        </form>
      </div>
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}
      <ClientDetails
        isProfile={isProfile}
        allProfile={allProfile}
        eligibility={eligibility}
      />
    </section>
  );
}
