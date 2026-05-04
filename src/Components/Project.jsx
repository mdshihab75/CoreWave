import React, { useState } from 'react'
import Container from './Ui/Container'
import projectimage1 from '../assets/images/project-1.png'
import projectimage2 from '../assets/images/project-2.png'
import projectimage3 from '../assets/images/project-3.png'

const Project = () => {
  const [active, setActive] = useState('');

  const items = [
    "Mobile App",
    "Web Development",
    "UI/UX Design",
    "Graphic Design",
    "Motion Graphic",
  ];

  return (
    <section className='mt-22.75'>
      <Container>
        <h2 className='font-Lato font-semibold text-[45px] leading-13.5 text-primary-black text-center'>Our Latest Project</h2>
        <ul className='flex gap-18.25 items-center justify-center mt-8'>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`font-Lato font-medium text-base text-sixth-color hover:text-primary-green cursor-pointer transition duration-300 ${active === index
                  ? "text-primary-green"
                  : "text-sixth-color"
                }`}
            >
              {item}
            </li>
          ))}
        </ul>

        
        <div className='relative w-223 h-1 bg-eighth-color mx-auto mt-5'>
          <div
            className='absolute h-1 bg-primary-green transition-all duration-300'
            style={{
              width: "154px",
              left: `${active * 180}px`,
            }}
          />
        </div>

        {/*<div className='relative w-223 h-1 bg-eighth-color mx-auto mt-5.25'>
          <div className="after:content-[''] after:absolute after:left-90 after:bottom-0 after:h-1 after:w-0 hover:after:w-38.5 after:bg-primary-green after:duration-300 after:transition-all cursor-pointer">
          
        </div>
        </div>*/}

        <div className='flex gap-6 mt-13.25'>
          <div>
            <img className='rounded-[15px] shadow:sm' src={projectimage1} alt="project-1" />
            <h3 className='font-Lato font-semibold text-[22px] leading-7.5 text-primary-black text-center mt-5'>Portfolio Landing Page</h3>
            <p className='font-Lato font-normal text-base leading-5.5 text-sixth-color text-center mt-1.75 px-10'>Web development is the art of creating engaging and visually appealing websites </p>
          </div>
          <div>
            <img className='rounded-[15px] shadow:sm' src={projectimage2} alt="project-2" />
            <h4 className='font-Lato font-semibold text-[22px] leading-7.5 text-primary-black text-center mt-5'>Plant Landing Page</h4>
            <p className='font-Lato font-normal text-base leading-5.5 text-sixth-color text-center mt-1.75 px-10'>Web development is the art of creating engaging and visually appealing websites </p>
          </div>
          <div>
            <img className='rounded-[15px] shadow:sm' src={projectimage3} alt="project-3" />
            <h5 className='font-Lato font-semibold text-[22px] leading-7.5 text-primary-black text-center mt-5'>Real Estate Landing Page</h5>
            <p className='font-Lato font-normal text-base leading-5.5 text-sixth-color text-center mt-1.75 px-10'>Web development is the art of creating engaging and visually appealing websites </p>
          </div>
        </div>
        <div className='text-center'>
          <button className='font-Lato font-semibold text-base text-primary-white bg-primary-green px-6.25 py-[14.5px] rounded-[5px] mt-[46.5px]'>View All Projects</button>
        </div>

      </Container>
    </section>
  )
}

export default Project