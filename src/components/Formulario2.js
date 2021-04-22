import { useForm } from 'react-hook-form';

const Formulario2 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const validations = {
    name: {
      required: {
        value: true,
        message: 'El nombre es requerido',
      },
      minLength: {
        value: 2,
        message: 'El nombre debe tener al menos 2 caracteres',
      },
      maxLength: {
        value: 20,
        message: 'El nombre debe tener menos de 20 caracteres',
      },
    },
    password: {
      required: {
        value: true,
        message: 'La contraseña es requerida',
      },
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: 'La contraseña es insegura',
      }
    },
  };

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="my-5">
      <h2>Formulario 2</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label className="my-2">
          Nombre:
          <input
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            type="text"
            {...register('name', validations.name)}
          />
        </label>
        {errors.name ? <p className="text-danger">{errors.name.message}</p> : null}
        <br />
        <label className="my-2">
          Contraseña:
          <input
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            type="password"
            {...register('password', validations.password)}
          />
        </label>
        {errors.password ? <p className="text-danger">{errors.password.message}</p> : null}
        <br />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario2;
