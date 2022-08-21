import React from 'react'
import LoaderSpinner from './LoaderSpinner'

const AppLoader = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full p-10'>
      <LoaderSpinner />
    </div>
  )
}

export default AppLoader