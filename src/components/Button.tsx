import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className='vsm:w-1/2 mt-3 inline-block h-6 w-full rounded-full bg-green-800 text-sm font-semibold uppercase tracking-wide text-stone-200 shadow-md transition-colors duration-300 hover:bg-green-600 hover:text-stone-300 focus:bg-green-600 focus:outline-none focus:ring focus:ring-green-600 focus:ring-offset-2 disabled:cursor-not-allowed sm:w-1/2 md:h-8 lg:h-10'>
      {children}
    </button>
  );
}

export default Button;
