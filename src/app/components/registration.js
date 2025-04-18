import React, { useState } from "react";
import styles from "../home.module.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    city: "",
    lengthAtResidence: "",
    education: "",
    income: "",
    houseValue: "",
    employmentYears: "",
    employmentCategory: "",
    creditCardDebt: "",
    charitableDonations: "",
    goldMembership: "0"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Registration successful!');
        setFormData({
          name: "",
          gender: "",
          age: "",
          city: "",
          lengthAtResidence: "",
          education: "",
          income: "",
          houseValue: "",
          employmentYears: "",
          employmentCategory: "",
          creditCardDebt: "",
          charitableDonations: "",
          goldMembership: "0"
        });
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="grid justify-items-center w-full">
      <form 
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 content-start h-auto w-full sm:w-4/5 md:w-2/3 m-4 p-4 rounded-lg border shadow-lg bg-white"
      >
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Age (Years)</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="19"
            max="56"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            <option value="">Select City</option>
            <option value="Regina">Regina</option>
            <option value="Saskatoon">Saskatoon</option>
            <option value="Moose Jaw">Moose Jaw</option>
            <option value="North Battleford">North Battleford</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Length at Residence (Years)</label>
          <input
            type="number"
            name="lengthAtResidence"
            value={formData.lengthAtResidence}
            onChange={handleChange}
            min="0"
            max="38"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Education Level</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          >
            <option value="">Select Education Level</option>
            <option value="0">No Formal Education</option>
            <option value="1">Primary Education</option>
            <option value="2">Secondary Education</option>
            <option value="3">Post-Secondary Education</option>
            <option value="4">Graduate Education</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Annual Income ($)</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              min="20000"
              max="150000"
              step="1000"
              className="w-full pl-7 pr-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">House Value ($)</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              name="houseValue"
              value={formData.houseValue}
              onChange={handleChange}
              min="50000"
              max="1000000"
              step="1000"
              className="w-full pl-7 pr-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Employment Duration (Years)</label>
          <input
            type="number"
            name="employmentYears"
            value={formData.employmentYears}
            onChange={handleChange}
            min="0"
            max="35"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Employment Category</label>
          <select
            name="employmentCategory"
            value={formData.employmentCategory}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          >
            <option value="">Select Category</option>
            <option value="-1">Unskilled</option>
            <option value="1">Self-employed</option>
            <option value="2">Skilled</option>
            <option value="3">Professional</option>
            <option value="4">Management</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Credit Card Debt ($)</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              name="creditCardDebt"
              value={formData.creditCardDebt}
              onChange={handleChange}
              min="0"
              max="50000"
              step="100"
              className="w-full pl-7 pr-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Charitable Donations ($)</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              name="charitableDonations"
              value={formData.charitableDonations}
              onChange={handleChange}
              min="0"
              max="10000"
              step="100"
              className="w-full pl-7 pr-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Gold Membership</label>
          <select
            name="goldMembership"
            value={formData.goldMembership}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration; 