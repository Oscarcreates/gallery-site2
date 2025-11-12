import React from 'react'


const Hero = () => {
    return (
        <div className='relative h-screen text-white overflow-hidden'>
    
            <video 
                className='absolute top-0 left-0 w-full h-full object-cover'
                autoPlay 
                loop 
                muted
                playsInline
            >
                <source src="https://res.cloudinary.com/dquamrc0f/video/upload/v1762708742/location_jecnuk.mp4" type="video/mp4" />
            </video>

            <div className='absolute top-0 left-0 w-full h-full bg-[#0D0630] opacity-80'></div>

            <div className='relative z-10 h-full mx-auto flex flex-col justify-center'>
                <div className='font-bold mx-auto flex flex-col items-center justify-center'>
                    <h1 className='md:text-5xl sm:text-xl text-2xl text-[#F4D35E]'>FREEZING MOMENTS</h1>
                    <h1 className='md:text-6xl sm:text-3xl text-3xl text-[#F4D35E]'>FRAMING EMOTIONS</h1>
                    <p className='py-8 md:text-2xl sm:text-2xl text-1xl'>-BEAUTY - STYLE - MOMENTS-</p>
                </div>
               
                <div className='text-black mx-auto flex flex-col items-center'>
                    <button className='bg-[#F4D35E] p-4 rounded-md font-light text-[#0D0630] hover:bg-[#00B8BB] transition-colors'>
                        Book a Session
                    </button>
                </div>
            </div>
        </div>
    )
}



export default Hero