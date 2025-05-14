import React from 'react'
import { Data } from '@/data'

function Skils() {
  return (
    <div id='Skills' className='space-y-4' data-aos="fade-right"
    data-aos-duration="200"
    data-aos-delay="200"
    data-aos-easing="ease-in-sine">
        <h1 className='text-center text-3xl font-bold tracking-wide text-[#00CAEE]'>Skills</h1>
        <p className='text-center lg:text-lg text-sm text-gray-200'>Here are some of the skills I have learned.</p>

<div className='flex flex-wrap justify-center lg:flex-row flex-col  gap-5' >
       {Data.skill.map((val,index)=>( <div data-aos="fade-right"
            data-aos-duration="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine" className='bg-[#14151D] lg:w-[40%] min-h-[250px] w-full border border-[#0173ca] rounded-lg'>
        <p className=' capitalize text-center p-3 text-lg font-bold text-[#FFFFFF]'>{val.title}</p>
        <div className='gap-5 flex flex-wrap justify-center lg:p-5 p-2 rounded-lg '>
          {val.skills.map((val,index)=>(
            <div key={index}  className='flex  lg:gap-2 gap-1 gap-y-3 justify-center rounded-lg items-center p-2 border border-[#b1b2b3]'>
              <img src={val.Logo} alt={val.skill} className='w-6 h-6 object-fit rounded-lg' />
              <p className='lg:text-medium text-sm font-normal text-[#FFFFFF]'>{val.skill}</p>
            </div>
         )) }
          </div>
        </div>))}
        

        
</div>
        </div>
  )
}



export default Skils