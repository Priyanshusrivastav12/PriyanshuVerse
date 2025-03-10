import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: python,
      name: "Python",
      github: "https://github.com/Priyanshusrivastav12/SmartCarParking-System",
      drive: "https://drive.google.com/file/d/1mYd-xTycmc9GhKVsNzyOfniCucSSTIlK/view?usp=sharing",
      description:
        "Real-time Parking Availability – No more guessing! Instantly find vacant spots.",
    },
    // {
    //   id: 2,
    //   logo: reactjs,
    //   name: "ReactJS",
    //   github: "",
    //   drive: "",
    //   description:"",
    // },
    // {
    //   id: 3,
    //   logo: nodejs,
    //   name: "NodeJS",
    //   github: "",
    //   drive: "",
    //   description:"",
    // },
    // {
    //   id: 4,
    //   logo: express,
    //   name: "Express",
    //   github: "",
    //   drive: "",
    //   description:"",
    // },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, github, drive, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                {/* Video Button */}
                {drive && drive.trim() !== "" && (
                  <a href={drive} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                      Video
                    </button>
                  </a>
                )}

                {/* Source Code Button */}
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source Code
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
