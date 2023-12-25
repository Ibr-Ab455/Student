// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#000] top-0  sticky'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
             <h1 className='pl-2 text-white'>IbraNett</h1>
            </Link>
           
           
            <ul className='flex space-x-4'>
                <Link to="/">
                 <li className='text-[12px] cursor-pointer text-white'>Home</li>
                </Link>
                 
                <Link to="/about">
                 <li className='text-[12px] cursor-pointer text-white'>Om oss</li>
                </Link>
                
                <Link to="/courses">
                 <li className='text-[12px] cursor-pointer text-white'>Kursløyper </li>
                </Link>
                
                <Link to="/contact">
                 <li className='text-[12px] cursor-pointer text-white'>Kontakt</li>
                </Link>
                
                
                
            </ul>
             <div className='flex space-x-4'>
                <Link to="/login">
                 <button className='text-[12px] text-white'>Login</button>
                </Link>
              
                <Link to="/register">
                 <button className='bg-[#116530] w-[70px] h-6 rounded text-[13px] text-white'>Registre</button>
                </Link>
                
             </div>
        
        </div>
    </div>
  )
}

export default Navbar