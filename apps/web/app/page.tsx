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

const Home = () => {
  return (
    <Container>
      <main>
        <div className='w-full flex flex-column items-center justify-center '>
          <div className='text-center max-w-lg pt-16'>
            <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
              Your dream job is just a few clicks away with us.
            </h1>
            <p className='text-lg text-muted-foreground mt-4'>
              Breathe life into your career with beautifully designed resumes,
              tailored to impress.
            </p>
            <Button className='mt-6' size='lg'>
              Craft your resume now
            </Button>
            <div className='mt-0.5'>
              <span className=' text-xs text-muted-foreground'>
                Your dream resume, just $1!
              </span>
            </div>
          </div>
        </div>
        <div className='mt-16'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className='flex'>
                    Easy-to-use editor
                    <Pencil1Icon className='ms-2' />
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
                  <div className='flex'>
                    Customizable templates
                    <MixIcon className='ms-2' />
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
                  <div className='flex'>
                    Affordability
                    <CardStackIcon className='ms-2' />
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
                  <div className='flex'>
                    Guidance and tips
                    <QuestionMarkCircledIcon className='ms-2' />
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
                  <div className='flex'>
                    Flexible export options
                    <FileIcon className='ms-2' />
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
                  <div className='flex'>
                    Privacy guaranteed
                    <FaceIcon className='ms-2' />
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
