import { FormEvent } from 'react';
import Button from './Button';
import { handlePriceInput } from '../utils/helpers';

type DollarPriceFormProps = {
  onExchangeValue: (value: string) => void;
  exchangeValue: string;
  onIsSubmit: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

function DollarPriceForm({
  onExchangeValue,
  exchangeValue,
  onIsSubmit,
}: DollarPriceFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!exchangeValue) return;

    onIsSubmit(c => !c);
  }

  return (
    <form className='space-y-4 text-center sm:text-xl' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='dollarPrice'>نرخ دلار امروز (ریال): </label>
        <input
          type='text'
          id='dollarPrice'
          className='input'
          value={exchangeValue}
          onChange={e =>
            handlePriceInput(e.target.value, onExchangeValue, exchangeValue)
          }
        />
      </div>
      <Button>تایید</Button>
    </form>
  );
}

export default DollarPriceForm;
