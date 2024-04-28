import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaProductos from './components/ListarProductos';
import EditarProducto from './components/EditarProducto';
import CrearProducto from './components/CrearProducto';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaProductos/>} />
          <Route path='/crear' element={<CrearProducto/>} />
          <Route path='/editar/:id' element={<EditarProducto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
