import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import "../hojas-de-estilo/form.css";

function Form(props) {

    const [input, setInput] = useState("");

    const manejarCambio = (e) => {
        setInput(e.target.value);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    };

    return(
        <form className="tarea-form" onSubmit={manejarEnvio}>
            <input 
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio} 
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    );
}

export default Form;