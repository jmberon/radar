import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

const ListLink = props => (
    <li>
        <Link to={props.to} state={{ type: props.type }}>{props.children}</Link>
    </li>
)


function Navbar() {

    const [isCollapsed, toggleNav] = useState(true);

    return (
        <header>
            <Link className="logo" to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <img src={logo} alt="Radar, Control en Movimiento"></img>
            </Link>
            <nav>
                <ul>
                    <ListLink to="/">Inicio</ListLink>
                    <ListLink to="/posts/" type="tips">Tips</ListLink>
                    <ListLink to="/posts/" type="noticias">Noticias</ListLink>
                    <span>
                        <FontAwesomeIcon icon="bars" size="lg" color="#5D5D5D" onClick={() => toggleNav(!isCollapsed)}></FontAwesomeIcon>
                    </span>
                </ul>
            </nav>
            {!isCollapsed && <ul className="responsiveNav">
                <ListLink to="/">Inicio</ListLink>
                <ListLink to="/posts/" type="tips">Tips</ListLink>
                <ListLink to="/posts/" type="noticias">Noticias</ListLink>
            </ul>}
        </header>
    );
}

export { Navbar }