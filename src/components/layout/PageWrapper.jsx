import React from 'react'

const PageWrapper = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center relative w-full min-h-screen p-2 md:p-10 bg-neutral-200 dark:bg-slate-900 transition duration-500'>{children}</div>
  )
}

export default PageWrapper