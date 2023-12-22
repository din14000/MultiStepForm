"use client";

import React, { useState } from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";
import { useStepsAppSelector } from "@/redux/features/steps-slice";

const Stepper = () => {
  const steps = ["מילוי פרטים", "אישור", "מעברת לחתימות"];
  const { formStep, detailsSubStep } = useStepsAppSelector((state) => state.stepsReducer.value)

  const substepPercentage = formStep === 1 ? detailsSubStep / 2 : 1;

  return (
    <>
      <div className="flex justify-between mb-4 mt-6">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${ formStep === i + 1 && "active"} ${
               (i + 1 < formStep ) && "complete"
            } `}
            style={{ "--substep": substepPercentage } as any}
          >
            <div className="step">
              {i + 1 < formStep ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500 mt-4">{step}</p>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Stepper;