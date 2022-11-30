import React, {useState} from "react";

const FormCita = (props) => {
    const[name, setName] = useState("");
    const[lastname1, setLastName1] = useState("");
    const[lastname2, setLastName2] = useState("");
    const[sex, setSex] = useState("");
    const[age, setAge] = useState("");
    const[examen, setExamen] = useState("");

    const onChange = (e) =>{
        console.log(e.target.name);
        if(e.target.name === "name"){
            setName(e.target.value);
        }
        else if(e.target.name === "lastname1"){
            setLastName1(e.target.value);
        }
        else if(e.target.name === "lastname2"){
            setLastName2(e.target.value);
        }
        else if(e.target.name === "sex"){
            setSex(e.target.value);
        }
        else if(e.target.name === "age"){
            setAge(e.target.value);
        }
        else if(e.target.name === "examen"){
            setExamen(e.target.value);
        }
    }

    const onSubmit = (e) =>{
        console.log(e);
        e.preventDefault();
        if(name && lastname1 && lastname2 != null){
            alert("Datos correctos");
            props.cambiarAgenda(true);

        }
        else{
            alert("Faltan Datos");
        }
    }

    return(
        <>
            <form action="" onSubmit={onSubmit}>
                <h2>Ingresa tus datos</h2>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" id="name" value={name} onChange={onChange}></input>
                </div>
                <div>
                    <label>Apellido Paterno</label>
                    <input type="text" name="lastname1" id="lastname1" value={lastname1} onChange={onChange}></input>
                </div>
                <div>
                    <label>Apellido Materno</label>
                    <input type="text" name="lastname2" id="lastname2" value={lastname2} onChange={onChange}></input>
                </div>
                <div>
                    <p>Escoge tu sexo:</p>
                        <input type="radio" name="sex" id="sex" value={sex} onChange={onChange}></input>
                        <label>Masculino</label>
                        <input type="radio" name="sex" id="sex" value={sex} onChange={onChange}></input>
                        <label>Femenino</label>
                </div>
                <div>
                    <label>Edad</label>
                    <input type="text" name="age" id="age" value={age} onChange={onChange}></input>
                </div>
                <div>
                    <h1>Examen Clinico</h1>
                    <p>Escogue el tipo de examen:</p>
                </div>
                <div>
                <select name="examen" id="examen" value={examen} onChange={onChange}>
                    <option>Biometría hemática completa</option>
                    <option>Topografía corneal</option>
                    <option>Radiografía</option>
                    <option>Biopsia</option>
                    <option>Consulta médica general</option>
                </select>
                </div>
                <button>Agendar</button>
            </form>
        </>
    );
};

export default FormCita;