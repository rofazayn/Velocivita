'use client'

import React, { createContext, useEffect, useState } from 'react'

const MAX_STEPS: number = 5

const DataContext = createContext(
  {} as {
    step: number
    nextStep: () => void
    prevStep: () => void
    resume: any
    setResume: React.Dispatch<React.SetStateAction<any>>
    maxSteps: number
  }
)
const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<number>(4)
  const [maxSteps, _setMaxSteps] = useState<number>(MAX_STEPS)
  const [resume, setResume] = useState<any>({ work: [] })

  const nextStep = async () => {
    setStep((prev) => (prev !== maxSteps ? prev + 1 : maxSteps))
  }

  const prevStep = async () => {
    setStep((prev) => (prev !== 1 ? prev - 1 : prev))
  }

  useEffect(() => {
    console.log(resume)
  }, [resume])

  return (
    <DataContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        resume,
        setResume,
        maxSteps,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
