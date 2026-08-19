import { useState } from "react";

import Form from "../../shared/components/Form/Form";
import Stepper from "../../shared/components/Stepper/Stepper";

import AcademicInfo from "./components/AcademicInfo";
import AccountSetup from "./components/AccountSetup";

import { registrationSteps } from "./registrationSteps";

import type { AcademicInfoModel } from "../../shared/models/academicInfo.model";
import type { AccountSetupModel } from "../../shared/models/accountSetup.model";

export default function Registration() {
  const [currentStep, setCurrentStep] = useState(0);

  // Academic information
  const [academicInfo, setAcademicInfo] =
    useState<AcademicInfoModel>({
      fullName: "",
      university: "",
      major: "",
      academicLevel: "",
      graduationYear: "",
      termsAccepted: false,
    });

  // Account setup
  const [accountSetup, setAccountSetup] =
    useState<AccountSetupModel>({
      email: "",
      phoneCode:"",
      phone: "",
      password: "",
      confirmPassword: "",
    });

  const isFirstStep = currentStep === 0;

  const isLastStep =
    currentStep === registrationSteps.length - 1;

  // ----------------------------------------
  // Academic Info
  // ----------------------------------------

  const handleAcademicInfoChange = <
    K extends keyof AcademicInfoModel
  >(
    field: K,
    value: AcademicInfoModel[K]
  ) => {
    setAcademicInfo((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // ----------------------------------------
  // Account Setup
  // ----------------------------------------

  const handleAccountSetupChange = <
    K extends keyof AccountSetupModel
  >(
    field: K,
    value: AccountSetupModel[K]
  ) => {
    setAccountSetup((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // ----------------------------------------
  // Navigation
  // ----------------------------------------

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

  // ----------------------------------------
  // Submit
  // ----------------------------------------

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!isLastStep) {
      handleNext();
      return;
    }

    const registrationData = {
      academicInfo,
      accountSetup,
    };

    console.log(
      "Registration submitted:",
      registrationData
    );
  };

  // ----------------------------------------
  // Render Step
  // ----------------------------------------

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <AcademicInfo
            formData={academicInfo}
            onChange={handleAcademicInfoChange}
          />
        );

      case 1:
        return (
          <AccountSetup
            formData={accountSetup}
            onChange={handleAccountSetupChange}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F2F5]">
      <main className="flex justify-center px-4 py-10">
        <div className="w-full max-w-155 rounded-xl bg-white px-8 py-10 shadow-sm sm:px-10">

          {/* Header */}
          <div>
            {!isFirstStep && (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 rounded-md bg-[#dba12635] px-3 py-1.5 text-sm font-medium text-[#D29A21] transition hover:bg-[#E5E7EB]"
              >
                <span className="text-lg leading-none">
                  ‹
                </span>

                Back
              </button>
            )}

            <div className="mb-3 text-center">
              <span className="text-4xl font-bold text-[#D29A21]">
                KN
              </span>
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
          <div className="my-8">
            <Stepper
              steps={registrationSteps}
              currentStep={currentStep}
            />
          </div>

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            {renderCurrentStep()}

            <button
              type="submit"
              className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#D29A21] text-sm font-semibold text-white transition-colors hover:bg-[#B98217] focus:outline-none focus:ring-2 focus:ring-[#D29A21] focus:ring-offset-2"
            >
              {isLastStep ? "Next" : "Next"}

              <span aria-hidden="true">
                ›
              </span>
            </button>
          </Form>

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