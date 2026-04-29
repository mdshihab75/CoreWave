import React from 'react'
import Container from './Ui/Container'
import BannerImage from '../assets/images/banner2.png'
import BannerImage2 from '../assets/images/banner3.png'
const Banner = () => {
    return (
        <section className='bg-banner-mix'>
            <Container>
                <div className='flex gap-35.25'>
                    <div className='w-[48%] mt-29'>
                        <h1 className='font-Lato font-light text-[60px] leading-[71.5px] text-primary-black mb-9.25'>Empower Your Team <span className='font-bold'>With CoreWave's</span></h1>
                        <h3 className='font-Lato font-normal text-xl leading-7.5 text-primary-gray pr-15 mb-16.25'>Boost Productivity and Wellness in Your Organization with CoreWave's Advanced Tools and Techniques</h3>
                        <div className='flex gap-5'>
                            <button className='font-Lato font-semibold text-base text-primary-white px-6.25 py-[14.5px] bg-primary-green rounded-[5px] cursor-pointer'>Explore More</button>
                            <img src={BannerImage} alt="banner2" />
                        </div>
                        {/*<button className='font-Lato font-semibold text-base text-primary-black px-6.25 py-[14.5px]'>Watch Video</button>
                        <img src="images/banner.png" alt="banner" />*/}
                    </div>
                    <div className='w-[50%]'>
                        <img src={BannerImage2} alt="banner3" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner