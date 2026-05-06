import React from 'react'
import Container from './Ui/Container'
import Trialwomen from '../assets/images/trialimage.png'
const Trial = () => {
  return (
    <section className='mt-25   bg-primary-green'>
        <Container>
            <div className='flex gap-19 '>
                <div>
                    <h2 className='font-Lato font-semibold text-[45px] leading-13.5 text-primary-white mt-21.5'>Don’t worries, start your free trial today!</h2>
            <button className='font-Lato font-semibold text-base text-primary-white mt-[52.5px] bg-secndry-black px-6.25 py-[14.5px] rounded-[5px] mb-21.5 cursor-pointer'>Get Free Trial</button>

                </div>
            <div>
                <img src={Trialwomen} alt="trailimage" />
            </div>
            </div>
        </Container>
    </section>
  )
}

export default Trial