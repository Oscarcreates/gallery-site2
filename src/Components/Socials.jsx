import React from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Socials = () => {
  return (
   <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
  <a 
    href="https://facebook.com/yourpage" 
    target="_blank"
    className="bg-gray-400 hover:bg-gray-500 w-14 h-14 rounded-full flex items-center justify-center transition-colors"
  >
    <FaFacebook className="text-white text-2xl" />
  </a>
  
  <a 
    href="https://wa.me/2348038163489" 
    target="_blank"
    className="bg-gray-400 hover:bg-gray-500 w-14 h-14 rounded-full flex items-center justify-center transition-colors"
  >
    <FaWhatsapp className="text-white text-2xl" />
  </a>
  
  <a 
    href="https://www.instagram.com/cistystudios?igsh=MTRnZXBxYTZpZHNmaQ==" 
    target="_blank"
    className="bg-gray-400 hover:bg-gray-500 w-14 h-14 rounded-full flex items-center justify-center transition-colors"
  >
    <FaInstagram className="text-white text-2xl" />
  </a>
</div>
  )
}

export default Socials