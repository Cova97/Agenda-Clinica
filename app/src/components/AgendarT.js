import React, {useState} from "react";
import FormCita from "../Agenda";
import Dates from "../Calendario";

const Agendar = () => {
    return (
        <div>
            <h1>Bienvenido a la clinica de la vida</h1>
            <FormCita/>
            <Dates/>
            <button onClick={() => cambiarInicio(false)}>Cerrar Sesion</button>
        </div>
    );
};

export default Agendar;