import React from 'react'

import { IoMoon } from 'react-icons/io5';
import { BsFillSunFill } from 'react-icons/bs';
import useDarkeMode from '../../hooks/useDarkeMode';

const Header = () => {
  const [colorTheme, setTheme] = useDarkeMode()

  const handleTheme = () => {
    setTheme(colorTheme)
  }
  return (
    <div className='flex justify-end bg-transparent p-4 fixed top-0 w-full h-14'>
      <button className='flex justify-center items-center bg-gray-300 dark:bg-violet-900 transition duration-500 shadow rounded-full p-2 h-12 w-12' onClick={handleTheme}>
        {
          colorTheme === 'dark' ? <IoMoon fontSize={20} color="black" /> : <BsFillSunFill fontSize={20} color="white" />
        }
      </button>
    </div>
  )
}

export default Header