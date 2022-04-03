import React from 'react';

type PropsType = {
  onClick?: () => void;
};

export const ButtonAdd: React.FC<PropsType> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
    >
      追加する
    </button>
  );
};

export default ButtonAdd;
