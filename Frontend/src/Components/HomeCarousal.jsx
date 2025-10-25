import React, { useState, useEffect } from "react";
import { carouselData } from "../Data/CarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Loader from "../Pages/Loader";
import { Link } from "react-router-dom";

function HomeCarousel() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const items = carouselData.map((item) => (
    <div
      className="w-full h-[550px] sm:h-[600px] md:h-[600px]"
      key={item.image}
    >
      <img
        className="w-full h-full object-cover"
        src={item.image}
        alt="Corporate gifting background"
        onLoad={() => setLoading(false)}
      />
    </div>
  ));

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative w-full h-[550px] sm:h-[600px] md:h-[600px]">
      {/* Carousel */}
      <div className="absolute top-0 left-0 w-full h-full">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          autoPlay
          autoPlayInterval={3000}
          infinite
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Text Layer */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-white px-6 sm:px-10 md:px-20">
        <h1
          className="font-caveat font-bold text-4xl sm:text-6xl  leading-tight"
        >
          Gifts that mean business...
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl text-gray-100">
          Corporate gifting, personalized with purpose. From premium apparel to
          intelligent gifting automation, we make meaningful moments effortless
          for modern brands.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 sm:px-8 sm:py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md border border-gray-900 hover:bg-teal-600 hover:text-white transition duration-300 text-center"
          >
            Request Consultation
          </Link>

          <Link
            to="/solutions"
            className="px-6 py-3 sm:px-8 sm:py-3 bg-teal-600 text-white font-semibold rounded-lg border border-gray-900 hover:bg-white hover:text-black transition duration-300 text-center"
          >
            Explore Our Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
