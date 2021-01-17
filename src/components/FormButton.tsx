import React from 'react';

type PropsType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  label?: string;
  className?: string;
};

const FormButton: React.FC<PropsType> = ({
  type,
  onClick,
  label = 'BUTTON',
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700' +
        className
      }
    >
      {label}
    </button>
  );
};

export default FormButton;
