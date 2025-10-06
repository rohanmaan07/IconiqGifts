import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im"; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    reason: "Bulk Order Enquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "Contact Form Submission",
        }),
      });
      const result = await response.json();
      if (result.success) {
        alert("Thank you for your message! We'll be in touch soon.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
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
    <div className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or a project in mind? We’d love to hear from you.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t border-gray-200 pt-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-6">
              Fill up the form and our team will get back to you within 24
              hours. <br/>Whether you’re planning a bulk order or need help choosing
              the perfect gift, we’re here to assist you.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+919582878187"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-all duration-200 transform hover:translate-x-1"
              >
                <FiPhone className="h-5 w-5 mr-3 text-teal-600" />
                <span>+91 95828 78187</span>
              </a>

              <a
                href="mailto:yashsharma46655@gmail.com"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-all duration-200 transform hover:translate-x-1"
              >
                <FiMail className="h-5 w-5 mr-3 text-teal-600" />
                <span>yashsharma46655@gmail.com</span>
              </a>

              <div className="flex items-start text-gray-700 transition-all duration-200 transform hover:translate-x-1">
                <FiMapPin className="h-5 w-5 mr-3 text-teal-600 mt-1" />
                <span>
                  Level 2, 297/9, Old Railway Rd,
                  <br />
                  Near Dena Bank, Shivpuri,
                  <br />
                  Sector 7, Gurugram, Haryana
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center gap-2 font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${
                    loading
                      ? "bg-teal-500 cursor-not-allowed text-white"
                      : "bg-teal-600 hover:bg-teal-700 text-white"
                  }`}
                >
                  {loading && (
                    <ImSpinner2 className="animate-spin h-5 w-5 text-white" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
