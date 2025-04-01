import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What types of furniture do you sell?",
    answer:
      "We offer a wide range of furniture including sofas, beds, dining tables, and office furniture.",
  },
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes! We provide fast and reliable home delivery for all our furniture products.",
  },
  {
    question: "Can I customize my furniture order?",
    answer:
      "Absolutely! We offer customization options for select furniture pieces to match your style.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, and installment payments for selected purchases.",
  },
  {
    question: "Do you have a return policy?",
    answer:
      "Yes! We offer a 7-day return policy for unused items in their original condition.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer bg-white"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="md:text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
            <hr className="opacity-20 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
