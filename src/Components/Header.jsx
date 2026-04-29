import React from 'react'
import Logo from '../../public/images/logo.png'
import Container from './Ui/Container'
const Header = () => {
    return (
        <section className='pt-6.5 pb-6.5 bg-banner-mix '>
            <Container>
                <div className='flex items-center'>
                    <img src="images/logo.png" alt="logo" />
                    <div className='ml-104'>
                        <ul className='flex gap-11.25'>
                            <li className='font-Lato font-medium text-base text-primary-black hover:text-primary-green cursor-pointer'>
                                Home</li>
                            <li className='font-Lato font-medium text-base text-primary-black hover:text-primary-green cursor-pointer'>
                                About</li>
                            <li className='font-Lato font-medium text-base text-primary-black hover:text-primary-green cursor-pointer'>
                                Portfolio</li>
                            <li className='font-Lato font-medium text-base text-primary-black hover:text-primary-green cursor-pointer'>
                                Services</li>
                            <li className='font-Lato font-medium text-base text-primary-black hover:text-primary-green cursor-pointer'>
                                Blog</li>
                            <li className='font-Lato font-medium text-base text-primary-black hover:text-primary-green cursor-pointer'>
                                Testimonial</li>
                        </ul>
                    </div>
                    <button className='font-Lato font-semibold text-base text-primary-white ml-41.75 bg-primary-green px-6.25 py-[14.5px] rounded-[5px]'>Register</button>
                </div>
            </Container>
        </section>
    )
}

export default Header