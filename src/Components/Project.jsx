import React from 'react'
import Container from './Ui/Container'
import projectimage1 from '../assets/images/project-1.png'
import projectimage2 from '../assets/images/project-2.png'
import projectimage3 from '../assets/images/project-3.png'

const Project = () => {
  return (
    <section className='mt-22.75'>
      <Container>
        <h2 className='font-Lato font-semibold text-[45px] leading-13.5 text-primary-black text-center'>Our Latest Project</h2>
        <ul className='flex gap-18.25 text-center justify-center mt-8.25'>
          <li className='font-Lato font-medium text-base text-sixth-color'>Mobile App</li>
          <li className='font-Lato font-medium text-base text-sixth-color'>Web Development</li>
          <li className='font-Lato font-medium text-base text-sixth-color'>UI/UX Design</li>
          <li className='font-Lato font-medium text-base text-sixth-color'>Graphic Design</li>
          <li className='font-Lato font-medium text-base text-sixth-color'>Motion Graphic</li>
        </ul>
        <div className='w-223 h-0.5 bg-eighth-color mx-auto mt-5.25'>

        </div>
        <div className='flex gap-6 mt-13.25'>
          <div>
            <img className='rounded-[15px]' src={projectimage1} alt="project-1" />
            <h3 className='font-Lato font-semibold text-[22px] leading-7.5 text-primary-black text-center mt-5'>Portfolio Landing Page</h3>
            <p className='font-Lato font-normal text-base leading-5.5 text-sixth-color text-center mt-1.75 px-10'>Web development is the art of creating engaging and visually appealing websites </p>
          </div>
          <div>
            <img className='rounded-[15px]' src={projectimage2} alt="project-2" />
            <h4 className='font-Lato font-semibold text-[22px] leading-7.5 text-primary-black text-center mt-5'>Plant Landing Page</h4>
            <p className='font-Lato font-normal text-base leading-5.5 text-sixth-color text-center mt-1.75 px-10'>Web development is the art of creating engaging and visually appealing websites </p>
          </div>
          <div>
            <img className='rounded-[15px]' src={projectimage3} alt="project-3" />
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