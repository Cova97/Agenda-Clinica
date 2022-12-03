import React, {useState} from "react";
import NavDash from "./NavDash";

const Dashboard = () => {
    return (
        <div>
            <NavDash/>
            <div></div>
            <div>
                <h1>Citas agendadas</h1>
                <h2>
                    <ul className="nav flex-column flex-sm-row">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page">Hora</a>
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