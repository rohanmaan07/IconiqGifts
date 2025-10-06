import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const EnquiryFormModal = ({ onClose, type }) => {
  const [formData, setFormData] = useState({
    name: "", number: "", email: "", quantity: "", company: "",
  });
  const [loading, setLoading] = useState(false);

  const config = {
    catalogue: { title: "Download Catalogue", buttonText: "Download Now" },
    callback: { title: "Request a Call Back", buttonText: "Request Call" },
  };
  const modalContent = config[type];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Thank you for your enquiry!");
        onClose();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex justify-end bg-opacity-60">
      <div onClick={(e) => e.stopPropagation()} className="relative h-full w-full max-w-md bg-white p-8 shadow-xl animate-slide-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <FiX size={24} />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{modalContent.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Contact Person" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
          <input type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="Contact Number" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Contact Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
          {type === 'catalogue' && (
            <>
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </>
          )}
          <button type="submit" disabled={loading} className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-md hover:bg-teal-700 flex justify-center items-center">
            {loading ? (
              <svg className="w-5 h-5 mr-2 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            ) : null}
            {loading ? "Processing..." : modalContent.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryFormModal;
