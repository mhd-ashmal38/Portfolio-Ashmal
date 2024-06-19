import React from 'react'
import Works from './Works'

function Home() {
    return (
        <>
                <div className='border-b border-gray-700 pb-24 pt-10 md:mx-40 mx-8'>
                    <div className=' font-domine font-bold md:text-7xl text-4xl space-y-4'>
                        <h2>Hello, I'm Ashmal.</h2>
                        <h2>I'm a developer.</h2>
                    </div>
    
                    <div className='hidden md:block font-sourcecode mt-10 space-y-6 text-xl text-slate-800'>
                        <p>A <b>full-stack developer</b> based in <b>Kerala</b>, <b>India</b>, passionate about crafting <br />user-centric web applications.</p>
                        <p>I value <b>clarity</b>, <b>empathy</b>, and <b>integrity</b> above all else. These ideals guide <br />my approach to problem solving and life in general.</p>
                    </div>
                    <div className='block md:hidden font-sourcecode mt-10 space-y-6 text-lg text-slate-800 text-justify'>
                        <p>I'm a <b>full-stack developer</b> based in <b>Kerala</b>, <b>India</b>, passionate about crafting user-centric web applications.</p>
                        <p>I value <b>clarity</b>, <b>empathy</b>, and <b>integrity</b> above all else. These ideals guide my approach to problem solving and life in general.</p>
                    </div>
                </div>

            <Works/>
        </>
        
    )
}

export default Home