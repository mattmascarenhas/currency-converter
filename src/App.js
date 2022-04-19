import './App.css';

import Conversor from './components/conversor';

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className='line'>
      <Conversor currencyA='USD' currencyB='BRL'></Conversor>
      <Conversor currencyA='BRL' currencyB='USD'></Conversor>
      </div>
      <div className='line'>
      <Conversor currencyA='EUR' currencyB='BRL'></Conversor>
      <Conversor currencyA='BRL' currencyB='EUR'></Conversor>
      </div>
    </div>
  );
}

export default App;
