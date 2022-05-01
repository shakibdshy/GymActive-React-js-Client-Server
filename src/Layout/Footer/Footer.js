import React from "react";
import logo from "../../logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIcon = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/",
      icon: <FaTwitter />,
    },
    {
      name: "Github",
      href: "https://www.github.com/",
      icon: <FaGithub />,
    },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "/inventory" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className='pt-20 pb-12 bg-black-800'>
      <div className='px-6 max-w-7xl mx-auto'>
        <div className='flex flex-wrap items-center justify-between gap-8'>
          <div className='max-w-sm'>
            <img className='w-16 h-16 mb-6' src={logo} alt='Footer Logo' />
            <p className='text-white font-md font-open'>
              Making the World a better Place through constructing elegant
              hierarchy
            </p>
            <ul className='flex gap-5 mt-8'>
              {socialIcon.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className='text-white hover:text-gray-300 text-xl'>
                      {item.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex-auto'>
            <h2 className='mb-4 font-bold text-2xl text-white uppercase'>
              Solutions
            </h2>
            <ul>
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className='mt-2 block font-open text-white hover:text-red-500 text-lg transition-all ease-in-out duration-300'>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex-auto'>
            <h2 className='mb-4 font-bold text-2xl text-white uppercase'>
              Support
            </h2>
            <ul>
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className='mt-2 block font-open text-white hover:text-red-500 text-lg transition-all ease-in-out duration-300'>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex-auto'>
            <h2 className='mb-4 font-bold text-2xl text-white uppercase'>
              Company
            </h2>
            <ul>
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className='mt-2 block font-open text-white hover:text-red-500 text-lg transition-all ease-in-out duration-300'>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-12 pt-12 text-center border-t border-solid border-slate-500 text-white'>
        <p>
          Copyright{" "}
          <Link to='/' className='hover:text-red-500'>
            GymActive
          </Link>{" "}
          @{new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
