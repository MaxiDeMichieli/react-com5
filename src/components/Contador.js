import { Component } from 'react';

class Contador extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    /* console.log('se montó el componente'); */

    this.interval = setInterval(() => {
      /* console.log('segundo'); */
    }, 1000);
  }

  componentDidUpdate() {
    /* console.log('se actualizó el componente'); */
  }

  componentWillUnmount() {
    /* console.log('se desmontó el componente'); */

    clearInterval(this.interval);
  }

  incrementar() {
    /* console.log('esta incrementando'); */

    this.setState({
      number: this.state.number + 1,
    });
  }

  decrementar() {
    /* console.log('esta decrementando'); */

    this.setState({
      number: this.state.number - 1,
    });
  }

  render() {
    return (
      <div id="contador">
        <div>{this.state.number}</div>
        <button onClick={() => this.decrementar()}>decrementar</button>
        <button onClick={() => this.incrementar()}>incrementar</button>
      </div>
    );
  }
}

/* function Contador(props) {
  return (
    <div>
      Contador
    </div>
  )
} */

export default Contador;
