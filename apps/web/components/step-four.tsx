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
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  jobTitle: z.string().min(6, {
    message: 'Please enter a valid job title',
  }),
  companyName: z.string().min(2, {
    message: 'Please enter a valid company name',
  }),
  dateFrom: z.date(),
  dateTo: z.date(),
  isOngoing: z.boolean(),
  achievements: z
    .string()
    .min(0)
    .max(120, { message: 'Your achievements must not exceed 120 characters' }),
})

const StepFour = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      jobTitle: '',
      companyName: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      isOngoing: false,
      achievements: '',
    },
  })
  const { nextStep, resume, setResume } = useContext(DataContext)
  // use form.watch() to watch all inputs or
  // pass input name to watch a single input

  async function handleAddAnother() {
    await form.trigger()
    if (form.formState.isValid) {
      let newExperience = { id: uuid(), ...form.getValues() }
      let newExperienceArr = resume.work.push(newExperience)
      setResume((prev: any) => ({
        work: newExperienceArr,
        ...prev,
      }))

      form.clearErrors()
      form.reset()
    }
  }

  function handleDelete(id: string) {
    let newExperienceArray = resume.work.filter((exp: any) => exp.id !== id)
    setResume((prev: any) => ({ ...prev, work: newExperienceArray }))
  }

  function handleStep(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    let newExperience = { id: uuid(), ...form.getValues() }
    let newExperienceArr = resume.work.push(newExperience)
    setResume((prev: any) => ({
      work: newExperienceArr,
      ...prev,
    }))
    nextStep()
  }

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full scroll-auto'>
        <p className='text-xs text-muted-foreground tracking-wide'>Step - 04</p>
        <h1 className='text-2xl font-bold tracking-tight lg:text-3xl mt-[4px]'>
          Work experience
        </h1>
        <p className='leading-7 mt-2 font-normal text-md text-muted-foreground'>
          List your previous roles, starting with the most recent. Include
          roles, responsibilities, and achievements.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleStep)}>
            <div className='grid w-full items-center gap-4 mt-4'>
              <FormField
                control={form.control}
                name='jobTitle'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job title</FormLabel>
                    <FormControl>
                      <Input
                        autoFocus
                        type='text'
                        placeholder='Your job title, ex: JavaScript Developer'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      What is/was your position at the company
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='companyName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company name</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Your company, ex: AuresX'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      What is/was your company name for this position
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='achievements'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Achievements and responsabilities</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={`e.g., Developed key features for the main product..`}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Try to keep it to a maximum of three [3] lines
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
                          I&apos;m currently working at this job
                        </label>
                        <p className='text-sm text-muted-foreground'>
                          Please check this box if you are still at this
                          position
                        </p>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              {resume.work && resume.work.length > 0 && (
                <>
                  <div className='mb-0 mt-4 w-full'>
                    <FormLabel>Already added experience</FormLabel>
                    {resume.work.map((exp: any) => (
                      <div
                        className='w-full mt-2 mb-3 rounded-md px-4 py-3 flex flex-row gap-4 justify-between items-end border-[1px] border-input/60'
                        key={exp.id}
                      >
                        <div className='w-full'>
                          <p className='text-sm leading-6'>
                            <span className='font-medium'>{exp.jobTitle}</span>{' '}
                            at{' '}
                            <span className='font-medium'>
                              {exp.companyName}
                            </span>
                          </p>
                          <p className='text-sm mt-2'>
                            <span className='font-medium'>
                              {format(exp.dateFrom, 'PPP')}
                            </span>{' '}
                            -{' '}
                            <span className='font-medium'>
                              {exp.isOngoing
                                ? 'To this day'
                                : format(exp.dateTo, 'PPP')}
                            </span>
                          </p>
                        </div>
                        <div>
                          <Button
                            variant='outline'
                            size='icon'
                            type='button'
                            onClick={() => handleDelete(exp.id)}
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

export default StepFour
