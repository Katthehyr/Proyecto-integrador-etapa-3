import { useEffect } from "react"

const useTitulo = ( textoTitulo = 'sin titulo') => {

    useEffect (() => {
        document.title =  `Educacion IT - ${textoTitulo}`}, [] 
    )
}

export default useTitulo