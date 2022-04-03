import React, { useState, useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import FormButton from 'components/FormButton';
import { Result } from 'components/Result';
import { Input } from 'components/Input';
import { ButtonSubmit } from 'components/ButtonSubmit';
import { ButtonRemove } from 'components/ButtonRemove';

export type Payments = {
  aPayments: { price: number }[];
  bPayments: { price: number }[];
};
const Home: React.FC = () => {
  const [totalAPrice, setTotalAPrice] = useState(0);
  const [totalBPrice, setTotalBPrice] = useState(0);

  const totalPrice = useMemo(() => totalAPrice + totalBPrice, [
    totalAPrice,
    totalBPrice,
  ]);

  const { register, control, handleSubmit } = useForm<Payments>({
    defaultValues: {
      aPayments: [{ price: 0 }],
      bPayments: [{ price: 0 }],
    },
  });

  const aFieldArray = useFieldArray({ control, name: 'aPayments' });
  const bFieldArray = useFieldArray({ control, name: 'bPayments' });

  const calcPrice = (data: Payments) => {
    const { aPayments, bPayments } = data;
    const totalA = aPayments.reduce((acc, current) => {
      return acc + Number(current.price);
    }, 0);
    const totalB = bPayments.reduce((acc, current) => {
      return acc + Number(current.price);
    }, 0);
    setTotalAPrice(totalA);
    setTotalBPrice(totalB);
  };

  return (
    <div className="grid justify-items-center border-2">
      <form onSubmit={handleSubmit(calcPrice)}>
        <div className="m-2">
          <h3 className="text-lg ">Aさんが支払った金額</h3>
          <ul>
            {aFieldArray.fields.map((_, index) => (
              <li key={`a-payments-${index}`}>
                <div className="flex">
                  <Input
                    field={`aPayments.${index}.price` as const}
                    register={register}
                  />
                  <ButtonRemove onClick={() => aFieldArray.remove(index)} />
                </div>
              </li>
            ))}
          </ul>
          <FormButton
            type="button"
            onClick={() => aFieldArray.append({ price: 0 })}
            label="追加する"
          />
        </div>
        <div className="m-2">
          <h3>Bさんが支払った金額</h3>
          <ul>
            {bFieldArray.fields.map((_, index) => (
              <li key={`b-payments-${index}`}>
                <div className="flex">
                  <Input
                    field={`bPayments.${index}.price` as const}
                    register={register}
                  />
                  <ButtonRemove onClick={() => bFieldArray.remove(index)} />
                </div>
              </li>
            ))}
          </ul>
          <FormButton
            type="button"
            onClick={() => bFieldArray.append({ price: 0 })}
            label="追加する"
          />
        </div>
        <ButtonSubmit label="計算する" />
      </form>
      {!!totalPrice && (
        <Result
          totalPrice={totalPrice}
          totalAPrice={totalAPrice}
          totalBPrice={totalBPrice}
        />
      )}
    </div>
  );
};
export default Home;
