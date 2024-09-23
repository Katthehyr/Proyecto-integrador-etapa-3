import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";
import { compileString } from "sass";


const ProductosContext = createContext()

const ProductosProvider = ({children} ) =>  {

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect (() => {

        getAllProductos()

    }, [])

    const getAllProductos= async () => {
        try {

            const prods = await helperPeticionesHttp(url, {})
            console.log(prods)
            setProductos(prods)
            
        } catch (error) {

            console.error ('[getAllProductos]',error);
            
        }
    }
   
        const crearProductoContext = async (nuevoProducto) => {


            const options = {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(nuevoProducto)
            }
            
            const newProducto = await helperPeticionesHttp(url, options)

            
            console.log(newProducto)

            setProductos([...productos, newProducto])


        }


        const actualizarProductoContext = async (productoEditado) => {
            console.log(productoEditado)
            try {

                const options = {
                    method:'PUT',
                    headers: {'content-type' : 'application/json' },
                    body: JSON.stringify(productoEditado)

                }

                const urlEdicion = url + productoEditado.id

                const editedProduct = await helperPeticionesHttp(urlEdicion, options)

                const nuevoEstadoProductos = productos.map( producto => producto.id === editedProduct.id ? productoEditado : producto

                )

                setProductos(nuevoEstadoProductos)

            } catch (error) {
                console.error('[actualizarProductoContext]', error)
            }
        }
    




    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoAEditar,
        setProductoAEditar
    };
   
    return (
    <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>

)

 }

 export { ProductosProvider }
 export default ProductosContext