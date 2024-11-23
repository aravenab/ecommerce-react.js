import React, { useState } from 'react';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const enviarDatos = (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página
        const data = { nombre, apellido }; 
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={enviarDatos}>
                <div>
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        placeholder="Ingrese su nombre" 
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Apellido</label>
                    <input 
                        type="text" 
                        placeholder="Ingrese su apellido" 
                        onChange={(e) => setApellido(e.target.value)} 
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
