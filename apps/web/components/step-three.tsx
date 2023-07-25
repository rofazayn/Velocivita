'use client'

import { DataContext } from '@/app/context/data-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from './ui/button'
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
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  summary: z.string().min(16, {
    message: 'Please enter a valid phone number',
  }),
})

const StepThree = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      summary: '',
    },
  })
  const { nextStep, resume, setResume } = useContext(DataContext)
  // use form.watch() to watch all inputs or
  // pass input name to watch a single input

  function handleStep(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setResume((prev: any) => ({ ...form.getValues(), ...prev }))
    nextStep()
  }

  console.log(resume)

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full scroll-auto'>
        <p className='text-xs text-muted-foreground tracking-wide'>Step - 03</p>
        <h1 className='text-2xl font-bold tracking-tight lg:text-3xl mt-[4px]'>
          Basic info about you
        </h1>
        <p className='leading-7 mt-2 font-normal text-md text-muted-foreground'>
          Next, let&apos;s articulate your career aspirations or summarise your
          professional profile. This helps potential employers quickly
          understand your career goals or professional background.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleStep)}>
            <div className='grid w-full items-center gap-4 mt-4'>
              <FormField
                control={form.control}
                name='summary'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        autoFocus
                        placeholder={`I'm a highly reliable individual who excels at time management and is always bursting with energy...`}
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

export default StepThree
