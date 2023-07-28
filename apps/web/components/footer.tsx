import { Button } from './ui/button'
import Container from './ui/container'

const Footer = () => {
  return (
    <div className='border-t border-stone-200/50 dark:border-stone-800 h-[68px] '>
      <Container>
        <div className='grow flex flex-col md:flex-row items-center justify-between py-3'>
          <div className='flex flex-row gap-0'>
            <Button variant='link' className='md:ps-0'>
              Privacy
            </Button>
            <Button variant='link'>Terms</Button>
            <Button variant='link'>Cookies</Button>
            <Button variant='link'>FAQ</Button>
          </div>
          <div>
            <span className='text-muted-foreground text-sm'>
              <span className='text-foreground'>Velocivita</span> is a property
              of <span className='text-foreground'>AuresX</span> &copy;{' '}
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
