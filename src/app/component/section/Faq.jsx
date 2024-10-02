import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return items within 30 days of purchase for a full refund.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order through the link provided in your confirmation email.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping to selected countries.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="containers flex flex-col gap-10">
      <h2 className="font-semibold text-bluishPurple text-2xl text-center md:text-center mx-auto">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div key={index} className=" bg-[#FAF8FF]">
            <button
              className={`flex flex-row gap-4 justify-between w-full p-4 
              ${activeIndex === index ? "text-bluishPurple" : "text-black"}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base font-medium">{faq.question}</h3>
              <span className="ml-auto">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-950">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
