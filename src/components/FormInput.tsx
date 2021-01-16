import React from 'react';

type PropsType = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  inputRef?: any;
};

const FormInput: React.FC<PropsType> = ({
  name,
  label,
  type = 'text',
  placeholder,
  className,
  inputRef,
}) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
        className={
          'form-input mt-1 block w-full border-2 border-current' + className
        }
      />
    </label>
  );
};

export default FormInput;
