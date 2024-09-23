import './Header.scss'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <header className="main-header">
        <input type="checkbox" id="menu" className="menu-toggle" />
        <label htmlFor="menu" className="menu-button">
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
        </label>
       
        <Navbar />

        <SearchBar />

      </header>
    )
}

export default Header