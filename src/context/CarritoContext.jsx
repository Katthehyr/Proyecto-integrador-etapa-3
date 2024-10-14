import React from "react"
import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http"



const CarritoContext = createContext()

const CarritoProvider = ({children} ) =>  {

    const url = import.meta.env.VITE_BACKEND_CARRITO
    console.log(url)

   const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])  

   function elProductoEstaEnElCarrito (producto) {
    console.log('Analiza si el producto esta en el carrito')
    const nuevoArray = carrito.filter(prod => prod.id === producto.id).length
    return nuevoArray.length
   }

   function obtenerProductoDeCarrito(producto) {
    
    return (carrito.find(prod => prod.id === producto.id))

   }

   const agregarProductoAlCarritoContext = (producto) => {
    console.log('ya estoy en el agregar del contexto', producto)
   
    if (!elProductoEstaEnElCarrito(producto)) {
      
        producto.cantidad = 1
        agregarAlCarrito(producto)
    } else {
      
        const productoDeCarrito = obtenerProductoDeCarrito(producto)
        console.log(productoDeCarrito)
        productoDeCarrito.cantidad++
        window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }




    }

    const eliminarProductoAlCarritoContext = (id) => {
        console.log(id)
        eliminarDelCarrito(id)


    }

    const limpiarCarritoContext = () => {
        limpiarCarrito()
    }

    const guardarCarritoContext = async (carrito) => {
        console.log(carrito)
        console.log(JSON.stringify(carrito))

        try {

            const options = {
                method:'POST',
                Headers: {'Content-Type' : 'application/json' },
                body: JSON.stringify(carrito)

            }
            const losProductosCarrito = await helperPeticionesHttp(url, options)
                console.log(losProductosCarrito)
       
        } 
        catch (error) {
            console.error('[guardarCarritoContext]', error)
        }

    }

    const data = {
        carrito,
        agregarProductoAlCarritoContext,
        eliminarProductoAlCarritoContext,
        guardarCarritoContext,
        limpiarCarritoContext
 
    }
    
    
    
    return (
        <CarritoContext.Provider value={data}> {children} </CarritoContext.Provider>
    
    )

}

export { CarritoProvider }
export default CarritoContext