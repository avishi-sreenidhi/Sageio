import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`py-2 px-6 rounded font-semibold focus:outline-none ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
