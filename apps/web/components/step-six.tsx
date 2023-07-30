'use client'

import { DataContext } from '@/app/context/data-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import * as z from 'zod'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

const formSchema = z.object({})

const StepSix = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      skills: '',
    },
  })

  const [skillInput, setSkillInput] = useState<string>('')
  const [skills, setSkills] = useState<any>([])
  function handleAddSkill() {
    if (skillInput && skillInput.length > 2 && skillInput.length < 32) {
      setSkills((prev: any) => [{ name: skillInput, id: uuid() }, ...prev])
      setSkillInput('')
    }
  }
  function handleDeleteSkill(id: string) {
    let newSkillsArr = skills.filter((s: any) => s.id !== id)
    setSkills(newSkillsArr)
  }

  const [certificationInput, setCertificationInput] = useState<string>('')
  const [certifications, setCertifications] = useState<any>([])
  function handleAddCertification() {
    if (
      certificationInput &&
      certificationInput.length > 3 &&
      certificationInput.length < 40
    ) {
      setCertifications((prev: any) => [
        { name: certificationInput, id: uuid() },
        ...prev,
      ])
      setCertificationInput('')
    }
  }
  function handleDeleteCertification(id: string) {
    let newCertificationArr = certifications.filter((c: any) => c.id !== id)
    setSkills(newCertificationArr)
  }

  const { nextStep, resume, setResume } = useContext(DataContext)
  // use form.watch() to watch all inputs or
  // pass input name to watch a single input

  function handleStep(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setResume((prev: any) => ({
      ...prev,
      skills: [...skills],
      certifications: [...certifications],
    }))
    nextStep()
  }

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full scroll-auto'>
        <p className='text-xs text-muted-foreground tracking-wide'>Step - 06</p>
        <h1 className='text-2xl font-bold tracking-tight lg:text-3xl mt-[4px]'>
          Skills & Certifications
        </h1>
        <p className='leading-7 mt-2 font-normal text-md text-muted-foreground'>
          Highlight your skills, list certifications, and add references. Use
          the plus (+) button to include multiple items in each category.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleStep)}>
            <div className='grid w-full items-center gap-4 mt-4'>
              <FormItem>
                <FormLabel>Skills</FormLabel>
                {skills && skills.length > 0 && (
                  <div className='w-full flex gap-2 flex-wrap pb-2'>
                    {skills.map((skill: any) => (
                      <Badge
                        variant='secondary'
                        key={skill.id}
                        className='flex gap-2'
                      >
                        <span>{skill.name}</span>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='w-4 h-4'
                          type='button'
                          onClick={() => handleDeleteSkill(skill.id)}
                        >
                          <TrashIcon className='w-3 h-3' />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
                <FormControl>
                  <div className='flex w-full gap-3 flex-row items-center'>
                    <Input
                      autoFocus
                      type='text'
                      placeholder={`e.g., 'JavaScript Programming'`}
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                    />
                    <div>
                      <Button
                        size='icon'
                        variant='outline'
                        className='w-[43px] h-[43px]'
                        type='button'
                        onClick={handleAddSkill}
                      >
                        <PlusIcon />
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormDescription>
                  Enter relevant job-specific skills then press &apos;+&apos; to
                  add
                </FormDescription>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Certification or Award</FormLabel>
                {certifications && certifications.length > 0 && (
                  <div className='w-full flex gap-2 flex-wrap pb-2'>
                    {certifications.map((certification: any) => (
                      <Badge
                        variant='secondary'
                        key={certification.id}
                        className='flex gap-2'
                      >
                        <span>{certification.name}</span>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='w-4 h-4'
                          type='button'
                          onClick={() =>
                            handleDeleteCertification(certification.id)
                          }
                        >
                          <TrashIcon className='w-3 h-3' />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
                <FormControl>
                  <div className='flex w-full gap-3 flex-row items-center'>
                    <Input
                      type='text'
                      placeholder={`e.g., 'Certified Java Developer'`}
                      value={certificationInput}
                      onChange={(e) => setCertificationInput(e.target.value)}
                    />
                    <div>
                      <Button
                        size='icon'
                        variant='outline'
                        className='w-[43px] h-[43px]'
                        type='button'
                        onClick={handleAddCertification}
                      >
                        <PlusIcon />
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormDescription>
                  List any applicable courses or certificates, then press
                  &apos;+&apos; to add
                </FormDescription>
                <FormMessage />
              </FormItem>

              <div className='mt-5 flex items-center gap-3'>
                <Button type='submit' variant='primary' size='lg'>
                  Go to next step
                  <ArrowRightIcon className='ms-2 w-4 h-4' />
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default StepSix
