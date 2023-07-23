'use client'

import { DataContext } from '@/app/context/data-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckIcon } from '@radix-ui/react-icons'
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
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Does not look like an email to me.' }),
  profession: z.string().min(2, {
    message: 'Profession must be at least 2 characters.',
  }),
})

const StepTwo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      profession: '',
    },
  })
  const { nextStep, resume, setResume } = useContext(DataContext)
  // use form.watch() to watch all inputs or
  // pass input name to watch a single input

  function handleStep(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    setResume(form.getValues())
    nextStep()
  }

  console.log(resume)

  return (
    <div className='grow w-full flex flex-col min-h-full'>
      <div className='w-full max-w-[420px] pb-40 pt-16 scroll-auto'>
        <p className='text-xs text-muted-foreground'>First step</p>
        <h1 className='text-2xl font-bold tracking-tight lg:text-3xl mt-1'>
          Personal information
        </h1>
        <p className='leading-7 mt-0 font-normal text-sm text-muted-foreground'>
          Enter your name, professional email and your job title.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleStep)}>
            <div className='grid w-full max-w-sm items-center gap-4 mt-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your full name' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your full name, ex: Touhami Elmadani.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your email here'
                        type='email'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the email you use, ex: touhami@velocivita.com.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='profession'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profession</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Enter your job title here'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      What is your current position/job?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name='phoneNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Your phone number, ex: +213512345678'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='location'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Where do you live? ex: Batna, Algeria.'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              {/* <FormField
              control={form.control}
              name='bio'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder='Tell people a little about yourself - Biography.'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
              <div className='mt-5 flex items-center gap-3'>
                <Button type='submit' variant='primary'>
                  Go to next step
                  <CheckIcon className='ms-2 w-4 h-4' />
                </Button>
                {/* <span className='text-muted-foreground text-sm'>or</span>
                  <Link href='/'>
                    <Button variant='secondary'>Try it later</Button>
                  </Link> */}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default StepTwo
