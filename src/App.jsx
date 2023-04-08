import { useState } from 'react';
import './App.css';
import Select from './components/Select/Select';
import Button from "./components/Button/Button";

function App() {
  const [option, setOption] = useState(0);

  return (
    <div className="App">
      <h1>{option}</h1>
      
      <Select setOption={setOption} options={["Rojo", "Verde", "Azul"]} />
      <Button text={"Hola, haceme click"} color="red"></Button>
    </div>
  )
}

export default App
