import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { ModeToggle } from './theme-toggle'
import { Button } from './ui/button'
import Container from './ui/container'

const ComposerNavbar = () => {
  return (
    <div className='fixed inset-x-0 top-0 w-full h-[68px] flex flex-col justify-center border-b border-stone-200/50 dark:border-stone-800 z-50 bg-white dark:bg-stone-950'>
      <Container>
        <div className='flex items-center justify-between py-4'>
          <div>
            <span className='text-[16px] leading-0 font-extrabold tracking'>
              Velocivita./
            </span>
          </div>
          <div className='flex flex-row gap-3 items-center'>
            <ModeToggle />
            <Link href='/'>
              <Button variant='secondary'>
                Go back
                <ArrowLeftIcon className='ms-2' />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ComposerNavbar
