'use client'

import React, { createContext, useEffect, useState } from 'react'

const MAX_STEPS: number = 7

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
  const [step, setStep] = useState<number>(1)
  const [maxSteps, _setMaxSteps] = useState<number>(MAX_STEPS)
  const [resume, setResume] = useState<any>({
    education: [
      {
        id: 'aa16b5e2-96c5-4be5-a269-797671e4e181',
        degree:
          "Bachelor's Degree - Information Systems and Software Engineering",
        institution: 'University of Batna 2',
        dateFrom: '2017-09-13T23:00:00.000Z',
        dateTo: '2021-07-04T23:00:00.000Z',
        isOngoing: false,
      },
      {
        id: '8fc543a5-1470-4378-8c4f-26b7da9cd2e9',
        degree:
          "Professional Master's Degree - Distributed Information Systems Engineering and Security",
        institution: 'University of Batna 2',
        dateFrom: '2021-09-12T23:00:00.000Z',
        dateTo: '2023-07-05T23:00:00.000Z',
        isOngoing: false,
      },
    ],
    work: [
      {
        id: '705d478f-53ec-440c-a0ee-f35ba11904f4',
        jobTitle: 'Software Engineer',
        companyName: 'Freelance',
        dateFrom: '2021-10-03T23:00:00.000Z',
        dateTo: '2023-08-08T13:28:01.943Z',
        isOngoing: true,
        achievements:
          'Worked on the "Gedged" project, a online/offline SaaS PoS application. Visit https://auresx.com for more information.',
      },
      {
        id: 'b0e00471-a556-4fe2-b19b-5f2a3a83eb37',
        jobTitle: 'Founder & CEO',
        companyName: 'AuresX',
        dateFrom: '2023-08-08T13:28:01.943Z',
        dateTo: '2023-08-08T13:28:01.943Z',
        isOngoing: true,
        achievements: '',
      },
    ],
    summary:
      "Looking for someone who's dependable, organized, and eager to grow? That's me! I'm a highly reliable individual who excels at time management and is always bursting with energy. Plus, I'm constantly seeking out opportunities to expand my skill set, both through collaboration with others and by taking on new challenges solo.",
    phoneNumber: '+213549985283',
    city: 'Batna',
    country: 'Algeria',
    name: 'Abderraouf Zine',
    email: 'rofazayn@gmail.com',
    profession: 'Software Engineer',
    dob: '20-05-1998',
    skills: [
      {
        name: 'Blockchain',
        id: 'f8b3178c-a9b5-4e75-aa11-dce449a3d0e4',
      },
      {
        name: 'Databases',
        id: 'b7480c35-5592-425f-b2c5-4f534e7043ae',
      },
      {
        name: 'ReactJS',
        id: '4c395524-a893-4820-9649-f36e6ff5cfb2',
      },
      {
        name: 'TypeScript',
        id: '73aa41d4-65a0-430d-813f-708eef0a4ae3',
      },
      {
        name: 'JavaScript',
        id: '413c6821-8902-4e07-b747-cd8a13090bcf',
      },
      {
        name: 'Programming',
        id: '4449fdaf-84e6-4c11-bfa3-758d1e24ea17',
      },
    ],
    certifications: [
      {
        name: 'Certified TypeScript Developer',
        id: 'ca980cfd-b514-4a03-9e99-6f99c34da20a',
      },
    ],
  })

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
