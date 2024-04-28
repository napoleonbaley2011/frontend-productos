import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api';

const ListaProductos = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        mostrarProductos()
    }, [])

    const mostrarProductos = async () => {
        const response = await axios.get(`${endpoint}/productos`);
        setProductos(response.data);
        //console.log(response.data)
    }
    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/producto/${id}`)
        mostrarProductos()
      }
    return (
        <div>
            <div className="d-grid gap-2">
                <Link to="/crear" className="btn btn-success btn-lg mt-2 mb-2 text-white">Crear</Link>
            </div>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>
                                <Link to={`/editar/${producto.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteProduct(producto.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaProductos