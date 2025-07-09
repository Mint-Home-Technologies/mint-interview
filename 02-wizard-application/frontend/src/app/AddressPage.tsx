"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

type FormData = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  sqFeet?: number;
};

type Props = {
  goToNextPage: () => void;
  systemId: string | null;
  setSystemId: (id: string | null) => void;
};

const initialState = {
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zip: "",
  sqFeet: undefined,
};

export const AddressPage = ({ goToNextPage, systemId, setSystemId }: Props) => {
  const [formData, setFormData] = useState<FormData>(initialState);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updated = {
      ...formData,
      [name]:
        (name === "sqFeet" || name === "zip") && value ? Number(value) : value,
    };
    setFormData(updated);
    localStorage.setItem("formData", JSON.stringify(updated));
  };

  const handleSubmit = async () => {
    try {
      if (systemId) {
        await axios.put(`http://localhost:3001/system/${systemId}`, formData);
      } else {
        const response = await axios.post(
          "http://localhost:3001/system",
          formData
        );
        const newId = response.data._id;
        setSystemId(newId);
        localStorage.setItem("systemId", newId);
      }

      goToNextPage();
    } catch (error) {
      alert("A valid address, city, state, and zip code are required");
      console.error(error);
    }
  };

  const handleStartOver = () => {
    localStorage.removeItem("systemId");
    localStorage.removeItem("formData");
    setSystemId(null);
    setFormData(initialState);
  };

  return (
    <div>
      <input
        name="addressLine1"
        placeholder="Address Line 1"
        value={formData.addressLine1}
        onChange={handleChange}
        className="input"
      />
      <input
        name="addressLine2"
        placeholder="Address Line 2"
        value={formData.addressLine2}
        onChange={handleChange}
        className="input"
      />
      <input
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="input"
      />
      <input
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className="input"
      />
      <input
        name="zip"
        placeholder="Zip Code"
        type="number"
        value={formData.zip}
        onChange={handleChange}
        className="input"
      />
      <input
        name="sqFeet"
        placeholder="Square Feet"
        type="number"
        value={formData.sqFeet || ""}
        onChange={handleChange}
        className="input"
      />

      <div className="btn-column">
        <button onClick={handleSubmit} className="btn primary-btn">
          Next
        </button>
        {systemId && (
          <button
            onClick={handleStartOver}
            className="btn secondary-btn"
            type="button"
          >
            Start Over
          </button>
        )}
      </div>
    </div>
  );
};
