import React from 'react';

type Props = {
  totalPrice: number;
  totalAPrice: number;
  totalBPrice: number;
  wariPaymentAmount: number;
  resultText: string;
};

export const Results: React.VFC<Props> = ({
  totalPrice,
  totalAPrice,
  totalBPrice,
  wariPaymentAmount,
  resultText,
}) => {
  return (
    <div>
      <h3 className="text-lg">計算結果</h3>
      <p>合計: {totalPrice.toLocaleString()}円</p>
      <p>Aさん合計: {totalAPrice.toLocaleString()}円</p>
      <p>Bさん合計: {totalBPrice.toLocaleString()}円</p>
      <p>割り勘金額/人: {wariPaymentAmount.toLocaleString()}円</p>
      <p className="text-red-500 text-xl">{resultText}</p>
    </div>
  );
};
