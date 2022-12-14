import React, {useState} from "react";

const FormLogin = (props) => {
    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");

    const onChange = (e) => {
        console.log(e.target.name);
        if(e.target.name === "user"){
            setUser(e.target.value);
        }
        else if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    };

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(user === "admin" && password === "1234"){
            alert("Bienvenido");
            props.cambiarInicio(true);
        }
        else{
            alert("Datos Erroneos");
        }
    };

    return(
        <>
        <div className="d-flex justify-content-center">
            <form action="" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="user">Usuario</label>
                    <input 
                        type="text" 
                        name="user" 
                        id="user" 
                        value={user} 
                        onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password} 
                        onChange={onChange}></input>
                </div>
                <button>Confirmar</button>
            </form>
        </div>
            
        </>
    );
};

export default FormLogin;