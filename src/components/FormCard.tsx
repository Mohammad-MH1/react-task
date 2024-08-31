import Button from './Button';

function FormCard() {
  return (
    <form className='flex flex-col gap-3 py-2 sm:text-lg md:gap-6 md:text-xl lg:gap-8 lg:text-2xl'>
      <div className='flex items-center justify-center gap-4 md:justify-around lg:justify-between'>
        <label htmlFor='currency' className=''>
          واحد پول مورد نظر را انتخاب کنید.
        </label>
        <select id='currency' className='input lg:w-64 lg:text-lg'>
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
        />
      </div>
      <div className='flex justify-center'>
        <Button />
      </div>
    </form>
  );
}

export default FormCard;
