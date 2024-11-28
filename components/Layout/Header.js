import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(sectionId);
    }
  };

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold text-[var(--sherpa-blue)] items-center text-xl">
              Doc Sherpa
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[var(--sherpa-blue)] items-center">
            <li className="px-4 py-2 cursor-pointer animation-hover inline-block relative">
              <button 
                onClick={() => scrollToSection('feature')}
                className={`hover:text-[var(--guide-orange)] ${activeLink === 'feature' ? 'animation-active' : ''}`}
              >
                Features
              </button>
            </li>
            <li className="px-4 py-2 cursor-pointer animation-hover inline-block relative">
              <button
                onClick={() => scrollToSection('pricing')}
                className={`hover:text-[var(--guide-orange)] ${activeLink === 'pricing' ? 'animation-active' : ''}`}
              >
                Pricing
              </button>
            </li>
            <li className="px-4 py-2 cursor-pointer animation-hover inline-block relative">
              <button
                onClick={() => scrollToSection('faq')}
                className={`hover:text-[var(--guide-orange)] ${activeLink === 'faq' ? 'animation-active' : ''}`}
              >
                FAQs
              </button>
            </li>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <button className="text-[var(--sherpa-blue)] mx-2 sm:mx-4 capitalize tracking-wide hover:text-[var(--guide-orange)] transition-all">
              Login
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white sm:px-3">
          <ul className="flex w-full justify-between items-center text-[var(--sherpa-blue)]">
            <li className="flex flex-col items-center text-xs pt-3 pb-2 cursor-pointer" onClick={() => scrollToSection('feature')}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Features
            </li>
            <li className="flex flex-col items-center text-xs pt-3 pb-2 cursor-pointer" onClick={() => scrollToSection('pricing')}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pricing
            </li>
            <li className="flex flex-col items-center text-xs pt-3 pb-2 cursor-pointer" onClick={() => scrollToSection('faq')}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQs
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
