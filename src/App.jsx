import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// js
import 'bootstrap/dist/js/bootstrap.bundle.js'




function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting='Bienvenidos al nuevo Ecommerce "Allegro" '/> 
    </>
  )
}

export default App
