import React, {useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Agendar from "./AgendarT";
import FormDirectorio from "./Directorio";

const NavDash = () => {
    const[ventanas, setVentanaA] = useState(false);
    const[ventanasd, setVentanaD] = useState(false);

    if (ventanas === true) {
        <Agendar/>
    }

    if(ventanasd === true){
        <FormDirectorio/>
    }
    
    return (
        <div>
            <div>
                <ul className="nav  justify-content-center">
                    <li className="nav-item">
                        <button className="btn" onClick={() => setVentanaA(true)}>Agendar</button>
                    </li>
                    <li>
                        <button className="btn" onClick={() => setVentanaD(true)}>Directorio</button>
                    </li>
                    <li>
                        <button className="btn">Ficha clínica</button>
                    </li>
                    <li>
                        <button className="btn">Récord Médico</button>
                    </li>
                    <li>
                        <button className="btn" >Cerrar Sesión</button>
                    </li>
                </ul>
            </div>
        </div>
        
    );
};

export default NavDash;