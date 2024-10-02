import { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    { question: "What is your return policy?", answer: "You can return items within 30 days of purchase for a full refund." },
    { question: "How do I track my order?", answer: "You can track your order through the link provided in your confirmation email." },
    { question: "Do you ship internationally?", answer: "Yes, we offer international shipping to selected countries." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-[1200px] mb-[120px] mx-auto w-[80%] max-2xl:w-[846px] 2xl:h-[392px] 2xl:mt-[850px] 2xl:gap-[28px] xl:mt-[1100px] xl:mb-[50px] xl:h-[392px] xl:gap-[28px] lg:mt-[800px] lg:mb-[130px] lg:h-[350px] lg:gap-[20px] md:mt-[1100px] max-w-[686px] max-md:max-w-[334px] max-md:mt-[650px] max-md:mb-[50px]">
      <h2 className="text-center text-bluishPurple text-3xl font-bold mb-10 max-md:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-md:space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-md bg-[#FAF8FF] max-md:bg-[#FAF8FF]">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center p-4 text-lg max-md:text-sm ${
                activeIndex === index ? 'text-bluishPurple' : 'text-black'
              }`}
              style={{ backgroundColor: '#FAF8FF' }} // Added background color to the button
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-[#FAF8FF] text-acierLight max-md:text-neutral-600"> {/* Updated background color */}
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
