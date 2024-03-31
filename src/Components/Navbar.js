import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-44 pv-3 mb-5 cursor-pointer'>
        <header className=' text-[#EDA751] font-bold text-lg'>Elijah Simon</header>
        <ul className='flex gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
        </ul>
        <button className='bg-[#EDA751] text-white px-5 pv-2 rounded-lg hover:bg-black'>Resume</button>
    </nav>
  )
}

export default Navbar