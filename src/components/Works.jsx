import React from 'react'
import img1 from '../assets/p1.gif'
import img2 from '../assets/p2.gif'
import img3 from '../assets/p3.gif'
import img4 from '../assets/p4.gif'

function Works() {
    return (
        <div className='md:mx-40 mx-8'>

            {/* project - 1 */}
            <div className='mt-10 md:flex items-center'>
                <div className='mt-20 max-md:border-b border-gray-700 max-md:pb-10 md:flex gap-10 items-center'>
                    <div>
                        <div className=' md:flex items-center md:border-b border-black'>
                            <div className='md:px-16 pb-2 font-sourcecode text-lg'>
                                <p>01</p>
                            </div>
                            <a href='https://animated-raindrop-b618b8.netlify.app/' target='_blank'>
                                <div className='md:border-s border-black md:ps-16'>
                                    <h3 className='font-domine font-semibold md:text-3xl text-2xl md:pb-10'>ASH Store <br />E-Commerce Application</h3>
                                </div>
                            </a>
                        </div>
                        <p className=' font-sourcecode mt-5 pb-10 text-justify'>Developed using <b>Angular</b> and <b>Tailwind CSS</b> for the frontend, with <b>Node.js</b> and <b>Express</b> for the backend and <b>MongoDB</b> for data storage.
                        </p>
                    </div>
                    <div className='mb-10 rounded-xl'>
                        <img src={img1} width={700} className='rounded-xl shadow-xl' alt="" />
                    </div>
                </div>
            </div>

            {/* project - 2 */}
            <div className='mt-10 md:flex items-center'>
                <div className='mt-20 max-md:border-b border-gray-700 max-md:pb-10 md:flex gap-10 items-center'>
                    <div>
                        <div className=' md:flex items-center md:border-b border-black'>
                            <div className='md:px-16 pb-2 font-sourcecode text-lg'>
                                <p>02</p>
                            </div>
                            <a href='https://stately-dolphin-d0f264.netlify.app' target='_blank'>
                                <div className='md:border-s border-black md:ps-16'>
                                    <h3 className='font-domine font-semibold md:text-3xl text-2xl md:pb-10'>Edu Track <br />Student Management System</h3>
                                </div>
                            </a>
                        </div>
                        <p className=' font-sourcecode mt-5 pb-10 text-justify'>Built with <b>React</b> and <b>Tailwind CSS</b> for the frontend, <b>Node.js</b> and <b>Express</b> for the backend, and <b>MongoDB</b> for data persistance.</p>
                    </div>
                    <div className='mb-10 rounded-xl'>
                        <img src={img2} width={650} className=' rounded-xl shadow-xl' alt="" />
                    </div>
                </div>
            </div>

            {/* project - 3 */}
            <div className='mt-10 md:flex items-center'>
                <div className='mt-20 max-md:border-b border-gray-700 max-md:pb-10 md:flex gap-10 items-center'>
                    <div className=''>
                        <div className=' md:flex items-center md:border-b border-black'>
                            <div className='md:px-16 pb-2 font-sourcecode text-lg'>
                                <p>03</p>
                            </div>
                            <a href='https://melodic-centaur-56d327.netlify.app/' target='_blank'>
                                <div className='md:border-s border-black md:ps-16'>
                                    <h3 className='font-domine font-semibold md:text-3xl text-2xl md:pb-10'>DialUp <br />Contact Management Application</h3>
                                </div>
                            </a>
                        </div>
                        <p className=' font-sourcecode mt-5 pb-10 text-justify'>Built with <b>Angular</b> and <b>Tailwind CSS</b> for frontend, <b>Node.js</b> and <b>Express</b> for the backend, with <b>JSON Server</b> as a mock database.</p>
                    </div>
                    <div className='mb-10 rounded-xl'>
                        <img src={img3} width={650} className=' rounded-xl shadow-xl' alt="" />
                    </div>
                </div>
            </div>

            {/* project - 4 */}
            <div className='mt-10 md:flex items-center'>
                <div className='mt-20  max-md:pb-10 md:flex gap-10 items-center'>
                    <div className=''>
                        <div className=' md:flex items-center md:border-b border-black'>
                            <div className='md:px-16 pb-2 font-sourcecode text-lg'>
                                <p>04</p>
                            </div>
                            <a href='https://kaleidoscopic-starship-9dd86c.netlify.app/' target='_blank'>
                                <div className='md:border-s border-black md:ps-16'>
                                    <h3 className='font-domine font-semibold md:text-3xl text-2xl md:pb-10'>Videoo <br />Video Player Website</h3>
                                </div>
                            </a>
                        </div>
                        <p className=' font-sourcecode mt-5 pb-10 text-justify'>Developed using <b>React</b> with <b>Bootstrap5</b> for styling. The backend is powered by <b>Node.js</b> with a <b>JSON Server</b> as database.</p>
                    </div>
                    <div className='mb-10 rounded-xl'>
                        <img src={img4} width={620} className=' rounded-xl shadow-xl' alt="" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Works