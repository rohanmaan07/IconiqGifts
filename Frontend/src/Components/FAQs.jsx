import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: "What is Corporate Gifting?",
    answer: "Corporate gifting is the practice of giving gifts to employees, clients, or business partners as a token of appreciation, recognition, or to strengthen professional relationships."
  },
  {
    question: "Do you provide customized or personalized gifts?",
    answer: "Absolutely! We offer logo engraving, printing, or custom packaging options to ensure your brand is highlighted on every gift."
  },
  {
    question: "How can I place a bulk order?",
    answer: "We provide special pricing for bulk corporate orders. Simply contact us with your order details, and we will give you a personalized quote."
  },
  {
    question: "What is the delivery timeline?",
    answer: "Delivery timelines depend on the size of your order and customization requirements. Small orders usually take 3-5 business days, while larger or personalized orders may take 1-2 weeks. We also provide flexible scheduling for multiple delivery addresses if needed."
  },
  {
    question: "Can I customize gifts with our company logo or messages?",
    answer: "Yes! We offer a wide range of corporate gifts, including premium hampers, personalized merchandise, luxury goodies, and festive gift boxes, all of which can be customized with your company logo or messages."
  }
];


const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentVariants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    open: { height: 'auto', opacity: 1, marginTop: '16px' }
  };

  return (
    <div className="border-b border-teal-300 last:border-b-0 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-semibold text-teal-700">{question}</h3>
        <span className="text-teal-500">
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={contentVariants}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-gray-700 mt-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white text-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 relative inline-block"
        >
          Frequently Asked Questions
          <span className="block w-24 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></span>
        </motion.h2>
        
        <div className="text-left">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
