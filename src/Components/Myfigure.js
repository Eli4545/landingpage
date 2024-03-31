import React from 'react'
import Eli1 from '../assets/Eli1.png.png'

function Myfigure() {
  return (
    <div className='pr-44 flex items-end relative'>
        <figure>
            <img src={Eli1} alt="Elijah Simon" className='z-10 rounded-similar'/>
        </figure>
        <div className='bg-white w-96 h-96 lg:w-[800px] lg:h-[800px] rounded-full absolute -right-20 -bottom-80 -z-10'>

        </div>


    </div>
  )
}

export default Myfigure