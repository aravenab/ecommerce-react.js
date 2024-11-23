import React,{useEffect, useState} from 'react'
import FetchList from './FetchList'
import Eventos from '../EjemploEventos/Eventos'


const FetchContainer = () => {

// declarar estados
    const [personajes, setPersonajes] = useState([])
    const[error, setError] =useState(null)

    // {
    //     "characters": "https://rickandmortyapi.com/api/character",
    //     "locations": "https://rickandmortyapi.com/api/location",
    //     "episodes": "https://rickandmortyapi.com/api/episode"
    //   }
useEffect(()=>{
    // primer then, sirve para traer los datos
    fetch('https://rickandmortyapi.com/api/character')
    .then((res)=>res.json()) // con el .json traduzco la data a un formato legible
    .then((result)=>setPersonajes(result.results))
    .catch((error)=>setError(true))
},[])


console.log(personajes)
  return (
    <div>
      <Eventos/>
        {error && <p>Disculpe las molestias se rompio todo chicos</p>}
        {/* {personajes.map((personaje)=><p key={personaje.id}>{personaje.name}</p>)} */}
        <FetchList personajes = {personajes}/>
    </div>
  )
}

export default FetchContainer