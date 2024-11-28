import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#ECF0F1] pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
          <h3 className="text-[#2C3E50] text-2xl font-bold mb-4 font-inter">Transform your Salesforce documentation today.</h3>
          <p className="text-[#2C3E50] opacity-70 font-sourceSansPro"> 2023 - DocSherpa.ai</p>
        </div>
        <div className="row-span-2 sm:col-span-8 sm:col-start-5 sm:col-end-13 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <a href="#features" className="text-[#2C3E50] hover:text-[#E67E22] transition-colors mb-4 font-sourceSansPro">Features</a>
            <a href="#pricing" className="text-[#2C3E50] hover:text-[#E67E22] transition-colors mb-4 font-sourceSansPro">Pricing</a>
          </div>
          <div className="flex flex-col">
            <a href="#faq" className="text-[#2C3E50] hover:text-[#E67E22] transition-colors mb-4 font-sourceSansPro">FAQs</a>
            <a href="/terms" className="text-[#2C3E50] hover:text-[#E67E22] transition-colors mb-4 font-sourceSansPro">Terms</a>
          </div>
          <div className="flex flex-col">
            <a href="/privacy" className="text-[#2C3E50] hover:text-[#E67E22] transition-colors mb-4 font-sourceSansPro">Privacy</a>
            <a href="/contact" className="text-[#2C3E50] hover:text-[#E67E22] transition-colors mb-4 font-sourceSansPro">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
