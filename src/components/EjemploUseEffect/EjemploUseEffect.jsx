import React, {useEffect, useState} from 'react'

const EjemploUseEffect = () => {
    const [on, setOn] = useState(true)
    // se ejecuta siempre
    useEffect(()=>{
        console.log(`El useEffect que siempre se ejecuta`)
    })
    // se ejecuta una vez
    useEffect(()=>{
        console.log(`El useEffect que se ejecuta una vez`)
    },[])
    // ala escucha de un cambio en particular
    useEffect(()=>{
        console.log(`El useEffect ala escucha de un cambio en particular`)
    },[on])
    const stateHandler = () => {
        setOn(!on)
    }
  return (
    <div>
        <button className='btn btn-danger' onClick={stateHandler}> Click </button>
    </div>
  )
}

export default EjemploUseEffect