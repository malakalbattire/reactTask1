export type Step = {
  id: string
  title: string
}

type StepperProps = {
  steps: Step[]
  currentStep: number
}

export default function Stepper({
  steps,
  currentStep,
}: StepperProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex items-start">
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isCompleted = index < currentStep
          const isLast = index === steps.length - 1

          return (
            <div key={step.id} className="flex items-start">
              {/* Step */}
              <div className="flex w-32 flex-col items-center">
                <div
                  className={`
                    flex h-11 w-11 items-center justify-center
                    rounded-lg text-sm font-semibold
                    transition-colors
                    ${
                      isActive || isCompleted
                        ? 'bg-[#06244A] text-white'
                        : 'bg-[#EEF0F4] text-[#9CA3AF]'
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5L9.5 17L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                <span
                  className={`
                    mt-3 whitespace-nowrap text-xs font-medium
                    ${
                      isActive || isCompleted
                        ? 'text-[#06244A]'
                        : 'text-[#9CA3AF]'
                    }
                  `}
                >
                  {step.title}
                </span>
              </div>

              {/* Connector */}
              {!isLast && (
                <div className="mt-5 w-20">
                  <div
                    className={`
                      h-0.5 w-full
                      ${
                        isCompleted
                          ? 'bg-[#06244A]'
                          : 'bg-[#E1E5EC]'
                      }
                    `}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
