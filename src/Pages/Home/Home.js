import React from "react";
import Banner from "../../Components/Banner/Banner";
import Blog from "../Blog/Blog";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <>
      <Banner />
      <Inventory />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
