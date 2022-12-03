import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import FormLogin from './components/Login';
import FormSingIn from './components/SingIn';
import Dashboard from './components/Dashboard';
import NavbarLR from './components/NavbarLR';
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
          <Dashboard/>
        </>
      ) : (
        <>
        <NavbarLR/>
        <button onClick={() => cambiarRegistro(false)}>Iniciar Sesion</button>
        <button onClick={() => cambiarRegistro(true)}>Crear Usuario</button>
          {registro === false ? (
            <>
              <h2>Iniciar Sesion</h2>
              <FormLogin cambiarInicio={cambiarInicio}/>
            </>
          ) : (
            <>
              <h2>Crear Usuario</h2>
              <FormSingIn  cambiarRegistro={cambiarRegistro}/>
            </>
          )}
        </>
      )}
    </>
  );
};

root.render(<Jsx/>);

