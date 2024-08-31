import { FormEvent, useState } from 'react';

import Button from './Button';

type FormCardProps = {
  onFinalValue: (value: number) => void;
};

const EXCHANGE = 600000;

function FormCard({ onFinalValue }: FormCardProps) {
  const [selected, setSelected] = useState('dollar');
  const [value, setValue] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value <= 0) return;

    if (selected === 'dollar') onFinalValue(value * EXCHANGE);
    if (selected === 'rial') onFinalValue(value / EXCHANGE);

    setValue(0);
  }

  return (
    <form
      className='flex flex-col gap-3 py-2 sm:text-lg md:gap-6 md:text-xl lg:gap-8 lg:text-2xl'
      onSubmit={handleSubmit}
    >
      <div className='flex items-center justify-center gap-4 md:justify-around lg:justify-between'>
        <label htmlFor='currency' className=''>
          واحد پول مورد نظر را انتخاب کنید.
        </label>
        <select
          id='currency'
          className='input lg:w-64 lg:text-lg'
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          <option value='dollar'>دلار</option>
          <option value='rial'>ریال</option>
        </select>
      </div>
      <div className='flex flex-col items-center justify-between gap-1 sm:flex-row sm:justify-center sm:gap-3 md:justify-around lg:justify-between'>
        <label htmlFor='number'>مقدار مورد نظر را وارد کنید.</label>
        <input
          type='number'
          id='number'
          className='input sm:w-32 lg:w-64 lg:text-lg'
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />
      </div>
      <div className='flex justify-center gap-5'>
        <Button>اجرا</Button>
      </div>
    </form>
  );
}

export default FormCard;
