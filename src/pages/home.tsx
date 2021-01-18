import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import FormButton from 'components/FormButton';

type FormDataValue = {
  fee: number;
  user: string;
};
type UserData = {
  name: string;
  rate: number;
};
type FormValue = {
  formData: FormDataValue[];
  userData: UserData[];
};
const initialValue: FormValue = {
  formData: [
    { fee: 0, user: 'A' },
    { fee: 0, user: 'B' },
  ],
  userData: [
    { name: 'A', rate: 50 },
    { name: 'B', rate: 50 },
  ],
};

const Home: React.FC = () => {
  const { register, watch, control } = useForm({
    defaultValues: initialValue,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'formData',
  });
  // const { fields: userFields } = useFieldArray({ control, name: 'userData' });
  const { formData, userData } = watch(['formData', 'userData']);

  const totalFee = () => {
    return formData.reduce((previous, current) => {
      return previous + Number(current.fee);
    }, 0);
  };

  const payedByUser = (user: string) => {
    const userFeeList = formData.filter((fee) => fee.user === user);
    const payed = userFeeList.reduce((previous, current) => {
      return previous + Number(current.fee);
    }, 0);
    return payed;
  };

  const addForm = () => {
    append({ fee: 0, user: 'A' });
  };

  return (
    <div>
      <h2 className="text-2xl">ホーム</h2>
      <form>
        <div className="payed-form">
          <h3>支払った金額</h3>
          <ul>
            {fields.map((field, index) => (
              <li key={field.id} className="flex">
                <FormSelect
                  name={`formData[${index}].user`}
                  label="支払った人"
                  options={userData}
                  optionsValueKey="name"
                  optionsViewKey="name"
                  selectedValue={field.user}
                  inputRef={register()}
                />
                <FormInput
                  name={`formData[${index}].fee`}
                  label={`金額${index + 1}`}
                  defaultValue={field.fee}
                  inputRef={register()}
                  type="number"
                />
                <FormButton
                  type="button"
                  onClick={() => remove(index)}
                  label="削除"
                />
              </li>
            ))}
            <li>
              <FormButton type="button" onClick={addForm} label="追加" />
            </li>
          </ul>
          {/* <h3>割り勘比率</h3> */}
        </div>
        <hr />
        <div>
          <h3>計算結果</h3>
          <div>
            <p>トータル: {totalFee()}円</p>
          </div>
          {userData.map((user, index) => {
            const { name, rate } = user;
            const paymentFee = payedByUser(name);
            const paymentRateFee = (totalFee() * rate) / 100;
            const overpayment = paymentRateFee - paymentFee;
            return (
              <div key={`${name}-${index}`}>
                <hr></hr>
                <p>{name}さん</p>
                <p>支払い金額: {paymentFee}円</p>
                <p>割り勘比率: {rate}%</p>
                <p>支払うべき金額: {paymentRateFee}円</p>
                <p>過払い金: {overpayment}円</p>
                <p className="text-red-500">
                  行動:{' '}
                  {overpayment > 0
                    ? `払いすぎた分の${overpayment}円を受け取る`
                    : `不足している人に${-overpayment}円渡す`}
                </p>
              </div>
            );
          })}

          <p></p>
        </div>
      </form>
    </div>
  );
};
export default Home;
