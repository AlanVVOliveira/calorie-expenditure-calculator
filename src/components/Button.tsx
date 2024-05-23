import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" className="btn btn-outline-dark" onClick={onClick}>
      Submit
    </button>
  );
};

export default Button;