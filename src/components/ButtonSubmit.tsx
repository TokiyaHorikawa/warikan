import React from 'react';

type Props = {
  label: string;
};

export const ButtonSubmit: React.VFC<Props> = ({ label }) => (
  <input
    type="submit"
    value={label}
    className="py-2 px-4 w-full font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
  />
);
