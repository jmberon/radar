import React from "react"
import { Navbar } from "./Navbar"
import "./all.scss"


export default ({ children }) => (
    <div className="layout">
        <Navbar></Navbar>

        <main>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Mueve tu negocio</h1>
                    <p>Incrementando tu flujo de caja</p>
                </div>
            </div>



        </main>

        <footer></footer>
    </div>
)
