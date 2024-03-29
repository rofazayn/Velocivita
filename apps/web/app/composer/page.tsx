'use client'
import ComposerNavbar from '@/components/composer-navbar'
import StepFive from '@/components/step-five'
import StepFour from '@/components/step-four'
import StepOne from '@/components/step-one'
import StepSix from '@/components/step-six'
import StepThree from '@/components/step-three'
import StepTwo from '@/components/step-two'
import Container from '@/components/ui/container'
import { Progress } from '@/components/ui/progress'
import manWorkingAnimation from '@/public/assets/man-working-lottie.json'
import Lottie from 'lottie-react'
import { useContext } from 'react'
import { DataContext } from '../context/data-context'
import StepSeven from '@/components/step-seven'
import { Canvas, PDFViewer } from '@react-pdf/renderer'
import RenderedPDF from '@/components/rendered-pdf'

const Composer = () => {
  const { resume, step, maxSteps } = useContext(DataContext)
  return (
    <>
      <ComposerNavbar />
      <Container>
        <main
          className='grow w-full flex flex-row min-h-full overflow-auto'
          style={{
            minHeight: 'calc(100vh - 136px)',
          }}
        >
          <section className='grow min-h-full w-full max-w-[50%] flex flex-col justify-between items-start border-e border-stone-200/50 dark:border-stone-800 pe-16'>
            <div className='grow w-full min-h-full flex flex-col justify-center items-center pt-24 pb-32 max-w-[500px]'>
              {step === 1 ? (
                <StepOne />
              ) : step === 2 ? (
                <StepTwo />
              ) : step === 3 ? (
                <StepThree />
              ) : step === 4 ? (
                <StepFour />
              ) : step === 5 ? (
                <StepFive />
              ) : step === 6 ? (
                <StepSix />
              ) : step === 7 ? (
                <StepSeven />
              ) : (
                <StepOne />
              )}
            </div>
          </section>

          <section
            className='fixed w-full max-w-[50%] top-[68px] bottom-[68px] start-[50%] bg-stone-50 dark:bg-neutral-900 flex flex-col'
            style={{ height: 'calc(100vh - 136px)' }}
          >
            <div className='grow w-full flex flex-col items-center justify-center p-8'>
              {resume && step > 1 ? (
                <>
                  {/* <PDFViewer height={'100%'} width={'100%'} showToolbar={false}> */}
                  <canvas
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'red',
                    }}
                  >
                    <RenderedPDF />
                  </canvas>
                  {/* </PDFViewer> */}
                </>
              ) : (
                <>
                  <div className='w-full max-w-[380px] -mt-8'>
                    <Lottie animationData={manWorkingAnimation} />
                  </div>

                  <div className='max-w-xs text-center mt-4'>
                    <p className='text-md font-medium text-foreground'>
                      Compiling your resume...
                    </p>
                    <p className='text-sm text-muted-foreground mt-1'>
                      We will show you how your resume looks like once you enter
                      enough data
                    </p>
                  </div>
                </>
              )}
            </div>
          </section>
          {/* <section className='min-h-full min-w-[50%] '></section> */}
        </main>
      </Container>

      <div className='fixed inset-x-0 bottom-0 w-full  bg-white dark:bg-stone-950 flex flex-col justify-center border-t border-stone-200/50 dark:border-stone-800'>
        <Container>
          <div className='w-full flex flex-row items-center h-[68px] gap-4'>
            <Progress
              value={(step / maxSteps) * 100}
              className='w-full max-w-[200px] md:max-w-[320px]'
            />
            <div className='grow text-end'>
              <p className='leading-0 text-sm text-muted-foreground'>
                <span className='text-foreground font-bold'>Step {step}</span> /{' '}
                <span className='font-bold'>{maxSteps}</span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Composer
