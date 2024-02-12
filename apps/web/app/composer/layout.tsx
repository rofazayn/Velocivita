export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen w-full m-0 p-0 flex flex-column items-stretch justify-stretch'>
      {children}
    </div>
  )
}
