import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import FormLogin from './Login';
import FormCita from './Agenda';
import FormSingIn from './SingIn';
import Dates from './Calendario';
import Dashboard from './components/Dashboard';
import FormDirectorio from './components/Directorio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () =>{
  const[inicio, cambiarInicio] = useState(false);
  const[registro, cambiarRegistro] = useState(false);
  const[agenda, cambiarAgenda] = useState(false)

  return(
    <>
      {inicio === true ? (
        <>
          <h1>Bienvenido a la clinica de la vida</h1>
          <FormCita/>
          <Dates/>
          <button onClick={() => cambiarInicio(false)}>Cerrar Sesion</button>
        </>
      ) : (
        <>
        <button onClick={() => cambiarRegistro(false)}>Iniciar Sesion</button>
        <button onClick={() => cambiarRegistro(true)}>Crear Usuario</button>
          {registro === false ? (
            <>
              <h1>Iniciar Sesion</h1>
              <FormLogin cambiarInicio={cambiarInicio}/>
            </>
          ) : (
            <>
              <h1>Crear Usuario</h1>
              <FormSingIn  cambiarRegistro={cambiarRegistro}/>
            </>
          )}
        </>
      )}
    </>
  );
};

root.render(<Jsx/>);

