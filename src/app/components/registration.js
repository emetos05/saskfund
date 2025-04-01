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
    <div className="grid justify-items-center">
      <form 
        onSubmit={handleSubmit}
        className={`${styles.clientData} grid grid-cols-2 gap-4 content-start h-auto w-1/2 m-4 p-4 rounded border shadow`}
      >
        <div>
          <h1>Name</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div>
          <h1>Gender</h1>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div>
          <h1>Age</h1>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div>
          <h1>City</h1>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
          />
        </div>

        <div>
          <h1>Length at Residence (years)</h1>
          <input
            type="number"
            name="lengthAtResidence"
            value={formData.lengthAtResidence}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div>
          <h1>Education (years)</h1>
          <input
            type="number"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
          />
        </div>

        <div>
          <h1>Annual Income</h1>
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div>
          <h1>House Value</h1>
          <input
            type="number"
            name="houseValue"
            value={formData.houseValue}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div>
          <h1>Employment Years</h1>
          <input
            type="number"
            name="employmentYears"
            value={formData.employmentYears}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div>
          <h1>Employment Category</h1>
          <input
            type="number"
            name="employmentCategory"
            value={formData.employmentCategory}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div>
          <h1>Credit Card Debt</h1>
          <input
            type="number"
            name="creditCardDebt"
            value={formData.creditCardDebt}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div>
          <h1>Charitable Donations</h1>
          <input
            type="number"
            name="charitableDonations"
            value={formData.charitableDonations}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          />
        </div>

        <div className="col-span-2">
          <h1>Gold Membership</h1>
          <select
            name="goldMembership"
            value={formData.goldMembership}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-gray-700"
            required
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <button
          type="submit"
          className={`${styles.btn} ${styles.btnBlue} col-span-2 mt-4`}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration; 