"use client";
import { useState } from "react";
import ClientDetails from "../components/clientDetails";
import { FaSearch, FaUserCheck } from "react-icons/fa";

export default function SearchPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-sky-900 mb-4">
              Client Search
            </h1>
            <p className="text-gray-600">
              Search by name or ID to view client details or check loan eligibility
            </p>
          </div>

          <form onSubmit={getClient} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Enter Client Name or ID"
                required
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[200px]"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    <>
                      <FaSearch className="mr-2" />
                      Get Client Details
                    </>
                  )}
                </button>
                <button
                  onClick={checkEligibility}
                  type="button"
                  disabled={loading}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[200px]"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    <>
                      <FaUserCheck className="mr-2" />
                      Check Eligibility
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="mt-8">
          <ClientDetails
            isProfile={isProfile}
            allProfile={allProfile}
            eligibility={eligibility}
          />
        </div>
      </div>
    </div>
  );
} 