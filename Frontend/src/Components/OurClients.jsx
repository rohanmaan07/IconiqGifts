import React from "react";
import clients1 from "/partners/Alactic.png";
import clients2 from "/partners/God.png"; 
import clients3 from "/partners/Reach.png";
import clients4 from "/partners/Tata.avif";
import clients5 from "/partners/Infosys.png";
import clients6 from "/partners/krisumi.png";
import clients7 from "/partners/LivFree-15.webp";
import clients8 from "/partners/m3m.webp";
import clients9 from "/partners/nextLevel.png";
import clients10 from "/partners/okkdigi.jpg";

const clientLogos = [
  clients1, clients2, clients3, clients4, clients5,
  clients6, clients7, clients8, clients9, clients10,
];

const OurClients = () => {
  const firstRow = clientLogos.slice(0, 5);
  const secondRow = clientLogos.slice(5, 10);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-4 text-center">
          Our Client Partners
        </h2>
        <span className="block w-24 h-1 bg-teal-500 mx-auto  rounded-full mb-5"></span>
        <p className="text-center text-gray-600 mb-10">
          Meet our friends who have embraced our gifting solutions
        </p>
        <div className="grid grid-cols-5 gap-6 items-center justify-items-center mb-6">
          {firstRow.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img src={logo} alt={`Client ${index + 1}`} className="h-24 w-auto object-contain" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-6 items-center justify-items-center">
          {secondRow.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img src={logo} alt={`Client ${index + 6}`} className="h-24 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
