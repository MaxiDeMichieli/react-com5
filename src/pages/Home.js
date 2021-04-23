import { useState } from 'react';
import Contador2 from '../components/Contador2';
import Formulario1 from '../components/Formulario1';
import Formulario2 from '../components/Formulario2';

function Home() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={() => handleClick()} className="mb-3">
        {show ? 'Ocultar contador' : 'Mostrar contador'}
      </button>
      {show ? <Contador2 number={number} setNumber={setNumber} /> : null}
      <Formulario1 />
      <Formulario2 />
    </div>
  );
}

export default Home;
