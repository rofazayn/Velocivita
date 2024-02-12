'use client'

import { DataContext } from '@/app/context/data-context'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowRightIcon,
  CalendarIcon,
  PlusIcon,
  TrashIcon,
} from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import * as z from 'zod'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Checkbox } from './ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const formSchema = z.object({
  degree: z.string().min(6, {
    message: 'Please enter a valid degree and speciality',
  }),
  institution: z.string().min(2, {
    message: 'Please enter a valid institution name',
  }),
  dateFrom: z.date(),
  dateTo: z.date(),
  isOngoing: z.boolean(),
})

const StepFive = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      degree: '',
      institution: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      isOngoing: false,
    },
  })
  const { nextStep, resume, setResume } = useContext(DataContext)
  // use form.watch() to watch all inputs or
  // pass input name to watch a single input

  async function handleAddAnother() {
    await form.trigger()
    if (form.formState.isValid) {
      let newExperience = { id: uuid(), ...form.getValues() }
      let newExperienceArr = resume.education.push(newExperience)
      setResume((prev: any) => ({
        education: newExperienceArr,
        ...prev,
      }))

      form.clearErrors()
      form.reset()
    }
  }

  function handleDelete(id: string) {
    let newExperienceArray = resume.education.filter(
      (exp: any) => exp.id !== id
    )
    setResume((prev: any) => ({ ...prev, education: newExperienceArray }))
  }

  function handleStep(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    let newExperience = { id: uuid(), ...form.getValues() }
    let newExperienceArr = resume.education.push(newExperience)
    setResume((prev: any) => ({
      education: newExperienceArr,
      ...prev,
    }))
    nextStep()
  }

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full scroll-auto'>
        <p className='text-xs text-muted-foreground tracking-wide'>Step - 05</p>
        <h1 className='text-2xl font-bold tracking-tight lg:text-3xl mt-[4px]'>
          Education
        </h1>
        <p className='leading-7 mt-2 font-normal text-md text-muted-foreground'>
          Catalog your degrees, starting with the highest, along with
          institutions and years.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleStep)}>
            <div className='grid w-full items-center gap-4 mt-4'>
              <FormField
                control={form.control}
                name='degree'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Degree Earned</FormLabel>
                    <FormControl>
                      <Input
                        autoFocus
                        type='text'
                        placeholder={`e.g., 'Bachelor's in Computer Science`}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The type of degree, e.g., Bachelor&apos;s, Master&apos;s,
                      etc.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='institution'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Educational Institution</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder={`e.g., 'Harvard University'`}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The name of the school, university, or other educational
                      institution where you earned the degree.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormLabel className='pt-2'>Start and end date</FormLabel>
              <div className='grid grid-cols-1 gap-3 md:grid-cols-2 -mt-1'>
                <FormField
                  control={form.control}
                  name='dateFrom'
                  render={({ field }) => (
                    <FormItem className='flex flex-col'>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'h-11 w-full pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='dateTo'
                  render={({ field }) => (
                    <FormItem className='flex flex-col'>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'h-11 w-full pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormDescription className='-mt-2'>
                This is essential for employees and jobs you apply to
              </FormDescription>

              <FormField
                control={form.control}
                name='isOngoing'
                render={({ field }) => (
                  <FormItem className='mt-3'>
                    <div className='items-top flex space-x-3'>
                      <Checkbox
                        id='ongoing'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className='grid gap-1.5 leading-none'>
                        <label
                          htmlFor='ongoing'
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          I&apos;m currently pursuing this degree
                        </label>
                        <p className='text-sm text-muted-foreground'>
                          Check this box if you are currently pursuing this
                          degree and have not yet completed it.
                        </p>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              {resume.education && resume.education.length > 0 && (
                <>
                  <div className='mb-0 mt-4 w-full'>
                    <FormLabel>Previously added education</FormLabel>
                    {resume.education.map((edu: any) => (
                      <div
                        className='w-full mt-2 mb-3 rounded-md px-4 py-3 flex flex-row gap-4 justify-between items-end border-[1px] border-input/60'
                        key={edu.id}
                      >
                        <div className='w-full'>
                          <p className='text-sm leading-6'>
                            <span className='font-medium'>{edu.degree}</span> at{' '}
                            <span className='font-medium'>
                              {edu.institution}
                            </span>
                          </p>
                          <p className='text-sm mt-2'>
                            <span className='font-medium'>
                              {format(edu.dateFrom, 'PPP')}
                            </span>{' '}
                            -{' '}
                            <span className='font-medium'>
                              {edu.isOngoing
                                ? 'To this day'
                                : format(edu.dateTo, 'PPP')}
                            </span>
                          </p>
                        </div>
                        <div>
                          <Button
                            variant='outline'
                            size='icon'
                            type='button'
                            onClick={() => handleDelete(edu.id)}
                          >
                            <TrashIcon />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className='flex items-center gap-4 mt-12'>
              <Button
                variant='outline'
                size='lg'
                onClick={handleAddAnother}
                type='button'
              >
                Add another
                <PlusIcon className='ms-2 w-4 h-4' />
              </Button>
              <span className='text-xs text-muted-foreground'>or</span>
              <Button type='submit' variant='primary' size='lg'>
                Go to next step
                <ArrowRightIcon className='ms-2 w-4 h-4' />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default StepFive
