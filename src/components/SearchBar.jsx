import React from "react"
import { Link } from 'react-router-dom';

const SearchBar = () => {

    return (
        <div className="search-bar">
<form action="#" className="search-bar_form-container">
  <label htmlFor="busqueda" className="search-bar_form-label">Buscar:</label>
  <input type="search" placeholder="Buscar..." className="search-bar_form-search" id="busqueda" />
  <input type="submit" className="search-bar_form-submit" value="Buscar" />
</form>
<div className="search-bar_carrito-container">
  <Link to="/carrito"> C </Link>
</div>

</div>


    )
}

export default SearchBar

