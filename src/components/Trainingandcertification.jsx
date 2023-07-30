
import React from 'react'
import web from "../assets/manya_web_development_certificate.jpg";
import python from "../assets/manya_python_certificate.jpg";
import tech from "../assets/Manya Sharma (1).jpg";
import foundation from "../assets/Manya Sharma.jpg";
import dsa from "../assets/manya_dsa_certificate.jpg";

const Trainingandcertification = () => {
    const techs =[{
        id:1,
        src:web,
        title: 'Web_Development(UDEMY)',
        style: 'shadow-orange-500',
        description:'Front-End +Back-End hands-on and practice',
        
    },
    {
        id:2,
        src:python,
        title: 'Python(UDEMY)',
        style: 'shadow-blue-400',
         description:'Implemented python ,its project and applications'
    },
    {
        id:3,
        src:tech,
        title: 'TECHNOLOGY ENHANCEMENT',
        style: 'shadow-yellow-500',
        description:'Developed technology related to the system and software'
    },
    {
        id:4,
        src:foundation,
        title: 'Foundation',
        style: 'shadow-blue-600',
        description:'Learnt basics of C language my mentors',
        
    },
    {
        id:5,
        src:dsa,
        title: 'Data_Structures AND Algorithms(UDEMY)',
        style: 'shadow-pink-500',
        description:'Implemented Bacis of DSA using C++ '
    },
   /* {
        id:6,
        src:fullstackdeveloper,
        title: 'FullStackDevelopment',
        style: 'shadow-white'
    },*/
    
]
  return (
    <div name='c' className='bg-gradient-to-b from-black via-gray-600 to-slate-400 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Training & Certifications
                </p>
                <p className='py-6'>These are some Training and certifications I've earned</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
{
    techs.map(({id,src,title,style,description}) => (
        <div
        key ={id}
         className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-40  mx-auto'/>
                    <p className='mt-4 underline'>{title}</p>
                    <p className='mt-4'>{(description)}</p>
                   
                </div>
    ))
}

               
            </div>
        </div>
    </div>
  );
};

export default Trainingandcertification;