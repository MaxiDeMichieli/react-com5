import { useState, useEffect } from 'react';

const Contador2 = (props) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    console.log('se montó el componente');
  }, []);

  useEffect(() => {
    console.log('se renderizó el componente');
  });

  useEffect(() => {
    return () => {
      console.log('se desmontó el componente');
    };
  });

  const incrementar = () => {
    props.setNumber(props.number + 1);
  };

  const decrementar = () => {
    if (props.number !== 0) {
      props.setNumber(props.number - 1);
    }
  };

  const resetear = () => {
    props.setNumber(0);
  };

  const setColorRed = () => {
    setColor('red');
  };

  return (
    <div style={{ backgroundColor: color }}>
      <div>{props.number}</div>
      <button onClick={decrementar}>decrementar</button>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={resetear}>resetear</button>
      <br />
      <br />
      <button onClick={setColorRed}>fondo rojo</button>
    </div>
  );
};

export default Contador2;
