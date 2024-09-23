import React from "react"
import { NavLink } from "react-router-dom"

const NavItem = ({item}) => {
    return (
        <li className="nav-bar_nav-item">
              <NavLink to={item.ruta} className="nav-bar_nav-link">
                {item.nombre}
              </NavLink>
              </li>
    )
}

export default NavItem