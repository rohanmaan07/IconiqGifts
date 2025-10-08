import React from "react";
import HomeCarousel from "../Components/HomeCarousal";
import ContactPage from "./ContactPage";
import OurClients from "../Components/OurClients";
import FAQs from "../Components/FAQs";
import BlogPage from "./BlogPage";
import Corporate from "../Components/Corporate";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <Corporate/>
       <OurClients/>
      <ContactPage/>
      <FAQs/>
      <BlogPage/>
    </div>
  );
};

export default HomePage;
