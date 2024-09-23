import React from "react";
import './TablaFila.scss'
import { useContext } from "react";
import ProductosContext from "../context/ProductosContext";

const TablaFila = ({ producto }) => {

  const {setProductoAEditar} = useContext(ProductosContext)

  const handleEditar = () => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }
  return (
    <tr>
      <td>{producto.nombre}</td>  
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.descripcion}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={handleEditar}>Editar</button>
        <button>Borrar</button>
      </td>
    </tr>
  );
};

export default TablaFila;