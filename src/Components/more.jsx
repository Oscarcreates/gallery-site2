import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";


const More = () => {
    return (
        <div className='h-full bg-white py-16 '>
            <div className='md:h-[800px] h-[1300px] w-[1000px] mx-w-[400px] mx-auto bg-[#00CED1] grid md:grid-cols-3 px-16 '>
                <div className='text-[#0B1F3F] pt-4 flex flex-col justify-center w-[400px] md:w-full'>
                    <h1 className='md:text-7xl text-5xl text-center md:text-left'>We do </h1>
                    <h1 className='md:text-7xl text-5xl  mb-6 font-light text-center md:text-left'>More </h1>
                    <button className='p-2 bg-[#0B1F3F] w-[50%] mx-auto md:m-0 rounded-md text-white'>Book Session</button>
                </div>
                <div className='pt-10 w-[400px] md:w-full text-center md:text-left'>
                    <HiOutlineLightBulb className='text-[#0B1F3F] md:text-[10rem] text-9xl mx-auto md:mx-0' />
                    <div className='text-[#0B1F3F] w-[95%]'>
                        <h1 className='font-bold md:text-2xl text-xl '>WE CAPTURE MORE
                            INNOVATORS IN VISUAL STORYTELLING
                        </h1>
                        <p className='pt-4'>We are innovators in modern photography and cinematography, redefining how stories are seen and shared. From portraits and events to commercials and film, we transform moments into captivating visual experiences that inspire emotion and connection.</p>

                           <p className='pt-4'> Whether it’s a wedding, a concert, a campaign, or a corporate shoot, our creative process blends artistry, precision, and storytelling — creating images that not only capture moments, but make them unforgettable.</p>
                     
                    </div>
                </div>
                <div className='pt-10  w-[400px] md:w-full text-center md:text-left'>
                    <GiTrophyCup className='text-[#0B1F3F] md:text-[10rem]  text-9xl mx-auto md:mx-0' />
                    <div className='text-[#0B1F3F] w-[95%]'>
                        <h1 className='font-bold md:text-2xl text-xl '>AWARD-WINNING CREATIVE TEAM
                        </h1>
                        <p className='pt-4'>Our team of photographers, filmmakers, and editors bring years of experience and a shared passion for excellence. Using world-class equipment and cutting-edge techniques, we craft visuals that elevate your brand, your story, and your memories.</p>

                           <p className='pt-4'>From concept to final edit, we deliver results that exceed expectations — on time, on vision, and on purpose. With flexible packages to suit every need, we bring value, creativity, and impact to every project. </p>                       
                    </div>

                </div>

            </div>
        </div>
    )
}

export default More