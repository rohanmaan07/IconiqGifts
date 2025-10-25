import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 font-sans">
        <section className="h-[70vh] sm:h-screen min-h-[500px] relative flex flex-col items-center justify-center text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1671749999622-4087a86868cc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Iconiq Gifts Team"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center p-4">
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 fade-in-up font-caveat"
              style={{ animationDelay: '0.2s' }}
            >
              We believe gratitude builds growth..
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              At Iconiq Gifts, we help India’s most forward-thinking companies transform corporate gifting into a year-round experience of appreciation, wellness, and brand love.
            </p>
          </div>
          <div className="absolute bottom-10 z-20 text-white fade-in-up" style={{ animationDelay: '0.6s' }}>
            <FiArrowDown className="w-8 h-8 animate-bounce" />
          </div>
        </section>

        <section className="bg-white py-20 md:py-28 px-6 relative z-30 -mt-20 rounded-t-3xl">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070"
                alt="Our Mission"
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>
            <div className="md:pl-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our Mission: To Transform Gifting into an Experience
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                In a world of automated messages and impersonal gestures, we set out to make corporate gifting matter again. Iconiq Gifts isn't just about products; it's about delivering carefully curated experiences that make people feel seen, valued, and appreciated. We handle every detail with passion, so your gesture of gratitude resonates long after the box is opened.
              </p>
            </div>
          </div>
        </section>

        {/* OUR PHILOSOPHY SECTION */}
        <section className="bg-gray-50 py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Philosophy</h2>
            <p className="mt-4 text-lg text-gray-600"> The heart behind every design and gesture..</p>

            <div className="overflow-x-auto mt-12">
              <table className="min-w-full border border-gray-200 rounded-xl shadow-md bg-white overflow-hidden">
                <thead className="bg-teal-600 text-white ">
                  <tr>
                    <th className="py-4 px-6 text-center text-lg font-semibold  ">Principle</th>
                    <th className="py-4 px-6 text-center text-lg font-semibold">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-teal-50 transition duration-300">
                    <td className="py-4 px-6 font-medium text-gray-800">Emotional Precision</td>
                    <td className="py-4 px-6 text-gray-600">Every design and product evokes purpose.</td>
                  </tr>
                  <tr className="hover:bg-teal-50 transition duration-300">
                    <td className="py-4 px-6 font-medium text-gray-800">Scalable Simplicity</td>
                    <td className="py-4 px-6 text-gray-600">We keep gifting logistics effortless.</td>
                  </tr>
                  <tr className="hover:bg-teal-50 transition duration-300">
                    <td className="py-4 px-6 font-medium text-gray-800">Sustainable Respect</td>
                    <td className="py-4 px-6 text-gray-600">Every gift respects the planet and its people.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
              <p className="mt-4 text-lg text-gray-600">How a small idea grew into a passion for gifting.</p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-teal-200"></div>

              <div className="relative mb-12">
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
                <div className="md:ml-auto md:w-5/12 p-6 bg-gray-50 rounded-lg shadow-md md:pl-12 text-right">
                  <p className="text-teal-600 font-semibold mb-1">2021 - The Spark</p>
                  <h3 className="text-xl font-bold mb-2">The Idea is Born</h3>
                  <p className="text-gray-600">Frustrated by generic corporate gifts, our founder sketches out a new vision on a napkin.</p>
                </div>
              </div>

              <div className="relative mb-12">
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
                <div className="md:w-5/12 p-6 bg-gray-50 rounded-lg shadow-md md:pr-12">
                  <p className="text-teal-600 font-semibold mb-1">2022 - First Client</p>
                  <h3 className="text-xl font-bold mb-2">Iconiq Gifts Launches</h3>
                  <p className="text-gray-600">We partner with our first client to deliver 100 welcome kits for their new hires.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
                <div className="md:ml-auto md:w-5/12 p-6 bg-gray-50 rounded-lg shadow-md md:pl-12 text-right">
                  <p className="text-teal-600 font-semibold mb-1">Today - Growing Strong</p>
                  <h3 className="text-xl font-bold mb-2">Expanding Our Reach</h3>
                  <p className="text-gray-600">Serving clients nationwide and continuously innovating our curated collections.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black font-caveat">
              Because simple things done right, last.
            </h2>
            <p className="mb-8 text-lg text-black max-w-2xl mx-auto">Let’s Start Your Gifting Journey</p>
            <a
              href="/contact"
              className="bg-white text-teal-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-transform duration-300 inline-block transform hover:scale-105 shadow-lg"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
