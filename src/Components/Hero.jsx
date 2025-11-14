import React from 'react'
import { ReactTyped } from "react-typed";




const Hero = () => {
    return (
        <div id='Home' className='relative h-screen text-white overflow-hidden'>
    
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
                    <div>
                        <p className='py-6 md:text-3xl sm:text-2xl text-1xl text-white'>{<ReactTyped strings={['Photos', 'Weddings', 'Traditional Marriage', 'Concerts', 'Campaigns', 'Movies and Commercials']} typeSpeed = {120} backSpeed={140} loop /> }</p>
                        
                    </div>
                </div>
               
                <div className='text-black mx-auto flex flex-col items-center'>
                    <button className='bg-[#F4D35E] p-4 rounded-md font-light text-[#0D0630] hover:bg-[#00B8BB] transition-colors'>
                      <a href="https://wa.link/byb5an">Book a Session</a>  
                    </button>
                </div>
            </div>
        </div>
    )
}



export default Hero