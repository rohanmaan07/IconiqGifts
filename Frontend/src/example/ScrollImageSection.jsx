import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollImageSection = () => {
  const containerRef = useRef(null);
  const images = [
    "/Banners/5.png",
    "/Banners/6.png",
    "/Banners/7.png",
    "/Banners/8.png",
  ];

  const totalImages = images.length;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalImages - 1) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      style={{ height: `${(totalImages - 1) * 100 + 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full"
          transition={{ ease: "linear" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="w-screen h-screen flex-shrink-0 relative"
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold drop-shadow-lg">
                  Slide {i + 1}
                </h1>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollImageSection;
