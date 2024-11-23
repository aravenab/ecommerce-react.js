import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// js
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ComponenteConChildren from './components/EjemploChildren/ComponenteConChildren';
import EjemploEstados from './components/EjemploEstados/EjemploEstados';
import EjemploUseEffect from './components/EjemploUseEffect/EjemploUseEffect';
import EjemploPromise from './components/EjemploPromise/EjemploPromise';
import FetchContainer from './components/EjemploFetchContainer/FetchContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Eventos from './components/EjemploEventos/Eventos';
import Form from './components/EjemploEventos/Form';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <ItemDetail/>
    {/* <Eventos/> */}
    {/* <Form/> */}
    <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos' />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenidos' />} />
        <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
      <Route path='*'  element ={ <Error/>} />
    </Routes>
    {/* <FetchContainer/> */}
    {/* <ComponenteConChildren>
      <p>Holaaaa, probando childrens app.jsx</p>
    </ComponenteConChildren>
    <EjemploEstados/>
    <EjemploUseEffect/>
    <EjemploPromise/> */}
    </BrowserRouter>
  )
}

export default App
