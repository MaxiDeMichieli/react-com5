import { useState } from 'react';
import Contador from './components/Contador';
import Contador2 from './components/Contador2';

function App() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className="container py-5">
      <button onClick={() => handleClick()} className="mb-3">
        {show ? 'Ocultar contador' : 'Mostrar contador'}
      </button>
      {show ? <Contador2 number={number} setNumber={setNumber} /> : null}
    </div>
  );
}

/* class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    }
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="container py-5">
        <button onClick={() => this.handleClick()} className="mb-3" >Mostrar contador</button>
        {this.state.show ? <Contador number={0} /> : null}
      </div>
    );
  }
} */

/* function App() {
  return (
    <div className="container py-5">
      <Contador number={0} />
    </div>
  );
} */

export default App;
