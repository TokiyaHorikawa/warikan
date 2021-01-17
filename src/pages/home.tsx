import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import FormInput from 'components/FormInput';

const initialValue = {
  formData: [
    { fee: 0, user: 'A' },
    { fee: 0, user: 'B' },
  ],
  userData: [{ name: 'A' }, { name: 'B' }],
};

const Home: React.FC = () => {
  const { register, watch, control } = useForm({
    defaultValues: initialValue,
  });
  const { fields } = useFieldArray({ control, name: 'formData' });
  const { fields: userFields } = useFieldArray({ control, name: 'userData' });

  const { formData, userData } = watch(['formData', 'userData']);

  const payedByUser = (user: string) => {
    const userFeeList = formData.filter((fee) => fee.user === user);
    const payed = userFeeList.reduce((previous, current) => {
      return previous + Number(current.fee);
    }, 0);
    return payed;
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
                <FormInput
                  name={`formData[${index}].user`}
                  label="支払った人"
                  defaultValue={field.user}
                  inputRef={register()}
                />
                <FormInput
                  name={`formData[${index}].fee`}
                  label={`金額${index + 1}`}
                  defaultValue={field.fee}
                  inputRef={register()}
                  type="number"
                />
              </li>
            ))}
          </ul>
          <h3>割り勘比率</h3>
          <p>ここで割り勘比率を入力</p>
        </div>
        <hr />
        <div>
          <h3>計算結果結果</h3>
          {userData.map((user, index) => (
            <p key={`${user.name}-${index}`}>
              {user.name}さんの支払い金額: {payedByUser(user.name)}
            </p>
          ))}
          <p></p>
        </div>
      </form>
    </div>
  );
};
export default Home;
