import AppLayout from './components/AppLayout';
import FormCard from './components/FormCard';
import Header from './components/Header';
import Main from './components/Main';
import TextCard from './components/TextCard';

function App() {
  return (
    <AppLayout>
      <Header />
      <Main>
        <FormCard />
        <TextCard />
      </Main>
    </AppLayout>
  );
}

export default App;
