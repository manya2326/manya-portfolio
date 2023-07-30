import React from 'react'
import HeroImage from "../assets/heroImage.png";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const Home = () => {
  return (
    <div name="home"
    className='h-screen w-full bg-gradient-to-b from-gray-600 via-gray-800 to-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h3 className='text-3xl sm:text-5xl font-bold text-white'>
                    I'm a Full Stack Development Enthusiast
                </h3>
                <p className='text-gray-400 py-4 max-w-md'>
                    I am a Passionate B.Tech student of Information 
                    Technology (IT).
                    I love to work on web applications and websites 
                    using technologies like :-
                    React.js ,Tailwind ,Node.js .Many more components 
                    and Frameworks.
                </p>
                <div>
                  <button className='group text-white w-fit px-6 py-3
                  my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight sice={25}
                        className='ml-1'
                    />
                    </span>
                  </button>  
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile"
                className='rounded-2xl mx-auto w-1/2 h-1/2 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home