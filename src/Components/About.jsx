import React from 'react'
import imagex from '/assets/imagex.jpg'
import landscape from '/assets/landscape.jpg'
import img1 from '/assets/Img1.jpg'
import img2 from '/assets/img2.jpg'
import img3 from '/assets/img3.jpg'
import img4 from '/assets/img4.jpg'
import img5 from '/assets/img5.jpg'
import img6 from '/assets/img6.jpg'
import img7 from '/assets/Img7.jpg'
import img8 from '/assets/img8.jpg'


const About = () => {
    return (
        <div id='About' className='h-full bg-white md:w-full '>
            <div className=' mx-auto text-black pt-8 flex flex-col w-[862px] px-4 '>
                <h1 className='md:text-5xl sm:text-xl text-2xl pb-2 text-left'>Bring beautiful moments</h1>
                <h1 className='md:text-5xl sm:text-xl text-2xl pb-4 font-bold'>to life for your audience.</h1>
            
                <p className=' border-l-8 border-l-[#0D0630] px-2  text-left font-light w-[300px] md:w-full '>We take indoor and outdoor Photos, Cover Events like wedding , Traditional marriage, Concerts , Campaigns , We produce commercials  and Movies etc </p>
                <p className='border-l-8 border-l-[#0D0630] px-2  text-left pt-3 font-light w-[300px] md:w-full '>Our lens doesnt just see 
it feels, it listens, and it remembers</p>
            
            </div>
            <div className='py-4'>
            <div className='mx-auto grid justify-center items-center  md:grid-cols-3 md:max-w-[1000px] '>
                <div className='w-[330px]'>
                <img className='w-[480px] px-1 py-2 md:py-0' src={img6} alt="" />
                </div>
                <div className='w-[330px]'>
                <img className='w-[480px] px-1 py-2 md:py-0' src={img1} alt="" />
                </div>
                <div className='w-[330px]'>
                <img className='w-[480px] px-1 py-2 md:py-0' src={img2} alt="" />
                </div>
                 
            </div>
              
            </div>

            <div className='text-white mx-auto grid md:grid-cols-3 max-w-[1000px] '>
                <div className=''>
                    <img className='w-[400px] mx-auto md:mx-0 ' src={imagex} alt="" />
                </div>
                <div className='flex flex-col md:justify-center w-[300px] md:w-auto mx-auto px-6  text-center md:text-left'>
                    <p className='font-bold text-black pb-6 '>We specialize in capturing timeless moments and producing high-quality visual content.</p>
                    <p className='text-black py-6'>Our team offers professional indoor and outdoor photography services, covering a wide range of occasions such as weddings, traditional marriage ceremonies, concerts, and corporate or political campaigns.</p>
                    {/* <p className='font-bold text-black py-6'>Whether it’s a personal celebration, a brand campaign, or a cinematic project, we bring creativity, precision, and passion to every frame.</p> */}
                    <button className='p-2 bg-[#0D0630] w-[50%] mx-auto md:m-0 rounded-md'>Book Session</button>
                </div>
                <div >
                 <div className='w-[330px]'>
                <img className='w-[480px] px-1 py-2 md:py-0' src={img8} alt="" />
                </div>
                </div>
            </div>
            <div className='mx-auto grid justify-center items-center py-4 md:grid-cols-3 md:max-w-[1000px] '>
                <div className='w-[330px]'>
                <img className='w-[480px] px-1 py-2 md:py-0' src={img7} alt="" />
                </div>
                <div className='w-[330px]'>
                <img className='w-[480px] px-1 py-2 md:py-0' src={img4} alt="" />
                </div >
                <div className='w-[330px]'>
                <img className='w-[480px] px-1 py-2 md:py-0' src={img5} alt="" />
                </div>
                 
            </div>
        </div>
    )
}

export default About