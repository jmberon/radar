import React from "react";
import { Link } from "gatsby";
import styles from "./Navbar.module.css"
import logo from "../images/logo.png"

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


const Navbar = () => (
    <header>
        <Link className={styles.logo} to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={logo} alt="Radar, Control en Movimiento"></img>
        </Link>
        <nav>
            <ul>
                <ListLink to="/">Inicio</ListLink>
                <ListLink to="/tips/">Tips</ListLink>
                <ListLink to="/news/">Noticias</ListLink>
            </ul>
        </nav>
    </header>
)

export { Navbar }