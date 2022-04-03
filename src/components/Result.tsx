import React, { useMemo } from 'react';

type Props = {
  totalPrice: number;
  totalAPrice: number;
  totalBPrice: number;
};

export const Result: React.VFC<Props> = ({
  totalPrice,
  totalAPrice,
  totalBPrice,
}) => {
  const wariPaymentAmount = useMemo(() => totalPrice / 2, [totalPrice]);

  const resultText = useMemo(() => {
    const payer = totalAPrice < totalBPrice ? 'A' : 'B';
    const receiver = payer === 'A' ? 'B' : 'A';
    const paymentAmount =
      wariPaymentAmount - (payer === 'A' ? totalAPrice : totalBPrice);
    return `行動: ${payer}さんが${receiver}さんに${paymentAmount.toLocaleString()}円支払う`;
  }, [totalAPrice, totalBPrice, wariPaymentAmount]);

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
