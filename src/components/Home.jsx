import React from "react";

// Import profile picture
import pic from "../../public/Profile.jpg";

// Import social icons
import { FaSquareFacebook, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa6";

// Import tech stack icons
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";

// Import React Typed for animated text
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          {/* Left Section (Text Content) */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-green-700 font-bold"
                strings={["Developer", "Programmer", "Problem Solver "]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Welcome to my digital space! I'm Priyanshu Srivastav, a tech enthusiast on a mission to create impactful solutions using AI and modern web technologies. I am pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence from KIET Group of Institutions. Currently, I have an overall CGPA of 7.6 in my B.Tech.
              <br /><br />
              I have expertise in various technologies, including HTML, Tailwind CSS, JavaScript, React, Node.js, Express.js, MongoDB, and Framer Motion, along with proficiency in Data Structures and Algorithms (DSA).
            </p>
            <br />

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2 mb-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/priyanshu.srivastava.90410834" target="_blank" rel="noopener noreferrer">
                      <FaSquareFacebook className="text-2xl cursor-pointer text-blue-600 hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/priyanshu-srivastav-153871257/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer text-blue-500 hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-2xl cursor-pointer text-pink-500 hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-2xl cursor-pointer text-blue-400 hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer text-green-500" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer text-gray-500" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer text-blue-500" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer text-green-700" />
                </div>
              </div>
            </div>

            {/* CV & Resume Buttons with Extra Top Margin */}
            <div className="flex justify-center md:justify-start space-x-6 mt-10">
              {/* Download CV Button */}
              <a href="/files/Priyanshu_CV.pdf" download="Priyanshu_CV.pdf">
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                  Download CV
                </button>
              </a>

              {/* View Resume Button */}
              <a href="https://drive.google.com/file/d/17lggs1cWOs06a5_id4dO7yA160LQ60OW/view?usp=sharing" target="_blank">
                <button className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-300">
                  View Resume
                </button>
              </a>
            </div>
          </div>

          {/* Right Section (Profile Image) */}
          <div className="md:w-1/2 md:ml-12 md:mt-20 mt-6 flex justify-center items-center">
            <img
              src={pic}
              className="rounded-full md:w-[420px] md:h-[420px] w-[300px] h-[300px] object-cover object-top shadow-lg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
