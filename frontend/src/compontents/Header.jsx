import React from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = ({darkMode,setDarkMode}) => {
  return (
    <div className='flex justify-between items-baseline'>
      <Link to='/'>
        <div className='dark:text-white  text-4xl py-8  font-bold'>Notes.</div>
      </Link>
      <BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='dark:text-white text-xl cursor-pointer'/>
    </div>
  )
}

export default Header