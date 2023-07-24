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

const formSchema = z.object({
  phoneNumber: z.string().min(8, {
    message: 'Please enter a valid phone number',
  }),
  city: z.string().min(2, {
    message: 'Please enter a valid city name',
  }),
  country: z.string().min(4, {
    message: 'Please enter a valid country name',
  }),
})

const StepTwo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      phoneNumber: '',
      city: '',
      country: '',
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
      <div className='w-full max-w-[520px] scroll-auto'>
        <p className='text-xs text-muted-foreground tracking-wide'>Step - 02</p>
        <h1 className='text-2xl font-bold tracking-tight lg:text-3xl mt-[4px]'>
          Contact details
        </h1>
        <p className='leading-7 mt-0 font-normal text-md text-muted-foreground'>
          Enter your phone number, city, and country.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleStep)}>
            <div className='grid w-full max-w-sm items-center gap-4 mt-4'>
              <FormField
                control={form.control}
                name='phoneNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Your phone number, ex: +213512345678'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The phone number you use professionally
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='city'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current city</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Your city of residency? ex: Batna'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      In what city do you currently live?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='country'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country of residency</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Your country of residency, ex: Algeria'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      In what country do you currently live?
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

export default StepTwo
