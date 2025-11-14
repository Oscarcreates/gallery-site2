import React from 'react'
import quote from '/assets/quote1.png'

const Card = () => {
  return (
    <div className='h-full md:px-6 px-0  mx-auto '>
      <div className='h-[500px] flex flex-col justify-center '>
      <div className='  md:w-[1000px]  flex flex-col justify-center text-left items-start mx-auto'>    
         <img className=' w-[150px]   flex items-left ' src={quote} alt="" />
         </div>
        <div className=' md:w-[1000px] mx-auto bg-[#0D0630] flex flex-col items-center w-full '>
     
            <h1 className='md:text-6xl text-3xl md:px-12 text-center md:text-left md:w-full w-[300px] px-2 text-[#F4D35E] overflow-y-hidden '>Having our memories turned into timeless visuals has been nothing short of magical.
</h1>
<p className='pt-6 md:px-12 md:text-1xl md:text-left text-center w-[300px] md:w-full text-white '>We are available for traveling within and outside Nigeria</p>

        </div>
        </div>

    </div>
  )
}

export default Card