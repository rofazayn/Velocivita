import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Container from '@/components/ui/container'
import {
  CardStackIcon,
  FaceIcon,
  FileIcon,
  MixIcon,
  Pencil1Icon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

const Home = () => {
  return (
    <Container>
      <main className='py-16'>
        <div className='w-full flex flex-column items-center justify-center'>
          <div className='text-center max-w-xl pt-4'>
            <h1 className='text-3xl font-extrabold tracking-tight lg:text-5xl'>
              Your ideal resume is merely a few keystrokes &amp; a single dollar
              away.
            </h1>
            <p className='text-md lg:text-lg text-muted-foreground mt-4'>
              Revitalize your professional journey with our exquisitely
              designed, custom-tailored resumes, crafted to leave a lasting
              impression.
            </p>
            <Link href='/composer'>
              <Button
                variant='primary'
                className='text-md font-medium mt-4'
                size='lg'
              >
                {/* <RocketIcon className='me-2' /> */}
                Craft your Resume Now
              </Button>
            </Link>

            <div className='mt-0.5'>
              <span className=' text-xs text-muted-foreground'>
                Your dream resume,{' '}
                <span className='line-through font-bold text-foreground'>
                  for just $1
                </span>{' '}
                <span className='text-green-500 font-bold'>Free</span>
              </span>
            </div>
          </div>
        </div>
        <div className='mt-16'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className='flex items-center'>
                    Easy-to-use editor
                    <Pencil1Icon className='mx-2' />
                    <Badge variant='outline'>Done</Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Craft your perfect resume with our intuitive and easy-to-use
                  editor. No technical skills required!
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className='flex items-center'>
                    Customizable templates
                    <MixIcon className='mx-2' />
                    <Badge variant='secondary'>Soon</Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Choose from a wide range of professional, eye-catching
                  templates and stand out from the crowd.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className='flex items-center'>
                    Affordability
                    <CardStackIcon className='mx-2' />
                    <Badge variant='outline'>Done</Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Invest in your future for just $1! Get a stunning,
                  ready-to-download resume without breaking the bank.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className='flex items-center'>
                    Guidance and tips
                    <QuestionMarkCircledIcon className='mx-2' />
                    <Badge variant='secondary'>Soon</Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Not sure where to start? Our built-in guidance and tips will
                  help you create a compelling and effective resume.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className='flex items-center'>
                    Flexible export options
                    <FileIcon className='mx-2' />
                    <Badge variant='secondary'>Soon</Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Download your polished resume in various formats to suit
                  different application needs. Ready when you are!
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className='flex items-center'>
                    Privacy guaranteed
                    <FaceIcon className='mx-2' />
                    <Badge variant='outline'>Done</Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Your data security is our priority. Rest assured your
                  information is safe with us.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </Container>
  )
}

export default Home
