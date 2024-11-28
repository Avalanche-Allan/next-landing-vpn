import React, { useState } from 'react';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-black-600">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`mt-2 text-black-500 transition-all duration-200 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What is DocSherpa.ai?",
      answer: "DocSherpa.ai is an AI-powered documentation tool that automatically transforms your Salesforce metadata into clear, searchable documentation in Notion. It helps teams maintain up-to-date documentation without manual effort."
    },
    {
      question: "How does the One-Time Documentation plan work?",
      answer: "The One-Time Documentation plan provides a comprehensive snapshot of your Salesforce metadata, converting it into well-organized documentation in Notion. This includes flows, apex code, and other metadata components, delivered as a one-time service."
    },
    {
      question: "What's included in the Daily Sync plan?",
      answer: "The Daily Sync plan includes everything in the One-Time Documentation plan, plus daily automated checks for metadata changes, automatic documentation updates, change tracking, and priority support to ensure your documentation stays current."
    },
    {
      question: "How long does it take to set up?",
      answer: "Setup typically takes less than 2 hours. Once configured, DocSherpa.ai can transform your complex metadata into clear, searchable documentation in Notion almost immediately."
    },
    {
      question: "Can I customize the documentation format?",
      answer: "Yes, DocSherpa.ai integrates with your existing Notion workspace and can be customized to match your team's documentation preferences and structure."
    }
  ];

  const scrollAnimation = {
    viewport: { once: true },
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white-300 w-full py-14" id="faq">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal"
          >
            Frequently Asked Questions
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal mx-auto mb-2 mt-4 text-center"
          >
            Get answers to common questions about DocSherpa.ai
          </motion.p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="w-full flex flex-col mt-8 space-y-4"
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default FAQ;
