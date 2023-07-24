import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { DataProvider } from '../context/data-context'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
