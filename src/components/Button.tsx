import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className='mt-3 inline-block h-6 w-full rounded-full bg-sky-900 text-sm font-semibold uppercase tracking-wide text-stone-200 shadow-md transition-colors duration-300 hover:bg-sky-600 hover:text-stone-300 focus:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-600 focus:ring-offset-2 disabled:cursor-not-allowed vsm:w-1/2 sm:w-1/2 md:h-8 md:text-base lg:h-10'>
      {children}
    </button>
  );
}

export default Button;
