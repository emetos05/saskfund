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
          <label className="block text-sm font-semibold text-gray-600">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Length at Residence (years)</label>
          <input
            type="number"
            name="lengthAtResidence"
            value={formData.lengthAtResidence}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Income</label>
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">House Value</label>
          <input
            type="number"
            name="houseValue"
            value={formData.houseValue}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Employment Years</label>
          <input
            type="number"
            name="employmentYears"
            value={formData.employmentYears}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Employment Category</label>
          <input
            type="text"
            name="employmentCategory"
            value={formData.employmentCategory}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Credit Card Debt</label>
          <input
            type="number"
            name="creditCardDebt"
            value={formData.creditCardDebt}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Charitable Donations</label>
          <input
            type="number"
            name="charitableDonations"
            value={formData.charitableDonations}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration; 