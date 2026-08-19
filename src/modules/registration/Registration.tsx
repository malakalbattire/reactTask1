import { useState } from "react";

import Stepper from "../../shared/components/Stepper/Stepper";
import DynamicForm from "../../shared/components/DynamicForm/DynamicForm";
import { registrationSteps } from "./registrationSteps";

export default function Registration() {
  const [currentStep, setCurrentStep] = useState(0);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === registrationSteps.length - 1;

  const CurrentStep = registrationSteps[currentStep].component;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep((step) => step + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStep((step) => step - 1);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isLastStep) {
      handleNext();
      return;
    }

    // Submit registration
    console.log("Registration submitted");
  };

  return (
    <div className="min-h-screen bg-[#F1F2F5]">
      <main className="flex justify-center px-4 py-10">
        <div className="w-full max-w-155 rounded-xl bg-white px-8 py-10 shadow-sm sm:px-10">
          <div className="">
            {/* Back */}
            {!isFirstStep && (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 rounded-md bg-[#dba12635] px-3 py-1.5 text-sm font-medium text-[#D29A21] hover:bg-[#E5E7EB]"
              >
                <span className="text-lg leading-none">‹</span>
                Back
              </button>
            )}
            {/* Logo */}
            <div className="mb-3 text-center">
              <span className="text-4xl font-bold text-[#D29A21]">KN</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-2xl font-bold text-[#111827]">
            Join Kanun Network
          </h1>

          <p className="mt-2 text-center text-sm text-[#9CA3AF]">
            Create your professional profile and get started.
          </p>

          {/* Stepper */}
          <div className="my-8 items-center ">
            <Stepper steps={registrationSteps} currentStep={currentStep} />
          </div>

          {/* Form */}
          <DynamicForm onSubmit={handleSubmit}>
            <CurrentStep />

            {/* Button */}
            <button
              type="submit"
              className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#D29A21] text-sm font-semibold text-white transition-colors hover:bg-[#B98217] focus:outline-none focus:ring-2 focus:ring-[#D29A21] focus:ring-offset-2"
            >
              {isLastStep ? "Create Account" : "Next"}
              <span aria-hidden="true">›</span>
            </button>
          </DynamicForm>

          {/* Login */}
          {isFirstStep && (
            <p className="mt-6 text-center text-sm text-[#9CA3AF]">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-[#D29A21] hover:underline"
              >
                Login Here
              </a>
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
