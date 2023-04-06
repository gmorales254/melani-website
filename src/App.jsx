import { useState } from 'react';
import './App.css';
import Select from './components/Select/Select';

function App() {
  const [option, setOption] = useState(0);

  return (
    <div className="App">
      <h1>{option}</h1>
      
      <Select setOption={setOption} options={["Rojo", "Verde", "Azul"]} />
    </div>
  )
}

export default App
