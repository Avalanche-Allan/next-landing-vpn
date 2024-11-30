import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      style={{
        backgroundColor: 'var(--guide-orange)',
        color: 'white'
      }}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 font-semibold rounded-lg hover:shadow-lg transition-all outline-none " +
        (addClass || '')
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
