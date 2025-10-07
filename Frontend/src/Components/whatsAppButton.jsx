import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919711657307"; 
  const message = "Hello! I would like to inquire about your corporate gifting services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-50"
    >
      <span className="px-4 py-3 text-teal-700 font-medium">
        Hey, Let's Chat
      </span>

      <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
        <FaWhatsapp size={24} className="text-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
