import React from 'react'

function Footer() {
  return (
    <div className='md:mt-20 py-20 border-t border-black md:mx-40 mx-8'>
        <div className='flex md:justify-end'>
            <div>
                <h1 className='font-domine md:text-5xl text-3xl font-semibold'>Mohamed Ashmal M</h1>
                <div className='flex md:justify-end justify-center md:gap-8 gap-5 font-sourcecode md:text-lg mt-3'>
                    <a className=' hover:underline' href="https://www.linkedin.com/in/mohamed-ashmal/" target='_blank'>LinkedIn</a>
                    <a className=' hover:underline' href="https://github.com/mhd-ashmal38" target='_blank'>GitHub</a>
                    <a className=' hover:underline' href="mailto:machingal.ashmal@gmail.com" target='_blank'>Email</a>
                    <a className='hover:underline' href="https://wa.me/9947276536" target='_blank' rel='noopener noreferrer'>WhatsApp</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer