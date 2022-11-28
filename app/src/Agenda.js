import React from "react";

const FormCita = () => {
    return(
        <>
            <form>
                <h2>Ingresa tus datos</h2>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" id="name"></input>
                </div>
                <div>
                    <label>Apellido Paterno</label>
                    <input type="text" name="lastname" id="lastname"></input>
                </div>
                <div>
                    <label>Apellido Materno</label>
                    <input type="text" name="lastname" id="lastname"></input>
                </div>
                <div>
                    <p>Escoge tu sexo:</p>
                        <input type="radio" name="sex" id="sex"></input>
                        <label>Masculino</label>
                        <input type="radio" name="sex" id="sex"></input>
                        <label>Femenino</label>
                </div>
                <div>
                    <label>Edad</label>
                    <input type="text" name="age" id="age"></input>
                </div>
                <button>Confirmar</button>
            </form>
        </>
    );
};

export default FormCita;