import React, { useState } from 'react'

const Eventos = () => {
    const [name,setName] = useState('')
    const nameHandler = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const noVocales = (e) => {
      if ('aeiou'.includes(e.key.toLowerCase())){
        e.preventDefault()
      }
      console.log(e.target.value)
  }
  return (
    <div>
        <input 
        type='text' 
        placeholder='Completar con nombre completo'
        name='Nombre'
        onChange={nameHandler}
        />

<input 
        type='text' 
        placeholder='no vocales'
        name='Nombre'
        onKeyDown={noVocales}
        />
    </div>
  )
}

export default Eventos