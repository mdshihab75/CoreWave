import React, { useState } from "react";
import clint1 from "../assets/images/clint1.png";
import clint2 from "../assets/images/clint2.png";
import clint3 from "../assets/images/clint3.png";
import Container from "./Ui/Container";

const testimonials = [
  {
    id: 1,
    img: clint1,
    title: "Excellent Team!",
    name: "Farhan Rio",
    role: "Happy Seller",
  },
  {
    id: 2,
    img: clint2,
    title: "Great Service",
    name: "Alizabeth Nancy",
    role: "Happy Seller",
  },
  {
    id: 3,
    img: clint3,
    title: "The Best Agency!",
    name: "Jenny Wilson",
    role: "Happy Seller",
  },
];

const Review = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-23.5 bg-primary-white">
      <Container>
        <h2 className="font-Lato font-semibold text-[45px] leading-13.5 text-center mb-12">
          What Our Clients Saying
        </h2>

        {/* Slider Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-330 px-4"
              >
                <div className="bg-primary-white rounded-[15px] p-8 shadow-xl text-center">
                  <div className="relative flex justify-center">
                    <img src={item.img} alt={item.name} className="w-37 h-37 rounded-full object-cover"/>

                    <span className="absolute left-25 top-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="21.5" cy="21.5" r="21.5" fill="#343434" /> <g clip-path="url(#clip0_38_232)"> <path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="white" /> <path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="white" /> </g> <defs> <clipPath id="clip0_38_232"> <rect width="21.9216" height="18.0531" fill="white" transform="translate(10.1176 12.647)" /> </clipPath> </defs> </svg>
                    </span>
                  </div>

                  <h3 className="mt-4 font-Lato font-semibold text-[24px] leading-7.5 text-primary-black">
                    {item.title}
                  </h3>

                  <div className="text-yellow-color text-3xl mt-1">
                    ★★★★★
                  </div>

                  <p className="font-Lato font-normal text-base leading-6 text-sixth-color px-5 mt-5">
                    The customer service team at this company was very responsive
                    and helpful when I had questions about their products.
                  </p>

                  <h4 className=" font-Lato font-semibold text-[18px] leading-7.5 text-primary-black mt-3.75">{item.name}</h4>
                  <p className="font-Lato font-normal text-sm leading-6 text-sixth-color">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-8 bg-primary-green"
                  : "w-4 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Review;