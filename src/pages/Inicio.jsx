import './Inicio.scss'
import Card from '../components/Card';


const Inicio = () => {
  return (
  <main>
    <section className='section-cards'>
      <header>
        <h1>Anime Store</h1>
        <p>Tienda especializada en figuras de Anime</p>
      </header>

      <div className='cards-container' id='contenedor-cards'>

        <Card />

      </div>

       </section>


  </main>

  );
};

export default Inicio;
