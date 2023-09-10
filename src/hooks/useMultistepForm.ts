import { useState } from 'react'

const useMultistepForm = (steps: React.ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i
      }
      return i + 1
    })
  }

  return {
    currentStep: steps[currentStepIndex],
    currentStepIndex,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
  }
}

export default useMultistepForm
