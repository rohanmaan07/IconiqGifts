import React from "react";
import HomeCarousel from "../Components/HomeCarousal";
import ContactPage from "./ContactPage";
import OurClients from "../Components/OurClients";
import FAQs from "../Components/FAQs";
import BlogPage from "./BlogPage";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
       <OurClients/>
      <ContactPage/>
      <FAQs/>
      <BlogPage/>
    </div>
  );
};

export default HomePage;
