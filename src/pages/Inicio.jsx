import { useContext } from 'react';

import './Inicio.scss'
import Card from '../components/Card';
import useTitulo from '../hooks/useTitulo';
import ProductosContext from '../context/ProductosContext';


const Inicio = () => {

  const {productos} = useContext(ProductosContext)

  console.log(productos)

  useTitulo(`Inicio`)

  return (
  <main>
    <section className='section-cards'>
     
      <header>
         <h1> Anime Store </h1>
          </header>

          <div className="cards-container" id="contenedor-cards">


          {productos && productos.map((producto) => ( 
            
            <Card key={producto.id} producto={producto} />
          )
        )
        }

      

      </div>

       </section>


  </main>

  );
};

export default Inicio;
