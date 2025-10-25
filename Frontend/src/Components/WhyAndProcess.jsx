import React from 'react';
import {
  FiAward,
  FiArchive,
  FiTrendingUp,
  FiClipboard,
  FiBox,
  FiTruck,
} from 'react-icons/fi';

const whyIconiqData = [
  {
    icon: FiAward,
    title: 'Personalized Quality',
    description: 'Every gift is custom-crafted, not catalog-picked.',
    color: 'text-amber-500',
    bg: 'bg-amber-100/60',
  },
  {
    icon: FiArchive,
    title: 'Corporate Efficiency',
    description: 'We manage warehousing, packaging & shipping at scale.',
    color: 'text-rose-500',
    bg: 'bg-rose-100/60',
  },
  {
    icon: FiTrendingUp,
    title: 'Endless Flexibility',
    description: 'From 50 to 5,000 gifts — we grow with your needs.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-100/60',
  },
];

const processSteps = [
  {
    icon: FiClipboard,
    title: '1. Consultation',
    description: 'We define your objective, audience, and budget.',
    color: 'text-emerald-500',
    border: 'border-emerald-400',
  },
  {
    icon: FiBox,
    title: '2. Curation & Prototyping',
    description: 'We build a mock-up/sample kit for quality approval.',
    color: 'text-violet-500',
    border: 'border-violet-400',
  },
  {
    icon: FiTruck,
    title: '3. Fulfillment',
    description:
      'Leverage our GaaS platform for automated order triggering and PAN-India delivery with tracking.',
    color: 'text-cyan-500',
    border: 'border-cyan-400',
  },
];

const WhyAndProcess = () => {
  return (
    <>
      {/* WHY ICONIQ */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-caveat font-bold text-gray-900 leading-snug">
              Because every detail tells your story.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {whyIconiqData.map((item) => (
              <div
                key={item.title}
                className="text-center p-8 bg-gray-50/80 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 ${item.bg} rounded-full mx-auto mb-5 shadow-sm`}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50/70 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-caveat font-bold text-gray-900">
              From Concept to Courier in 3 Simple Steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mx-auto mb-6 border-4 ${step.border} shadow-sm`}
                >
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAndProcess;
