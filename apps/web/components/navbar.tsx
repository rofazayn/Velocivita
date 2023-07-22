import React from 'react'
import Container from './ui/container'
import { Button } from './ui/button'
import { RocketIcon } from '@radix-ui/react-icons'
import { ModeToggle } from './theme-toggle'

const Navbar = () => {
  return (
    <div className='w-full border-b border-stone-100 dark:border-stone-900'>
      <Container>
        <div className='flex items-center justify-between py-4'>
          <div>
            <span className='text-[16px] leading-0 font-extrabold tracking'>
              Velocivita./
            </span>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <ModeToggle />
            <Button variant='secondary'>
              Try it out
              <RocketIcon className='ms-2' />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
