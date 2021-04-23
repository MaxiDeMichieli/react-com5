import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Formulario1 = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (name && password) {
      console.log({ name, password });
      history.push('/products');
    }
  };

  /* [
    '/products',
    '/',
    '/products'
  ] */

  return (
    <div className="my-5">
      <h2>Formulario 1</h2>
      <form onSubmit={submit}>
        <label className="my-2">
          Nombre:
          <input
            className="form-control"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="my-2">
          Contraseña:
          <input
            className="form-control"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario1;
