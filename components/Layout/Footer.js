import React from "react";
import ButtonPrimary from '../misc/ButtonPrimary';

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-4">Transform your Salesforce documentation today.</h3>
          <div className="flex gap-4 mb-8">
            <ButtonPrimary>Start Free Trial</ButtonPrimary>
            <ButtonPrimary>Schedule Demo</ButtonPrimary>
          </div>
          <p className="text-gray-400"> 2023 - DocSherpa.ai</p>
        </div>
        <div className="row-span-2 sm:col-span-8 sm:col-start-5 sm:col-end-13 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <a href="#features" className="text-black-600 mb-4">Features</a>
            <a href="#pricing" className="text-black-600 mb-4">Pricing</a>
          </div>
          <div className="flex flex-col">
            <a href="#faq" className="text-black-600 mb-4">FAQs</a>
            <a href="/terms" className="text-black-600 mb-4">Terms</a>
          </div>
          <div className="flex flex-col">
            <a href="/privacy" className="text-black-600 mb-4">Privacy</a>
            <a href="/contact" className="text-black-600 mb-4">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
