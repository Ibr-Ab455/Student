// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

function Register() {

  const [showPassword, setShowPassword] = useState(false)
  
   const navigate = useNavigate()
  return (
    <div className='w-full mt-20'>
    <div className='bg-[#116530] w-[80vh] h-[85vh] mx-auto rounded'>
    <h2 className='text-xl text-center mb-3 pt-4 text-white'>Login</h2>

     <form  className='flex flex-col pl-8 space-y-5 pt-3'>
       
       <input type="text" id='email' placeholder='Brukernavn' className='w-[90%] p-2 rounded outline-none'/>
     
      <input type='email' id='email'  placeholder='E-post' className='w-[90%] p-2 rounded outline-none' />
      
          <div className='relative'>
            <input type={showPassword ? "text" : "password"} id='password'  placeholder='Password' className='w-[90%] p-2 rounded outline-none' />
              { showPassword ? (
                <AiFillEyeInvisible className='absolute right-14 top-3 cursor-pointer text-xl' onClick={()=> setShowPassword((prevState) => !prevState)}/>
              ) : (
                <AiFillEye className='absolute right-14 top-3 cursor-pointer text-xl'onClick={()=> setShowPassword((prevState) => !prevState)}/>
              )}
            </div>
            
            <button className='w-[90%] bg-[#E34234] rounded p-2 text-[18px] text-white cursor-pointer'>Login</button>
     
          <div>
          <h3 className='text-white pl-8 pt-3'>Er du allerede medlem?  
          <span className='text-[#E34234] cursor-pointer' onClick={() => navigate('/login')}> Logg inn</span>
          </h3>
          </div>
     </form>
    </div>
    </div>
  )
}

export default Register