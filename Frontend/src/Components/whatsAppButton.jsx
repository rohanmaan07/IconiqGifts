import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const whatsAppButton = () => {
  const phoneNumber = "918198989888";
  const message = "Hello! I would like to inquire about your corporate gifting services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const callLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">
      <a
        href={callLink}
        className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 md:hidden"
      >
        <span className="px-4 py-3 text-teal-700 font-medium">
          Call Us Now
        </span>
        <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
          <FaPhoneAlt size={22} className="text-white" />
        </div>
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <span className="px-4 py-3 text-teal-700 font-medium">
          Hey, Let's Chat
        </span>
        <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
          <FaWhatsapp size={24} className="text-white" />
        </div>
      </a>

    </div>
  );
};

export default whatsAppButton;