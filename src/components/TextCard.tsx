import { numToPersian } from '../utils/helpers';

type TextCardProps = {
  finalValue: number;
  exchangeValue: string;
};

function TextCard({ finalValue, exchangeValue }: TextCardProps) {
  return (
    <section className='space-y-3'>
      <div className='space-y-2 text-center text-xl font-bold md:flex md:items-center md:justify-center md:gap-6 md:space-y-0 xl:text-2xl'>
        <p>مقدار پول تبدیل شده ی شما:</p>
        <p className='font-black text-sky-200'>
          {numToPersian(finalValue) === '٠'
            ? 'ناچیز'
            : numToPersian(finalValue)}
        </p>
      </div>
      <p className='text-center text-sm vsm:text-base lg:text-lg'>
        ({`١ دلار= ${numToPersian(Number(exchangeValue))}ریال `})
      </p>
    </section>
  );
}

export default TextCard;
