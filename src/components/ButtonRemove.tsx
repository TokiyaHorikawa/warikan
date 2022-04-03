import React from 'react';

type PropsType = {
  onClick?: () => void;
};

export const ButtonRemove: React.FC<PropsType> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
    >
      削除
    </button>
  );
};

export default ButtonRemove;
