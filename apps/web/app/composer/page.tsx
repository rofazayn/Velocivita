'use client'
import ComposerNavbar from '@/components/composer-navbar'
import StepOne from '@/components/step-one'
import Container from '@/components/ui/container'
import { Progress } from '@/components/ui/progress'
import manWorkingAnimation from '@/public/assets/man-working-lottie.json'
import Lottie from 'lottie-react'
import { useContext } from 'react'
import { DataContext } from '../context/data-context'

const Composer = () => {
  const { step, maxSteps } = useContext(DataContext)
  return (
    <>
      <ComposerNavbar />
      <Container>
        <main
          className='w-full flex flex-row min-h-full overflow-auto mt-[64px]'
          style={{
            minHeight: 'calc(100vh - 128px)',
          }}
        >
          <section className='min-h-full min-w-[50%] flex flex-col justify-between items-center border-e-2 border-stone-100 dark:border-stone-900 '>
            <div className='w-full min-h-full flex flex-col justify-center'>
              {step === 1 ? <StepOne /> : <StepOne />}
            </div>
          </section>

          <section className='h-full min-h-full min-w-[50%] fixed y-0 start-[50%] bg-stone-50 dark:bg-neutral-900'>
            <div className='w-full min-h-full flex flex-col items-center pb-12 pt-16 px-8'>
              <div className='w-full max-w-[420px]'>
                <Lottie animationData={manWorkingAnimation} />
              </div>

              <div className='max-w-xs text-center mt-4'>
                <p className='text-md font-medium text-foreground'>
                  Compiling your resume...
                </p>
                <p className='text-sm text-muted-foreground mt-1'>
                  We will show you how your resume looks like once we collect
                  enough data after you go through a few steps.
                </p>
              </div>
            </div>
          </section>
          {/* <section className='min-h-full min-w-[50%] '></section> */}
        </main>
      </Container>

      <div className='fixed inset-x-0 bottom-0 w-full min-h-[64px] bg-white dark:bg-stone-950 flex flex-col justify-center border-t border-stone-100 dark:border-stone-800'>
        <Container>
          <div className='w-full flex flex-row items-center gap-4'>
            <Progress
              value={(step / maxSteps) * 100}
              className='w-full max-w-[200px] md:max-w-[320px]'
            />
            <div className='grow text-end'>
              <p className='leading-0 text-sm text-muted-foreground'>
                <span className='text-foreground font-bold'>Step {step}</span> /{' '}
                <span className='font-bold'>5</span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Composer
