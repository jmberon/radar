import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


const Navbar = () => (
    <header>
        <Link className="logo" to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={logo} alt="Radar, Control en Movimiento"></img>
        </Link>
        <nav>
            <ul>
                <ListLink to="/">Inicio</ListLink>
                <ListLink to="/tips/">Tips</ListLink>
                <ListLink to="/news/">Noticias</ListLink>
                <span>
                    <FontAwesomeIcon icon="bars" size="lg" color="#5D5D5D" onclick="myFunction()"></FontAwesomeIcon>
                </span>
            </ul>
        </nav>
    </header>
)

export { Navbar }