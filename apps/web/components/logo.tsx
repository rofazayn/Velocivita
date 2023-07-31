import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <div>
        <span className='text-[16px] leading-0 font-extrabold tracking'>
          Velocivita./
        </span>
      </div>
    </Link>
  )
}

export default Logo
