import './Header.scss'

const Header = () => {
    return (
        <header className="main-header">
        <input type="checkbox" id="menu" className="menu-toggle" />
        <label htmlFor="menu" className="menu-button">
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
        </label>
        <nav className="nav-bar">
          <ul className="nav-bar_nav-list">
            <li className="nav-bar_nav-item">
              <a href="#" className="nav-bar_nav-link">Inicio</a>
            </li>
            <li className="nav-bar_nav-item">
              <a href="#" className="nav-bar_nav-link">Nosotros</a>
            </li>
            <li className="nav-bar_nav-item">
              <a href="#" className="nav-bar_nav-link">Contacto</a>
            </li>
            <li className="nav-bar_nav-item">
              <a href="#" className="nav-bar_nav-link">Alta</a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <form action="#" className="search-bar_form-container">
            <label htmlFor="busqueda" className="search-bar_form-label">Buscar:</label>
            <input type="search" placeholder="Buscar..." className="search-bar_form-search" id="busqueda" />
            <input type="submit" className="search-bar_form-submit" value="Buscar" />
          </form>
          <div className="search-bar_carrito-container">C</div>
          
        </div>
      </header>
    )
}

export default Header