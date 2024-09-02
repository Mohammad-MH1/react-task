import { numToPersian } from '../utils/helpers';

type TextCardProps = {
  finalValue: number;
};

function TextCard({ finalValue }: TextCardProps) {
  return (
    <section className='space-y-2 text-center text-xl font-bold md:flex md:items-center md:justify-center md:gap-6 md:space-y-0 xl:text-2xl'>
      <p>مقدار پول تبدیل شده ی شما: </p>
      <p className='font-black text-sky-200'>
        {numToPersian(finalValue) === '٠' ? 'ناچیز' : numToPersian(finalValue)}
      </p>
    </section>
  );
}

export default TextCard;
