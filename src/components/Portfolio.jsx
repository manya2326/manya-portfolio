import React from 'react';
import weather from "../assets/weather.jpg";
import keeper from "../assets/keeper.png";
import simon from "../assets/simon.png";
import password from "../assets/password.jpg";
import dice from "../assets/dice.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weather,
      codeLink: "https://manyaweatherapp.netlify.app", // Replace with actual demo link,
      demoLink: "https://github.com/manya2326/weather-app", // Replace with actual GitHub link,
      style: 'shadow-green-500'
    },
    {
      id: 2,
      src: keeper,
      codeLink: "https://manyakeeperapp.netlify.app", // Replace with actual demo link
      demoLink: "https://manyakeeperapp.netlify.app",
      style: 'shadow-pink-300'
       // Replace with actual GitHub link
    },
    {
      id: 3,
      src: simon,
      codeLink: "https://github.com/manya2326/simon", // Replace with actual demo link
      demoLink: "https://manyasimongame.netlify.app",
      style: 'shadow-yellow-500'
       // Replace with actual GitHub link
       // Replace with actual GitHub link
    },
    {
        id: 3,
        src: password,
        codeLink: "https://github.com/APS269/passwordchecker", // Replace with actual demo link
        demoLink: "https://github.com/APS269/passwordchecker",
        style: 'shadow-blue-500' // Replace with actual GitHub link
      },
      {
        id: 5,
        src: dice,
        codeLink: "https://github.com/manya2326/dice", // Replace with actual demo link
        demoLink: "https://manyadicegame.netlify.app",
        style: 'shadow-pink-500' // Replace with actual GitHub link
      },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div name="portfolio" className='h-auto w-full bg-gradient-to-b from-slate-400 via-gray-800 to-black text-white py-8'>
      <div className='min-h-screen max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl sm:text-7xl font-bold text-white'>Portfolio</p>
          <p className='text-white py-4 mt-4 sm:mt-20'>
            Check out some of my projects right here
          </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-6'>
          {portfolios.map(({ id, src, codeLink, demoLink, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2  rounded-lg ${style}`}>
              <img src={src} alt="" className="rounded-md duration-200  w-40 px-6 hover:scale-105" />
              <div className='flex items-center justify-center'>
                <button
                  className='w-full sm:w-1/2 px-6 py-3 m-2 text-cyan-500  sm:m-4 duration-200 hover:scale-105'
                  onClick={() => handleDemoClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className='w-full sm:w-1/2 px-6 py-3  text-cyan-500 m-2 sm:m-4 duration-200  hover:scale-105'
                  onClick={() => handleCodeClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;