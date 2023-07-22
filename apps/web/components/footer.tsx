import React from 'react'
import Container from './ui/container'
import { Button } from './ui/button'
import { RocketIcon } from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <div className='w-full border-t border-stone-100 dark:border-stone-900 mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row items-center justify-between py-3'>
          <div className='flex flex-row gap-0'>
            <Button variant='link'>Privacy</Button>
            <Button variant='link'>Terms</Button>
            <Button variant='link'>Cookies</Button>
            <Button variant='link'>FAQ</Button>
          </div>
          <div>
            <span className='text-muted-foreground text-sm'>
              <span className='text-foreground font-bold'>Velocivita</span> is a
              property of{' '}
              <span className='text-foreground font-bold'>AuresX</span> &copy;{' '}
              {new Date().getFullYear()}.
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
