import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import FormButton from 'components/FormButton';

type Payments = {
  aPayments: { price: number }[];
  bPayments: { price: number }[];
};
const Home: React.FC = () => {
  const { register, control } = useForm<Payments>({
    defaultValues: {
      aPayments: [{ price: 0 }],
      bPayments: [{ price: 0 }],
    },
  });
  const aFieldArray = useFieldArray({ control, name: 'aPayments' });
  const bFieldArray = useFieldArray({ control, name: 'bPayments' });

  return (
    <div className="grid justify-items-center border-2">
      <form>
        <div className="m-2">
          <h3 className="text-lg ">Aさんが支払った金額</h3>
          <ul>
            {aFieldArray.fields.map((_, index) => (
              <li key={`a-payments-${index}`}>
                <div className="flex">
                  <input
                    type="number"
                    {...register(`aPayments.${index}.price` as const)}
                    className="form-input mt-1 block w-32 border-2 border-current"
                  />
                  <FormButton
                    type="button"
                    onClick={() => aFieldArray.remove(index)}
                    label="削除"
                  />
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
                  <input
                    type="number"
                    {...register(`bPayments.${index}.price` as const)}
                    className="form-input mt-1 block w-32 border-2 border-current"
                  />
                  <FormButton
                    type="button"
                    onClick={() => bFieldArray.remove(index)}
                    label="削除"
                  />
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => bFieldArray.append({ price: 0 })}
            className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-red-700"
          >
            追加する
          </button>
        </div>
        <div className="grid justify-items-center">
          <button
            type="button"
            onClick={() => {}}
            className="py-2 px-4 w-full font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
          >
            計算する
          </button>
        </div>
      </form>
    </div>
  );
};
export default Home;
