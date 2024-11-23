import React, { useEffect } from 'react'
import { getProducts } from '../mock/data'

const EjemploPromise = () => {
    let error = false
    const Simu = new Promise ((resolve,reject)=>{
        if(error){
            reject('no hay hamburguesa')
        }else{
            resolve('no hay hamburguesa')
        }
    })

    const fakeApi = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(error){
                reject('problema')
            }else{
                resolve([{name:'zapatos', price:3, stock:4},{name:'polera', price:32, stock:41}])
            }
        },3000)
      
    })

    console.log(Simu)
    useEffect(()=>{
        Simu.then((res)=>console.log(res, 'res'))
    },[])
    useEffect(()=>{
        fakeApi
        .then((res)=>console.log(res, 'res'))
        .catch((error)=>console.log(error))
    },[])
    useEffect(()=>{
        getProducts()
        .then((res)=>{console.log('respuesta:', res)})
        .catch((error)=>{console.log( error)})
    })
  return (
    <div>
        EjemploPromise
            <p>hola</p>
    </div>
  )
}

export default EjemploPromise