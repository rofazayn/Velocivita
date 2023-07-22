import React from 'react'
import Container from './ui/container'
import { Button } from './ui/button'
import { RocketIcon } from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <Container>
      <div className='flex flex-col md:flex-row items-center justify-between py-5 mt-16'>
        <div className='flex flex-row gap-0'>
          <Button variant='link'>Privacy</Button>
          <Button variant='link'>Terms</Button>
          <Button variant='link'>Cookies</Button>
          <Button variant='link'>FAQ</Button>
        </div>
        <div>
          <span className='text-muted-foreground text-sm'>
            Velocivita is a property of AuresX &copy; {new Date().getFullYear()}
            .
          </span>
        </div>
      </div>
    </Container>
  )
}

export default Footer
