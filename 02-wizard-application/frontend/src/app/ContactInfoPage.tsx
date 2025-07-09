"use client";

import React, { useState } from "react";
import axios from "axios";

type Props = {
  goToNextPage: () => void;
  goToPreviousPage: () => void;
};

export const ContactInfoPage = ({ goToNextPage, goToPreviousPage }: Props) => {
  const [formData, setFormData] = useState({
    givenName: "",
    familyName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const systemId = localStorage.getItem("systemId");

    if (!systemId) {
      alert("System ID not found. Please complete the previous steps first.");
      return;
    }

    try {
      await axios.post("http://localhost:3001/customer/createSystemCustomer", {
        ...formData,
        systemId,
      });

      goToNextPage();
    } catch (error) {
      alert("Please enter a valid name, phone and email");
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

      <input
        name="givenName"
        placeholder="First Name"
        value={formData.givenName}
        onChange={handleChange}
        className="input"
      />

      <input
        name="familyName"
        placeholder="Last Name"
        value={formData.familyName}
        onChange={handleChange}
        className="input"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="input"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="input"
      />

      <div className="btn-column">
        <button onClick={handleSubmit} className="btn primary-btn">
          Submit
        </button>
        <button onClick={goToPreviousPage} className="btn secondary-btn">
          Back
        </button>
      </div>
    </div>
  );
};
