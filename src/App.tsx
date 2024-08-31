import { FormEvent, useState } from 'react';
import AppLayout from './components/AppLayout';
import FormCard from './components/FormCard';
import Header from './components/Header';
import Main from './components/Main';
import TextCard from './components/TextCard';

const EXCHANGE = 600000;

function App() {
  const [selected, setSelected] = useState('dollar');
  const [value, setValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value <= 0) return;

    if (selected === 'dollar') setFinalValue(value * EXCHANGE);
    if (selected === 'rial') setFinalValue(value / EXCHANGE);

    setValue(0);
  }

  return (
    <AppLayout>
      <Header />
      <Main>
        <FormCard
          onSelected={setSelected}
          selected={selected}
          value={value}
          onValue={setValue}
          onSubmit={handleSubmit}
        />
        {finalValue > 0 && <TextCard finalValue={finalValue} />}
      </Main>
    </AppLayout>
  );
}

export default App;
