import React from "react";
import { Link } from "gatsby";
import styles from "./Navbar.module.css"

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


const Navbar = () => (
    <header>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>RADAR</h3>
        </Link>
        <ul>
            <ListLink to="/">Inicio</ListLink>
            <ListLink to="/tips/">Tips</ListLink>
            <ListLink to="/news/">Noticias</ListLink>
        </ul>
    </header>
)

export { Navbar }