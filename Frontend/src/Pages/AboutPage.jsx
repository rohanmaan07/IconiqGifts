import React from 'react';
import { FiAward, FiHeart, FiTrendingUp, FiArrowDown } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <>

      <div className="bg-gray-50 text-gray-800 font-sans">
        <section className="h-screen min-h-[700px] relative flex flex-col items-center justify-center text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1671749999622-4087a86868cc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // A picture of a team collaborating or a beautifully packaged gift
            alt="Iconiq Gifts Team"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center p-4">
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 fade-in-up font-caveat"
              style={{ animationDelay: '0.2s' }}
            >
              Beyond the Giftbox.
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              We believe gifting is an art form—a powerful way to forge genuine, lasting connections.
            </p>
          </div>
          <div className="absolute bottom-10 z-20 text-white fade-in-up" style={{ animationDelay: '0.6s' }}>
            <FiArrowDown className="w-8 h-8 animate-bounce" />
          </div>
        </section>

        {/* Section 2: Our Mission (Overlapping) */}
        <section className="bg-white py-20 md:py-28 px-6 relative z-30 -mt-20 rounded-t-3xl">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" 
                alt="Our Mission"
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>
            {/* Content on the right */}
            <div className="md:pl-8"> {/* Added padding for spacing */}
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our Mission: To Transform Gifting into an Experience
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                In a world of automated messages and impersonal gestures, we set out to make corporate gifting matter again. Iconiq Gifts isn't just about products; it's about delivering carefully curated experiences that make people feel seen, valued, and appreciated. We handle every detail with passion, so your gesture of gratitude resonates long after the box is opened.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Core Values */}
        <section className="bg-gray-50 py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Drives Us</h2>
              <p className="mt-4 text-lg text-gray-600">Our values are the foundation of every gift we curate.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="group text-center p-8 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-lg">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-teal-500">
                  <FiAward className="w-10 h-10 text-teal-600 transition-all duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence in Curation</h3>
                <p className="text-gray-600">We source only the finest, most unique products that tell a story and reflect quality.</p>
              </div>
              <div className="group text-center p-8 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-lg">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-red-500">
                  <FiHeart className="w-10 h-10 text-red-600 transition-all duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Genuine Connection</h3>
                <p className="text-gray-600">Our goal is to help you build relationships, not just send gifts. Every detail is personalized.</p>
              </div>
              <div className="group text-center p-8 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-lg">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-indigo-500">
                  <FiTrendingUp className="w-10 h-10 text-indigo-600 transition-all duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
                <p className="text-gray-600">From initial consultation to final delivery, we provide a flawless, stress-free process for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Journey Timeline */}
        <section className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
                    <p className="mt-4 text-lg text-gray-600">How a small idea grew into a passion for gifting.</p>
                </div>
                {/* Timeline */}
                <div className="relative">
                    {/* The vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-teal-200"></div>

                    {/* Timeline Item 1 */}
                    <div className="relative mb-12">
                        <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
                        <div className="md:ml-auto md:w-5/12 p-6 bg-gray-50 rounded-lg shadow-md md:pl-12 text-right">
                            <p className="text-teal-600 font-semibold mb-1">2021 - The Spark</p>
                            <h3 className="text-xl font-bold mb-2">The Idea is Born</h3>
                            <p className="text-gray-600">Frustrated by generic corporate gifts, our founder sketches out a new vision on a napkin.</p>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative mb-12">
                        <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
                        <div className="md:w-5/12 p-6 bg-gray-50 rounded-lg shadow-md md:pr-12">
                            <p className="text-teal-600 font-semibold mb-1">2022 - First Client</p>
                            <h3 className="text-xl font-bold mb-2">Iconiq Gifts Launches</h3>
                            <p className="text-gray-600">We partner with our first client to deliver 100 welcome kits for their new hires.</p>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
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


        {/* Section 5: CTA */}
        <section className=" py-20 md:py-28 text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Let's Create Something Unforgettable</h2>
            <p className="mb-8 text-lg text-black max-w-2xl mx-auto">
              Ready to elevate your gifting strategy? We're here to help.
            </p>
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