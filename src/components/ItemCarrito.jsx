import React, { useContext } from "react";
import CarritoContext from "../context/CarritoContext";

const ItemCarrito = ({producto}) => {

    const {eliminarProductoAlCarritoContext} = useContext(CarritoContext)

    const handleEliminar = (id) => {
        console.log('Eliminando el producto...')
        eliminarProductoAlCarritoContext(id)
    }

    return (
        <tr>
            <td>
                <img src={producto.foto} alt={producto.nombre} width="50px" />
            </td>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.precio}</td>
            <td>
                <button onClick={() => handleEliminar(producto)}>Eliminar</button>
            </td>

        </tr>
    )


}

export default ItemCarrito