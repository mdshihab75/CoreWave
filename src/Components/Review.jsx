import React from 'react'
import Container from './Ui/Container'
import clint1 from '../assets/images/clint1.png'
import clint2 from '../assets/images/clint2.png'
import clint3 from '../assets/images/clint3.png'

const Review = () => {
    const testimonials = [
  {
    id: 1,
    name: "Farhan Rio",
    role: "Happy Seller",
    title: "Excellent Team!",
    image: "/images/client1.png",
  },
  {
    id: 2,
    name: "Alizabath Nancy",
    role: "Happy Seller",
    title: "Greate Service",
    image: "/images/client2.png",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "Happy Seller",
    title: "The Best Agency!",
    image: "/images/client3.png",
  },
];
  return (
    <section className='mt-23.5'>
        <Container>
            <h2 className='font-Lato font-semibold text-[45px] leading-13.5 text-primary-black text-center mb-12'>What Our Clients Saying</h2>
            <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm p-8 text-center relative"
            >
              {/* Quote Badge */}
              <div className="absolute top-8 left-8 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xl">
                “
              </div>

              {/* Profile */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />

              {/* Content */}
              <h3 className="text-2xl font-semibold mt-5">{item.title}</h3>

              <div className="text-yellow-400 text-xl mt-2">★★★★★</div>

              <p className="text-gray-500 text-sm leading-7 mt-4">
                The customer service team at this company was very responsive
                and helpful when I had questions about their products.
              </p>

              <h4 className="font-semibold mt-6">{item.name}</h4>
              <p className="text-sm text-gray-400">{item.role}</p>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-3 mt-10">
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-8 h-3 rounded-full bg-green-500"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-green-500 rounded-[40px] px-14 py-14 flex items-center justify-between flex-col md:flex-row gap-10">
          <div>
            <h2 className="text-white text-4xl font-semibold mb-6">
              Don’t Worries, Start Your Free Trial Today!
            </h2>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 duration-300">
              Get Free Trial
            </button>
          </div>

          <img
            src="/images/cta-girl.png"
            alt="CTA Girl"
            className="max-h-[280px] object-contain"
          />
        </div>
        </Container>
    </section>
  )
}

export default Review