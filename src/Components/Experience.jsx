import React from 'react'
import Container from './Ui/Container'

const Experience = () => {
  return (
    <section className='mt-21.25 mb-25'>
        <Container>
            <div className='w-2/4'>
                <h2 className='font-Lato font-semibold text-[45px] leading-13.5 text-primary-black pr-50 mb-7.25'>Experience the power of Corewave</h2>
                <p className='font-Lato font-normal text-base leading-6 text-primary-gray pr-28'>Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>
                <button className='font-Lato font-semibold text-base text-primary-green px-6.25 py-[14.5px] bg-banner-mix rounded-[5px] mt-[59.5px]'>Learn More</button>
            </div>
            <div className='w-2/4'>
                <img src="" alt="" />
            </div>
        </Container>
    </section>
  )
}

export default Experience