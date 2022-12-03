import React, {useState} from "react";
import Dashboard from "./Dashboard";

const NavCom = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./Dashboard.js">Inicio</a>
                </li>
            </ul>
        </div>
    );
};

export default NavCom;