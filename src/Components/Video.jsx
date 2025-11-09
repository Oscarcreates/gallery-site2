import React from 'react'
import location from '/public/assets/location.mp4'

const Video = () => {
    return (
        <div className='h-full bg-white py-16'>
            <div className='flex flex-col items-center'>
                <h1 className='text-black font-bold md:text-3xl text-2xl'>See Things For Yourself</h1>
                <p className='text-black md:text-2xl text-xl pt-2 '>Our Physical Office</p>
            </div>

            <div className='w-full max-w-4xl mx-auto px-4 my-8'>
                <video className="w-full rounded-lg" controls>
                    <source src={location} type="video/mp4" />
                </video>

            </div>

        </div>
    )
}

export default Video