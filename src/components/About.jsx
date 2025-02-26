import React from "react";
import profile from "../assets/profile.jpeg";
import nintriva from "../assets/Nintriva.png";
import luminar from "../assets/lumina.png";

function About() {
  const technicalSkills = [
    { name: "HTML", level: "advanced" },
    { name: "CSS", level: "advanced" },
    { name: "JavaScript", level: "advanced" },
    { name: "TypeScript", level: "advanced" },
    { name: "Angular", level: "advanced" },
    { name: "React", level: "advanced" },
    { name: "jQuery", level: "beginner" },
    { name: "Sass", level: "advanced" },
    { name: "Bootstrap", level: "advanced" },
    { name: "Tailwind CSS", level: "advanced" },
    { name: "Responsive Design", level: "advanced" },
    { name: "Node.js", level: "intermediate" },
    { name: "Express.js", level: "intermediate" },
    { name: "REST APIs", level: "advanced" },
    { name: "PHP", level: "beginner" },
    { name: "C", level: "beginner" },
    { name: "C#", level: "beginner" },
    { name: "MongoDB", level: "intermediate" },
    { name: "MySQL", level: "beginner" },
    { name: "PostgreSQL", level: "beginner" },
    { name: "Git", level: "advanced" },
    { name: "GitHub", level: "advanced" },
    { name: "Figma", level: "intermediate" },
    { name: "Canva", level: "intermediate" },
    { name: "Postman", level: "advanced" },
    { name: "Visual Studio Code", level: "advanced" },
  ];

  const getDotColor = (level) => {
    switch (level) {
      case "advanced":
        return "bg-green-500";
      case "intermediate":
        return "bg-orange-400";
      case "beginner":
        return "bg-red-600";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div className="mx-8 md:mx-20 lg:mx-40 pt-10">
      {/* about */}
      <div className="pb-5 max-md:border-b border-black">
        <h2 className=" font-domine md:text-7xl text-4xl font-semibold">
          Hello there!
        </h2>
        <div className="md:flex flex-row-reverse gap-4 pt-7">
          <div className="hidden xl:block max-md:w-4/6 max-md:pb-5">
            <img className=" rounded-lg" src={profile} width={850} alt="" />
          </div>

          <div className=" space-y-4 font-sourcecode text-md md:pe-4 xl:border-e border-black text-justify">
            <p>
              I'm Mohamed Ashmal M, a full-stack developer. I’m so passionate
              about coding that I sometimes dream in code. Yes, that’s a thing.
              I strive to bring my fresh perspective and skills to the tech
              industry, continuously learning and growing because, apparently,
              that's what adults do.
            </p>

            <p>
              When I’m not lost in lines of code, you’ll find me on the football
              field or passionately cheering for my favorite teams. It's my way
              of pretending I have a balanced life.
            </p>

            <p>
              I’m excited to embark on my professional journey in software
              development, ready to create innovative solutions and contribute
              to projects that will change the world—or at least, make a tiny
              part of it slightly better.
            </p>

            <p>
              Feel free to reach out if you'd like to connect or collaborate!
              You can{" "}
              <a
                className="underline"
                href="/resume.pdf"
                download="Mohamed_Ashmal_resume.pdf"
              >
                download my resume here
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* experience */}
      <div className="mt-14">
        <h3 className="font-domine underline text-3xl mb-6">Experience</h3>
        <div className="flex flex-col gap-8">
          <div className="flex gap-5">
            <div>
              <a href="https://nintriva.com/" target="_blank">
                <img src={nintriva} alt="Nintriva" className="lg:w-16" />
              </a>
            </div>
            <div>
              <h3 className="font-sourcecode font-semibold text-lg">
                Junior Software Engineer
              </h3>
              <div className="lg:flex gap-5 items-center font-sourcecode">
                <h3 className="font-semibold text-lg">
                  Nintriva Technology Solutions
                </h3>
                <p className="text-gray-500 hidden lg:block">•</p>
                <p className="text-gray-500">Full-time </p>
                <p className="text-gray-500 hidden lg:block">•</p>
                <p className="text-gray-500">Jun 2024 - Present</p>
                <p className="text-gray-500 hidden lg:block">•</p>
                <p className="text-gray-500">Kochi, Kerala</p>
              </div>
              <ul className="my-5 list-disc font-sourcecode text-gray-800 gap-4">
                <li className="pb-2">
                  {" "}
                  Built a dynamic form management system in Angular using
                  SurveyJS, enabling form creation, editing, and data handling.
                </li>
                <li className="pb-2">
                  Improved a React-based admin dashboard to streamline content
                  and user management.
                </li>
                <li className="pb-2">
                  {" "}
                  Integrated RESTful APIs to facilitate seamless data exchange
                  and backend communication.
                </li>
                <li className="pb-2">
                  {" "}
                  Debugged and optimized applications, enhancing performance,
                  usability, and maintainability.
                </li>
                <li className="pb-2">
                  {" "}
                  Collaborated with cross-functional teams to refine frontend
                  workflows, improve UX, and follow coding best practices.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <a href="https://www.luminartechnolab.com/" target="_blank">
                <img src={luminar} alt="Luminar" className="w-24 md:w-24 lg:w-16" />
              </a>
            </div>
            <div>
              <h3 className="font-sourcecode font-semibold text-lg">
                Full Stack Developer Intern
              </h3>
              <div className="lg:flex gap-5 items-center font-sourcecode">
                <h3 className="font-semibold text-lg">Luminar Technolab</h3>
                <p className="text-gray-500 hidden lg:block">•</p>
                <p className="text-gray-500">Part-time </p>
                <p className="text-gray-500 hidden lg:block">•</p>
                <p className="text-gray-500">Aug 2023 - Feb 2024</p>
                <p className="text-gray-500 hidden lg:block">•</p>
                <p className="text-gray-500">Kozhikode, Kerala</p>
              </div>
              <ul className="my-5 list-disc font-sourcecode text-gray-800 gap-4">
                <li className="pb-2">
                  Acquired hands-on experience in MERN and MEAN stack
                  development.
                </li>
                <li className="pb-2">
                  Built full-stack applications using MERN and MEAN stack
                  technologies.
                </li>
                <li className="pb-2">
                  Developed RESTful APIs and integrated them with frontend
                  interfaces.
                </li>
                <li className="pb-2">
                  Debugged, tested, and optimized applications to enhance
                  performance and scalability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* technical skills */}
      <div className="my-20">
        <h3 className="font-domine underline text-3xl mb-6">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-5">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="border border-black w-fit px-3 py-1 rounded-xl flex items-center gap-2
                   transition-transform duration-300 ease-in-out transform
                   hover:bg-gray-900 hover:text-white shadow-md hover:shadow-lg"
            >
              <span
                className={`w-2 h-2 rounded-full ${getDotColor(skill.level)}`}
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      {/* row - 1 */}
      <div className="md:flex md:mt-14 mt-6  border-black">
        {/* languages */}
        <div className=" pb-5 md:w-2/4">
          <h5 className=" font-domine underline text-xl mb-3">Languages</h5>
          <p className=" font-sourcecode">English</p>
          <p className=" font-sourcecode">Hindi</p>
          <p className=" font-sourcecode">Malayalam</p>
        </div>
        {/* education */}
        <div className="md:border-s border-black pb-5 md:ps-5 md:w-3/4">
          <h5 className=" font-domine underline text-xl mb-3">Education</h5>
          <div className=" font-sourcecode">
            <p>Bachelor of Technology in CSE</p>
            <p>APJ Abdul Kalam Technological University</p>
            <p>7.39 CGPA</p>
          </div>
        </div>
        {/* location */}
        <div className="md:border-s border-black md:ps-5 md:w-2/5 pb-5">
          <h5 className=" font-domine underline text-xl mb-3">Location</h5>
          <p className=" font-sourcecode">Kerala, India</p>
        </div>
      </div>
    </div>
  );
}

export default About;
