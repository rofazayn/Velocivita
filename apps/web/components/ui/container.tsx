import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='w-full max-w-[1120px] min-h-full mx-auto px-5'>
      {children}
    </div>
  )
}

export default Container
