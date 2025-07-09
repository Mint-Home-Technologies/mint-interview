"use client";

import React, { useState } from "react";
import axios from "axios";

type Props = {
  goToNextPage: () => void;
  goToPreviousPage: () => void;
};

export const SystemDetailsPage = ({
  goToNextPage,
  goToPreviousPage,
}: Props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const questions = [
    {
      label: "What type of system do you have?",
      field: "systemType",
      options: ["Packed System", "Split System", "I don't know"],
    },
    {
      label: "What heating system do you have?",
      field: "heatingSystemType",
      options: ["Gas", "Heat Pump", "I don't know"],
    },
    {
      label: "What electricity provider do you have?",
      field: "electricityProvider",
      options: ["Salt River Project", "Arizona Public Service"],
    },
  ];

  const handleAnswer = async (value: string) => {
    const systemId = localStorage.getItem("systemId");
    if (!systemId) {
      alert("System ID not found. Please complete the previous step first.");
      return;
    }

    const field = questions[questionIndex].field;

    try {
      await axios.put(`http://localhost:3001/system/${systemId}`, {
        [field]: value,
      });

      setAnswers((prev) => ({ ...prev, [field]: value }));
      handleNextScreen();
    } catch (error) {
      alert("Error saving your answer. Please try again.");
      console.error(error);
    }
  };

  const handleNextScreen = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      goToNextPage();
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
    } else {
      goToPreviousPage();
    }
  };

  const current = questions[questionIndex];
  const selectedValue = answers[current.field];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{current.label}</h2>
      <div className="space-y-2">
        {current.options.map((option) => {
          const isSelected = selectedValue === option;
          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`btn block w-full text-left ${
                isSelected ? "primary-btn" : ""
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="btn-row">
        <button onClick={handleBack} className="btn secondary-btn mr-2">
          Back
        </button>
        {selectedValue && (
          <button onClick={handleNextScreen} className="btn secondary-btn mr-2">
            Next
          </button>
        )}
      </div>
    </div>
  );
};
