import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'

const Navbar = () => {

    const {theme} = useContext(ThemeContext)

  return (
   <nav className={theme ? 'bg-[#00809D] p-4': 'bg-[#1B1833] p-4'}>
        <h1 className='text-3xl  font-bold text-white'>Kal-Tak</h1>
    </nav>
  )
}

export default Navbar