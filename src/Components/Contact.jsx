import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='h-full bg-white py-16  '>
        <div className='h-[600px] md:h-[500px] md:w-[1000px] md:mx-w-[300px] mx-auto bg-[#176B7D] py-6'>
        <div className='font-black'>
            <p className='font-extralight text-center mx-auto w-[50%] md:pt-4 text-white'>Alternatively, fill out the form and we’ll be in touch soon!
</p>
<h1 className='font-medium py-4 text-center text-3xl mx-auto w-[50%] text-white'>How can we help you?</h1>
        </div>
        <div className='grid md:grid-cols-2 flex-col-1 px-8 md:px-16 '>
            <input className='p-4 bg-white mt-2 md:w-[95%]' type="text" placeholder='Name' />
            <input className='p-4 bg-white mt-2' type="email" placeholder='Email Address' />
        </div>
          <div className='grid flex-col-1 px-8 md:px-16'>
            <input className='p-4 bg-white mt-2' type='tel' placeholder='Phone Number' />
            <input className='p-4 bg-white mt-2' type="text" placeholder='Subject' />
             <input className='p-4 bg-white mt-2' type='text' placeholder='Message'  />
             <button className='p-4 bg-[#0B1F3F] text-white w-[120px] mt-4 mx-auto rounded-md'>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Contact