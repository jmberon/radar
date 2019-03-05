import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";

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
                <button className="burger" onclick="myFunction()">
                    <i className="fa fa-bars">👀</i>
                </button>
            </ul>
        </nav>
    </header>
)

export { Navbar }