import React, {useState} from "react";
import FormCita from "./Agenda";
import Dates from "./Calendario";
import NavCom from "./NavCom";

const Agendar = () => {
    return (
        <div>
            <NavCom/>
            <h1>Agenda tu cita</h1>
            <FormCita/>
            <Dates/>
        </div>
    );
};

export default Agendar;