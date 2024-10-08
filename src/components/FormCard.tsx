import { FormEvent, useState } from 'react';

import Button from './Button';
import { handlePriceInput } from '../utils/helpers';

type FormCardProps = {
  onFinalValue: (value: number) => void;
  exchangeValue: string;
};

function FormCard({ onFinalValue, exchangeValue }: FormCardProps) {
  const [selected, setSelected] = useState('dollar');
  const [value, setValue] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) return;
    if (selected === 'dollar')
      onFinalValue(Number(value) * Number(exchangeValue));
    if (selected === 'rial')
      onFinalValue(Number(value) / Number(exchangeValue));

    setValue('');
  }

  return (
    <form
      className='flex flex-col gap-3 py-2 vsm:px-10 sm:text-lg md:gap-6 md:pl-16 md:pr-8 md:text-xl lg:gap-8 lg:px-3 lg:text-2xl'
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
          onChange={e => handlePriceInput(e.target.value, setValue, value)}
        />
      </div>
      <div className='flex justify-center gap-5'>
        <Button>محاسبه</Button>
      </div>
    </form>
  );
}

export default FormCard;
