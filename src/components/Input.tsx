import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Payments } from '../pages/home';

type Props = {
  field: `aPayments.${number}.price` | `bPayments.${number}.price`;
  register: UseFormRegister<Payments>;
};

export const Input: React.VFC<Props> = ({ field, register }) => {
  return (
    <input
      type="number"
      {...register(field)}
      className="form-input mt-1 block w-32 border-2 border-current"
    />
  );
};
