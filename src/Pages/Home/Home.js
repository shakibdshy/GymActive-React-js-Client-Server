import React from "react";
import Banner from "../../Components/Banner/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Inventory from "../Inventory/Inventory";
import BlogComponent from "../../Components/BlogComponent/BlogComponent";

const Home = () => {
  return (
    <>
      <Banner />
      <Inventory />
      <Testimonial />
      <BlogComponent />
    </>
  );
};

export default Home;
