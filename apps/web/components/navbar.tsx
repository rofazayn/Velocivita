import { RocketIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Logo from './logo'
import { ModeToggle } from './theme-toggle'
import { Button } from './ui/button'
import Container from './ui/container'

const Navbar = () => {
  return (
    <div className='w-full border-b border-stone-200/50 dark:border-stone-800 '>
      <Container>
        <div className='flex items-center justify-between py-4 h-[68px]'>
          <Logo />
          <div className='flex flex-row gap-3 items-center'>
            <ModeToggle />
            <Link href='/composer'>
              <Button variant='outline'>
                Try it for free
                <RocketIcon className='ms-2' />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
