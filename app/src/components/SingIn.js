import React, {useState} from "react";

const FormSingIn = (props) => {
    const[newUser, setNewUser] = useState("");
    const[newPassword, setNewPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const onChange = (e) => {
        console.log(e.target.name);
        if(e.target.name === "newUser"){
            setNewUser(e.target.value);
        }
        else if(e.target.name === "newPassword"){
            setNewPassword(e.target.value);
        }
        else if(e.target.name === "confirmPassword"){
            setConfirmPassword(e.target.value);
        }
    };

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(newPassword === confirmPassword){
            alert("Usuario creado correctamente");
            props.cambiarRegistro(true);
        }
        else{
            alert("Las contraseñas no coinciden");
        }
    };

    return(
        <>
        <div className="d-flex justify-content-center">
            <form action="" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="newUser">Nuevo Usuario</label>
                    <input 
                        type="text" 
                        name="newUser" 
                        id="newUser" 
                        value={newUser} 
                        onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="newPassword">Nueva Contraseña</label>
                    <input 
                        type="password" 
                        name="newPassword" 
                        id="newPassword" 
                        value={newPassword} 
                        onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        value={confirmPassword} 
                        onChange={onChange}></input>
                </div>
                <button>Confirmar</button>
            </form>
        </div>
        </>
    );
};

export default FormSingIn;