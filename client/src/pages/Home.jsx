// eslint-disable-next-line no-unused-vars
import React from 'react'
import bilder from '../../src/assets/image/image-1.png'

function Home() {
  return (
     <div className='bg-[#000] w-full h-[80vh]'>
        <div className='flex justify-between items-center w-[80%] mx-10 text-white'>
          {/* left */}
          <div className='pt-10'>
            <h1 className='mb-2 text-3xl '>Discover Limitless <br/> Learing With IbraNett</h1>
            <p className='text-[12px] mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, aliquid explicabo. Alias et doloremque possimus accusamus unde nisi eius magnam!</p>
            <button className='w-24 bg-[#116530] py-1 rounded cursor-pointer'>Get Started</button>
          </div>
          {/* right */}
          <div className='w-[120%]'>
            <img src={bilder} alt='bilder'/>
          </div>
        </div>
         {/* under */}
         <div className='bg-[#A3EBB1] w-full h-20 mt-14'>
           <div className='flex pl-14 space-x-8 pt-4'>
             
             <div className='relative'>
              <div className='bg-gray-400 absolute top-0 left-[4.5rem] w-[1px] h-14'></div>
               <h2 className='text-2xl font-bold'>100%</h2>
               <h4 className="font-medium text-gray-500 text-[17px]">Online</h4>
             </div>
            
             <div className='relative'>
             <div className='bg-gray-400 absolute top-0 left-[4.8rem] w-[1px] h-14'></div>
               <h2  className='text-2xl font-bold'>+10k</h2>
               <h4 className="font-medium text-gray-500 text-[17px]">Students</h4>
             </div>
            
             <div className='relative'>
             <div className='bg-gray-400 absolute top-0 left-[4.5rem] w-[1px] h-14'></div>
               <h2  className='text-2xl font-bold'>+500</h2>
               <h4 className="font-medium text-gray-500 text-[17px]">Courses</h4>
             </div>
            
             <div className='relative'>
               <h2  className='text-2xl font-bold'>+200</h2>
               <h4 className="font-medium text-gray-500 text-[17px]">Tutors</h4>
             </div>
           </div>
         </div>
     </div>
  )
}

export default Home