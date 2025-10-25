import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Solutions() {
  return (
    <div className="bg-white font-sans text-gray-900">
      <section
        className="relative w-full h-[70vh] sm:min-h-[100vh] flex items-center justify-center text-center px-6 sm:px-10 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576920624222-d6903db5a57d?auto=format&fit=crop&w=1170&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-caveat font-bold text-white drop-shadow-md">
            Gifting made simple, scalable, and smart.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-100">
            From curated hampers to fully-managed merchandise portals —
            everything is designed to grow with your business.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-teal-600 hover:text-white transition duration-300"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Your company’s very own merch store — managed by us.
            </h2>
            <p className="text-lg text-gray-600 italic">
              <span className="font-semibold text-gray-700 not-italic">
                Pain Point:
              </span>{" "}
              No more clueless procurement, deadstock, or lost deliveries.
            </p>
            <ul className="mt-8 space-y-4 text-gray-700">
              <li className="flex items-start">
                <FaCheckCircle className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
                <span>
                  <span className="font-semibold">Private Catalog:</span> We
                  create a private catalog for your brand where employees order
                  approved merch directly.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
                <span>
                  <span className="font-semibold">Full Management:</span> We
                  handle warehousing, quality checks, packaging, and delivery.
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 ml-16 lg:mt-10 inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
            >
              Schedule a Demo
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1635166304779-8ebcfe8e57bd?auto=format&fit=crop&q=80&w=1170"
              alt="Branded merchandise like t-shirts and mugs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6 py-10 sm:py-14">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl shadow-2xl overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1734779203587-3cac80ff3a8c?auto=format&fit=crop&q=80&w=1170"
                alt="Gifting automation flow"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                Automate joy. Never miss a special moment again.
              </h2>
              <p className="text-lg text-gray-600">
                We map your HR and CRM milestones to automated gifting campaigns.
                Employees or clients receive a digital gift link — they pick
                their size, confirm their address, and your brand shows up right
                on time.
              </p>
              <div className="mt-6 bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-teal-800">
                  Save 70% admin time. Increase brand recall 3x.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Premium gifts designed to say thank you — beautifully.
            </h2>
            <p className="text-lg text-gray-600">
              Curate high-end, Indian-made gourmet and wellness sets featuring
              Araku Coffee, Kashmiri almonds, bamboo desk organizers, and
              handwritten notes — each packed in custom rigid boxes.
            </p>
            <Link
              to="/hampers"
              className="mt-10 inline-block border-2 border-teal-600 text-teal-600 font-semibold px-8 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300"
            >
              Explore Seasonal Hampers
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1587565148101-1749a3b5d692?auto=format&fit=crop&q=80&w=1170"
              alt="Luxury corporate gift hamper"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-10 sm:py-14">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300 order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1647221598272-9aa015392c81?auto=format&fit=crop&q=80&w=1332"
                alt="Wellness and e-gifting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                E-vouchers and wellness boxes that surprise and sustain.
              </h2>
              <p className="text-lg text-gray-600">
                Offer sleek digital gift cards or recurring wellness hampers for
                your staff’s monthly joy. Easiest logistics, maximum happiness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
