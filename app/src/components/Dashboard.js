import React, {useState} from "react";

const Dashboard = () => {
    return (
        <div>
            <ul className="nav  justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./Agendar.js">Agendar</a>
                </li>
                <li>
                    <a className="nav-link active" aria-current="page" href="./Directorio.js">Directorio</a>
                </li>
                <li>
                    <a className="nav-link active" aria-current="page" href="#">Ficha Clínica</a>
                </li>
                <li>
                    <a className="nav-link active" aria-current="page" href="#">Recórd Médico</a>
                </li>
                <li>
                    <a className="nav-link active" aria-current="page" href="#">Cerrar sesión</a>
                </li>
            </ul>
            <div></div>
            <div>
                <h1>Citas agendadas</h1>
                <h2>
                    <ul className="nav flex-column flex-sm-row">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Hora</a>
                        </li>
                        <li>
                            <a className="nav-link" aria-current="page">Fecha</a>
                        </li>
                        <li>
                            <a className="nav-link" aria-current="page">Doctor</a>
                        </li>
                        <li>
                            <a className="nav-link" aria-current="page">Descripción</a>
                        </li>
                        <li>
                            <a className="nav-link" aria-current="page">Piso</a>
                        </li>
                        <li>
                            <a className="nav-link" aria-current="page">No.</a>
                        </li>
                    </ul>
                </h2>

            </div>
        </div>
    );
};

export default Dashboard;