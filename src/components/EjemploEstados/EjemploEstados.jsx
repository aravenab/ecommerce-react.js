import React, {useState} from 'react'

const EjemploEstados = () => {
    const [text, setText] = useState('hola Gente')
    const cambiarTexto = () =>{
        setText('chao gente')
    }
  return (
    <div>
        <p>{text}</p>
        <button className='btn btn-primary' onClick={cambiarTexto}> Cambiar Texto con EjemploEstado.jsx</button>
    </div>
  )
}

export default EjemploEstados