import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import FormLogin from './Login';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () =>{
  const[inicio, cambiarInicio] = useState(false);

  return(
    <>
      {inicio === true ? (
        <>
          <h1>Bienvenido</h1>
          <button onClick={() => cambiarInicio(false)}>Cerrar Sesion</button>
        </>
      ) : (
        <>
          <h1>Iniciar Sesion</h1>
          <FormLogin cambiarInicio={cambiarInicio}/>
        </>
      )}
    </>
  );
};

root.render(<Jsx/>);