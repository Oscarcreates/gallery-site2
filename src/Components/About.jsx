import React from 'react'
import imagex from '/assets/imagex.jpg'
import landscape from '/assets/landscape.jpg'

const About = () => {
    return (
        <div id='About' className='h-full bg-white md:w-full '>
            <div className=' mx-auto text-black pt-8 flex flex-col w-[862px] px-4 '>
                <h1 className='md:text-5xl sm:text-xl text-2xl pb-2 text-left'>Bring beautiful moments</h1>
                <h1 className='md:text-5xl sm:text-xl text-2xl pb-4 font-bold'>to life for your audience.</h1>
            
                <p className=' border-l-8 border-l-[#00CED1] px-2  text-left font-light w-[400px] md:w-full '>We take indoor and outdoor Photos, Cover Events like wedding , Traditional marriage, Concerts , Campaigns , We produce commercials  and Movies etc </p>
                <p className='border-l-8 border-l-[#00CED1] px-2  text-left pt-3 font-light w-[400px] md:w-full '>Our lens doesnt just see 
it feels, it listens, and it remembers</p>
            
            </div>
            <div className='mx-auto flex justify-center p-4'>
                <img className='w-[862px]' src={landscape} alt="" />
            </div>

            <div className='text-white mx-auto grid md:grid-cols-2 max-w-[862px] '>
                <div className=''>
                    <img className='w-[400px] mx-auto md:mx-0 ' src={imagex} alt="" />
                </div>
                <div className='flex flex-col md:justify-center w-[400px] md:w-auto mx-auto py-6 text-center md:text-left'>
                    <p className='font-bold text-black pb-6 '>We specialize in capturing timeless moments and producing high-quality visual content.</p>
                    <p className='text-black'>Our team offers professional indoor and outdoor photography services, covering a wide range of occasions such as weddings, traditional marriage ceremonies, concerts, and corporate or political campaigns. Beyond event coverage, we also create compelling commercials, short films, and full-length movie productions that tell powerful stories and connect deeply with audiences.</p>
                    <p className='font-bold text-black py-6'>Whether it’s a personal celebration, a brand campaign, or a cinematic project, we bring creativity, precision, and passion to every frame.</p>
                    <button className='p-2 bg-black w-[40%] mx-auto md:m-0 rounded-md'>Book Session</button>
                </div>
            </div>
            
        </div>
    )
}

export default About