import React from 'react'
import Container from './ui/container'
import { Button } from './ui/button'
import { RocketIcon } from '@radix-ui/react-icons'

const Navbar = () => {
  return (
    <Container>
      <div className='flex items-center justify-between py-5'>
        <div>
          <span className='text-[18px] leading-0 font-bold tracking-tight'>
            Velocivita
          </span>
        </div>
        <div>
          <Button variant='secondary'>
            Try it out
            <RocketIcon className='ms-2' />
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
