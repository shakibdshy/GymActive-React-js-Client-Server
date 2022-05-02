import React from "react";
import blogImage from "../../Images/Testimonial/01.jpg";
import blogImage2 from "../../Images/Testimonial/02.jpg";
import blogImage3 from "../../Images/Testimonial/03.jpg";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonial = () => {
  const items = [
    {
      title: "Reid E Butt",
      img: blogImage,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      title: "Parker Jimenez",
      img: blogImage2,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      title: "Sylvia H Green",
      img: blogImage3,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
  ];
  return (
    <section className='pt-20 lg:pt-[120px] pb-10 lg:pb-[120px] bg-[#030207]'>
      <div className='mb-12 container mx-auto text-center'>
        <span className='mb-2 font-bold text-xl text-center text-red-500 block uppercase'>
          Testimonials
        </span>
        <h2 className='text-4xl text-white uppercase font-bold'>
          What Client Say's
        </h2>
      </div>
      <div className='px-8 container max-w-6xl mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          {items.map((item, index) => {
            return (
              <div key={index} className='w-full md:w-1/2 xl:w-1/3 px-4 mt-8'>
                <div>
                  <div className='mb-8 py-10 px-8 pb-4 bg-[#0c0c0c] rounded-xl'>
                    <p className='font-open text-white'>{item.description}</p>
                    <FaQuoteRight className='text-red-500 text-6xl ml-auto' />
                  </div>
                    <div className="flex items-center gap-4">
                        <img src={item.img} alt='' className='p-1 w-20 h-20 rounded-full border-2 border-dashed border-red-500' />
                        <div className="flex-1">
                            <h3 className="font-bold text-white text-xl uppercase">{item.title}</h3>
                            <p className="text-sm text-white font-open">CEO, Company</p>
                            <ul className='mt-3 flex gap-2 text-yellow-500 text-lg'>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
