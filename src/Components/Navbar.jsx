import React, {useState}from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '/assets/logo.png'



const Navbar = () => {

 const [nav, setNav] = useState(false)

 const handleNav = () => {
  setNav(!nav)
 }

  return (
    <div className= 'flex justify-between text-white items-center mx-auto h-20 px-16 fixed top-0 left-0 w-full z-50 bg-[#0A2540]'>
   <img className="max-w-[120px]" src={logo} alt="" />
      <ul className='hidden md:flex' >
        <li className='p-4'>Home</li>
        <li className='p-4'><a href="#About">About</a></li>
        {/* <li className='p-4'>Resource</li> */}
        <li className='p-4'><a href="#contact">Contact</a>
</li>
      </ul>

    <div onClick={handleNav} className="block md:hidden">
  {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
</div>

    
     <div className={nav ? "ease-in-out duration-500 h-full w-[60%] fixed left-0 top-0 border-r bg-[black] border-r-gray-900 md:hidden" : "fixed left-[-100%]"}>
         <img className="max-w-[120px] m-4" src={logo} alt="" />
        <ul className="p-4">
           <li className='p-4 border-b border-white'>Home</li>
        <li className='p-4 border-b border-white'><a href="#About">About</a></li>
        {/* <li className='p-4 border-b border-white'>Resource</li> */}
        <li className='p-4'><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar