"use client";

import React, { useState, useEffect } from "react";
import { AddressPage } from "./AddressPage";
import { SystemDetailsPage } from "./SystemDetailsPage";
import { ContactInfoPage } from "./ContactInfoPage";

export default function WizardForm() {
  const [step, setStep] = useState(1);
  const [systemId, setSystemId] = useState<string | null>(null);

  useEffect(() => {
    const savedId = localStorage.getItem("systemId");
    if (savedId) {
      setSystemId(savedId);
    }
  }, []);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const startOver = () => {
    localStorage.removeItem("systemId");
    localStorage.removeItem("formData");
    setSystemId(null);
    setStep(1);
  };

  return (
    <div className="wrap">
      <div className="page p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">HVAC Quote Wizard</h1>

        {step === 1 && (
          <AddressPage
            goToNextPage={handleNext}
            systemId={systemId}
            setSystemId={setSystemId}
          />
        )}

        {step === 2 && (
          <SystemDetailsPage
            goToNextPage={handleNext}
            goToPreviousPage={handleBack}
          />
        )}

        {step === 3 && (
          <ContactInfoPage
            goToNextPage={handleNext}
            goToPreviousPage={handleBack}
          />
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Thanks!</h2>
            <p>We will reach out to you soon.</p>
            <button onClick={startOver} className="btn secondary-btn mr-2">
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
