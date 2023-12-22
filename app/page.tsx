"use client";

import Buttons from "./components/Buttons";
import Stepper from "./components/Stepper";
import StepsLayout from "./steps/steps-layout/StepsLayout";

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center align-center min-h-screen'>
      <div className="w-1/2 flex flex-row justify-center">
        <h1 className='justify-start text-xl font-semibold text-center m-4'>הלוואה לזמן קצר</h1>
        <Stepper />
      </div>
      <StepsLayout />
      <Buttons />
    </div>
  )
}
