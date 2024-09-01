import { FormEvent, useState } from 'react';

import { checkPriceInput } from '../utils/helpers';
import Button from './Button';

type FormCardProps = {
  onFinalValue: (value: number) => void;
};

const EXCHANGE = 600000;

function FormCard({ onFinalValue }: FormCardProps) {
  const [selected, setSelected] = useState('dollar');
  const [value, setValue] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) return;
    if (selected === 'dollar') onFinalValue(Number(value) * EXCHANGE);
    if (selected === 'rial') onFinalValue(Number(value) / EXCHANGE);

    setValue('');
  }

  function handlePriceInput(inputVal: string) {
    const isValid = checkPriceInput(inputVal);
    if (!isValid || inputVal === '0') return setValue(value);
    setValue(inputVal);
  }

  return (
    <form
      className='flex flex-col gap-3 py-2 vsm:p-10 sm:text-lg md:gap-6 md:pl-16 md:pr-8 md:text-xl lg:gap-8 lg:p-3 lg:text-2xl'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col items-center justify-center gap-4 vsm:flex-row vsm:justify-between sm:justify-between'>
        <label htmlFor='currency' className=''>
          واحد پول مورد نظر را انتخاب کنید.
        </label>
        <select
          id='currency'
          className='input w-32 md:w-36 lg:w-44 lg:text-lg'
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          <option value='dollar'>دلار</option>
          <option value='rial'>ریال</option>
        </select>
      </div>
      <div className='flex flex-col items-center justify-between gap-1 vsm:flex-row vsm:justify-between sm:justify-between sm:gap-3'>
        <label htmlFor='number'>مقدار مورد نظر را وارد کنید.</label>
        <input
          type='text'
          id='number'
          className='input w-32 md:w-36 lg:w-44 lg:text-lg'
          value={value}
          onChange={e => handlePriceInput(e.target.value)}
        />
      </div>
      <div className='flex justify-center gap-5'>
        <Button>اجرا</Button>
      </div>
    </form>
  );
}

export default FormCard;
