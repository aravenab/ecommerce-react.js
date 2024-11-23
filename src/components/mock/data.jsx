const productos = [
    {
        id: '1',
        name: 'zapatos',
        price: 3,
        stock: 4,
        description: 'lorem ipsum asdasd', 
        img: 'https://picsum.photos/200',
        category: 'new arrivals'
    },
    {
        id: '2',
        name: 'poleras',
        price: 31,
        stock: 42,
        description: 'lorem ipsum asdasdasdasd', 
        img: './carrito-de-compras.png',
        category: 'equipamiento'
    },
    {
        id: '3',
        name: 'Pantalones',
        price: 31,
        stock: 42,
        description: 'lorem ipsum asdasdasdasd',
        img: 'https://picsum.photos/201',
        category: 'sale'
    }
];

export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve(productos)
            }
        }, 2000)
    })
}


// opcion sencila
// export const getOneProduct = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(!error){
//                 resolve(productos[1])
//             }else{
//                 reject('no hay data')
//             }
//         })
//     })
// }

// opcion dinamica
export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let onProduct = productos.find((item)=> item.id === Number(id))
                resolve(onProduct)
            }
        },2000)
    })
}