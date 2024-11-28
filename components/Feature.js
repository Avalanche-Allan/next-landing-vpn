import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  {
    title: "Instant Metadata Extraction",
    description: "Connect once, extract everything—Flows, Apex Classes, and Triggers with a single click.",
    icon: "/assets/Icon/instant.svg"
  },
  {
    title: "AI-Powered Understanding",
    description: "Turn complex code into clear documentation. Our AI explains what each automation does, its triggers, and affected objects.",
    icon: "/assets/Icon/ai.svg"
  },
  {
    title: "Notion Integration",
    description: "Searchable, organized documentation that lives where your team already works.",
    icon: "/assets/Icon/notion.svg"
  }
];

const Feature = () => {
  const scrollAnimation = {
    viewport: { once: true },
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-[var(--mountain-snow)] w-full py-14" id="feature">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
          <ScrollAnimationWrapper className="flex flex-col justify-center">
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl lg:text-3xl font-medium leading-relaxed text-[var(--sherpa-blue)] font-inter"
            >
              How It Works
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="my-4 text-[var(--sherpa-blue)] font-sourceSansPro"
            >
              Get started in four simple steps:
            </motion.p>
            <motion.ul
              variants={scrollAnimation}
              className="text-[var(--sherpa-blue)] self-start list-decimal pl-5 font-sourceSansPro"
            >
              <li className="mb-2">Connect your Salesforce org</li>
              <li className="mb-2">Select metadata types to document</li>
              <li className="mb-2">Choose your Notion workspace</li>
              <li className="mb-2">Let AI do the heavy lifting</li>
            </motion.ul>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex flex-col justify-center">
            <motion.div variants={scrollAnimation} className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-medium mb-2 text-[var(--sherpa-blue)] font-inter">
                    {feature.title}
                  </h4>
                  <p className="text-[var(--sherpa-blue)] font-sourceSansPro">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Feature;
