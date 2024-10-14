import './Tabla.scss'
import React, { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../context/ProductosContext"

const Tabla = () => {

    const { productos } = useContext(ProductosContext)
    console.log(productos)

    return (
        <table className="tabla-alta">
            <thead>
                <tr>
          
            <th>Foto</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Envío</th>
            <th>Acciones</th>

            </tr>
            </thead>

            <tbody>

            {
          productos && productos.map( (producto, idx) => (
            <TablaFila key={producto.id+idx} producto={producto} />
          ))

        }
    

               

            </tbody>

      </table>
    )
}

export default Tabla