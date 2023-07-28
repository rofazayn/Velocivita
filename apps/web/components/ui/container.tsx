import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='flex flex-col grow justify-start items-stretch w-full max-w-[1200px] min-h-full mx-auto px-4 md:px-7 border-x border-stone-200/50 dark:border-stone-800'>
      {children}
    </div>
  )
}

export default Container
