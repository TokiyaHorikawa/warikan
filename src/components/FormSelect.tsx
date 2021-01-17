import React from 'react';

type OptionValue = string | number;
type OptionObjValue = { [key in string]: OptionValue };
type Option = OptionValue | OptionObjValue;

type PropsType = {
  name: string;
  label?: string;
  type?: string;
  options: Option[];
  optionsViewKey?: string;
  optionsValueKey?: string;
  selectedValue?: OptionValue;
  className?: string;
  inputRef?: any;
};

const FormSelect: React.FC<PropsType> = ({
  name,
  label,
  className,
  options,
  optionsValueKey = 'value',
  optionsViewKey = 'view',
  selectedValue,
  inputRef,
}) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <select
        name={name}
        ref={inputRef}
        defaultValue={selectedValue}
        className={
          'form-select block w-full mt-1 border-2 border-current' + className
        }
      >
        {options.map((option, index) => {
          return typeof option === 'string' || typeof option === 'number' ? (
            <option key={`option-${index}`}>{option}</option>
          ) : (
            <option value={option[optionsValueKey]} key={`option-${index}`}>
              {option[optionsViewKey]}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default FormSelect;
