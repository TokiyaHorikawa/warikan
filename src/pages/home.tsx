import React from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/FormInput';

const initialValue = {
  formInputA: 0,
  formInputB: 0,
};

const Home: React.FC = () => {
  const { register, watch } = useForm({
    defaultValues: initialValue,
  });

  const feeList = watch(['formInputA', 'formInputB']);

  return (
    <div>
      <h2 className="text-2xl">ホーム</h2>
      <form>
        <div className="payed-form">
          <h3>Aさんが支払った金額</h3>
          <Input
            name="formInputA"
            label="金額1"
            inputRef={register}
            type="number"
          />
          円
        </div>
        <div className="payed-form">
          <h3>Bさんが支払った金額</h3>
          <Input
            name="formInputB"
            label="金額2"
            inputRef={register}
            type="number"
          />
          円
        </div>
        <div>
          <h3>計算結果結果</h3>
          <p>
            <span>Aさんの支払い金額:</span> {feeList.formInputA}円
          </p>
          <p>
            <span>Bさんの支払い金額:</span> {feeList.formInputB}円
          </p>
        </div>
      </form>
    </div>
  );
};
export default Home;
