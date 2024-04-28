import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/producto/'

const EditarProducto = () => {

    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [stock, setStock] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const actualizar = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            descripcion: descripcion,
            precio: precio,
            stock: stock
        })
        navigate('/')
    }

    useEffect(() => {
        const mostrarProductoId = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescripcion(response.data.descripcion)
            setPrecio(response.data.precio)
            setStock(response.data.stock)
        }
        mostrarProductoId()
    }, [])


    return (
        <div>
            <h3>EditarProducto -- {id}</h3>
            <form onSubmit={actualizar}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Price</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>

    )
}

export default EditarProducto