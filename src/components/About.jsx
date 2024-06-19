import React from 'react'
import profile from '../assets/profile.jpeg'

function About() {
  return (
    <div className='mx-8 md:mx-40 pt-10'>
      
      {/* about */}
      <div className='pb-5 max-md:border-b border-black'>
        <h2 className=' font-domine md:text-7xl text-4xl font-semibold'>Hello there!</h2>
        <div className='md:flex flex-row-reverse gap-4 pt-7'>

          <div className='max-md:w-4/6 max-md:pb-5'>
            <img className=' rounded-lg' src={profile} width={850} alt="" />
          </div>

          <div className=' space-y-4 font-sourcecode text-md md:pe-4 md:border-e border-black text-justify'>
            <p>I'm Mohamed Ashmal M, a full-stack developer. I’m so passionate about coding that I sometimes dream in code. Yes, that’s a thing. I strive to bring my fresh perspective and skills to the tech industry, continuously learning and growing because, apparently, that's what adults do.</p>

            <p>When I’m not lost in lines of code, you’ll find me on the football field or passionately cheering for my favorite teams. It's my way of pretending I have a balanced life.</p>

            <p>I’m excited to embark on my professional journey in software development, ready to create innovative solutions and contribute to projects that will change the world—or at least, make a tiny part of it slightly better.</p>

            <p>Feel free to reach out if you'd like to connect or collaborate! You can <a className='underline' href="/resume.pdf" download="Mohamed_Ashmal_resume.pdf">download my resume here</a>.</p>
          </div>

        </div>
      </div>

      {/* row - 1 */}
      <div className='md:flex md:mt-14 mt-6 md:border-b border-black'>
        {/* experience */}
        <div className='pb-5 md:w-2/4'>
          <h5 className=' font-domine underline text-xl mb-3'>Experience</h5>
          <div className=' font-sourcecode'>
            <p>Full Stack Developer Intern</p>
            <p>Luminar Technolab Calicut</p>
            <p >0.8 years</p>
          </div>
        </div>
        {/* education */}
        <div className='md:border-s border-black pb-5 md:ps-5 md:w-3/4'>
          <h5 className=' font-domine underline text-xl mb-3'>Education</h5>
          <div className=' font-sourcecode'>
            <p>Bachelor of Technology in CSE</p>
            <p>APJ Abdul Kalam Technological University</p>
            <p>7.39 CGPA</p>
          </div>
        </div>
        {/* location */}
        <div className='md:border-s border-black md:ps-5 md:w-2/5 pb-5'>
          <h5 className=' font-domine underline text-xl mb-3'>Location</h5>
          <p className=' font-sourcecode'>Kerala, India</p>
        </div>
      </div>

      {/* row - 2 */}
      <div className='md:flex max-md:pb-10'>
        {/* experience */}
        <div className='md:py-5 pb-5 md:w-2/4'>
        <h5 className=' font-domine underline text-xl mb-3'>Languages</h5>
          <p className=' font-sourcecode'>English</p>
          <p className=' font-sourcecode'>Hindi</p>
          <p className=' font-sourcecode'>Malayalam</p>
        </div>
        {/* education */}
        <div className='md:border-s border-black md:py-5 pb-5 md:ps-5 md:w-3/4'>
          <h5 className=' font-domine underline text-xl mb-3'>Skills</h5>
          <div className=' font-sourcecode'>
            {/* <p className='flex'><FaHtml5 size={25} /> <DiCss3 size={26}/> <IoLogoJavascript size={25}/></p> */}
            HTML5, CSS3, Bootstrap5, Tailwind CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, MySQL, Git and Figma.
          </div>
        </div>
        {/* location */}
        <div className='md:border-s border-black md:py-5 pb-5 md:ps-5 md:w-2/5'>
        <h5 className=' font-domine underline text-xl mb-3'>Hobbies</h5>
          <div className=' font-sourcecode'>
            <p>Coding</p>
            <p>Playing Football</p>
            <p >Listening to music</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About