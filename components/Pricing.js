import React from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = {
    viewport: { once: true },
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-[var(--mountain-snow)] w-full py-14" id="pricing">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--sherpa-blue)] leading-normal font-inter"
          >
            Choose Your Plan
          </motion.h3>
        </ScrollAnimationWrapper>
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6 items-center justify-center max-w-4xl mx-auto">
          <ScrollAnimationWrapper className="flex justify-center w-full">
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col justify-center items-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow w-full max-w-md"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-2xl font-medium text-[var(--sherpa-blue)] mb-4 font-inter">One-Time Documentation</h3>
              <p className="text-[var(--sherpa-blue)] text-3xl font-bold mb-6 font-inter">$349.99</p>
              <ul className="text-left mb-8 font-sourceSansPro">
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Full metadata extraction
                </li>
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  AI-powered documentation
                </li>
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Notion workspace integration
                </li>
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  One-time setup
                </li>
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex justify-center w-full">
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col justify-center items-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative w-full max-w-md"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute -top-4 bg-[var(--sherpa-blue)] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-medium text-[var(--sherpa-blue)] mb-4 font-inter">Daily Sync</h3>
              <p className="text-[var(--sherpa-blue)] text-3xl font-bold mb-6 font-inter">$699.99/year</p>
              <ul className="text-left mb-8 font-sourceSansPro">
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Everything in One-Time
                </li>
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Daily metadata checks
                </li>
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Automatic updates
                </li>
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Change tracking
                </li>
                <li className="mb-3 flex items-center text-[var(--sherpa-blue)]">
                  <svg className="w-5 h-5 mr-2 text-[var(--success-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Priority support
                </li>
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
