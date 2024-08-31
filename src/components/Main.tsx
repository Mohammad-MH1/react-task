import { useState } from 'react';

import FormCard from '../components/FormCard';
import TextCard from '../components/TextCard';

function Main() {
  const [finalValue, setFinalValue] = useState(0);

  return (
    <main className='flex items-center justify-center'>
      <div
        className='flex h-5/6 w-full flex-col gap-10 rounded bg-white/[.25] px-5 py-4 shadow-2xl backdrop-blur-lg sm:w-5/6 md:w-3/4 md:gap-12 md:px-6 md:py-6 lg:w-3/5 lg:px-8 lg:py-10 xl:w-1/2 xl:gap-20'
        dir='rtl'
      >
        <FormCard onFinalValue={setFinalValue} />
        {finalValue > 0 && <TextCard finalValue={finalValue} />}
      </div>
    </main>
  );
}

export default Main;
