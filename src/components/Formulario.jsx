import { useContext, useEffect, useState } from "react";
import ProductosContext  from "../context/ProductosContext";



const Formulario = () => {
 
    
    const formInit= {
        id: null,
        nombre:'',
        precio:'',
        stock:'',
        descripcion:'',
        foto:'',
        envio: false,


    }

    
    const [form, setForm] = useState(formInit)

    const {crearProductoContext, actualizarProductoContext, productoAEditar, setProductoEditar} = useContext(ProductosContext)

    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInit)

    }, [productoAEditar])

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('handleSubmit')

        try {

            if( form.id === null) {
                console.log('Creando un producto')
               await crearProductoContext(form)
            } else {
                console.log('Actualizando producto')
               await actualizarProductoContext(form)
            }

            handleReset()
      
    } catch (error) {
      console.error('[handleSubmit]', error)
    }

  


    }

    const handleChange = e => {

        console.log(e.target.value)
        console.log(e.target.checked)
        console.log(e.target.type)

        const {type, name, checked, value} =e.target

        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })


    }

    const handleReset = () => {

        console.log('handleReset')
        setForm(formInit)
        setProductoEditar(formInit)


    }
    
    
    return (
        <>
        <h3>Agregar : Editar</h3>

        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="lbl-nombre">Nombre</label>
                <input 
                type="text" 
                name="nombre" 
                id="lbl-nombre" 
                value={form.nombre} 
                onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lbl-precio">Precio</label>
                <input 
                type="text" 
                name="precio" 
                id="lbl-precio" 
                value={form.precio} 
                onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lbl-stock">Stock</label>
                <input 
                type="text" 
                name="stock" 
                id="lbl-stock" 
                value={form.stock} 
                onChange={handleChange} />

            </div>
            <div>
                <label htmlFor="lbl-descripcion">Descripcion</label>
                <input 
                type="text" 
                name="descripcion" 
                id="lbl-descripcion" 
                value={form.descripcion} 
                onChange={handleChange} />

            </div>
            <div>
                <label htmlFor="lbl-foto">Foto</label>
                <input 
                type="text" 
                name="foto" 
                id="lbl-foto" 
                value={form.foto} 
                onChange={handleChange} />

            </div>
            <div>
                <label htmlFor="lbl-envio">Envio</label>
                <input 
                type="checkbox" 
                name="envio" 
                id="lbl-envio" 
                value={form.envio} 
                onChange={handleChange} />

            </div>

            <button type="submit">Guardar</button>
            <button type="reset" onClick={handleReset}>Limpiar</button>

        </form>
        </>
    )
}

export default Formulario;