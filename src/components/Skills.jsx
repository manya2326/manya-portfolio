import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/java-script.png";
import fullstackdeveloper from "../assets/full-stack-developer-icon.png";
import python from "../assets/python.png";
import react from "../assets/react-js-icon.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import mysql from "../assets/mysql.png";
import C from "../assets/c-logo.png";


const Skills = () => {
    const techs =[{
        id:1,
        src:html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title: 'CSS',
        style: 'shadow-blue-400'
    },
    {
        id:3,
        src:javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id:4,
        src:react,
        title: 'React.js',
        style: 'shadow-blue-600'
    },
    {
        id:5,
        src:python,
        title: 'Python',
        style: 'shadow-pink-500'
    },
    {
        id:6,
        src:fullstackdeveloper,
        title: 'FullStackDevelopment',
        style: 'shadow-white'
    },
    {
        id:1,
        src:node,
        title: 'Node.js',
        style: 'shadow-green-500'
    },
    {
        id:1,
        src:github,
        title: 'GitHub',
        style: 'shadow-gray-500'
    },
    {
        id:1,
        src:mysql,
        title: 'MySql',
        style: 'shadow-purple-500'
    },
    {
        id:1,
        src: C,
        title: 'C++',
        style: 'shadow-red-500'
    },
]
  return (
    <div name='Skills' className='bg-gradient-to-b from-slate-500 via-gray-600 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Skills
                </p>
                <p className='py-6'>These are the technologies I've Hands-on</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
{
    techs.map(({id,src,title,style}) => (
        <div
        key ={id}
         className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
    ))
}

               
            </div>
        </div>
    </div>
  );
};

export default Skills