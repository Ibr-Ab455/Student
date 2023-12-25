// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'


function LogIn() {
 
 
  const [showPassword, setShowPassword] = useState(false)
  

   return (
    <div className='w-full mt-20'>
    <div className='bg-[#116530] w-[80vh] h-[60vh] mx-auto rounded'>
    <h2 className='text-xl text-center mb-3 pt-4 text-white'>Login</h2>

     <form  className='flex flex-col pl-8 space-y-5 pt-3' >
    
      <input type='email' name='email'  placeholder='E-post' className='w-[90%] p-2 rounded outline-none' />
      
          <div className='relative'>
            <input type={showPassword ? "text" : "password"} name='password'  placeholder='Password' className='w-[90%] p-2 rounded outline-none' />
              { showPassword ? (
                <AiFillEyeInvisible className='absolute right-14 top-3 cursor-pointer text-xl' onClick={()=> setShowPassword((prevState) => !prevState)}/>
              ) : (
                <AiFillEye className='absolute right-14 top-3 cursor-pointer text-xl'onClick={()=> setShowPassword((prevState) => !prevState)}/>
              )}
            </div>
            
            <button type='submit' className='w-[90%] bg-[#E34234] rounded p-2 text-[18px] text-white cursor-pointer'>Login</button>
    
     </form>
    </div>
    </div>
  )
}

export default LogIn