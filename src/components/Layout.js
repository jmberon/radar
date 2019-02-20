import React from "react"
import { Navbar } from "./Navbar"
import "./all.scss"


export default ({ children }) => (
    <div className="layout">
        <Navbar></Navbar>

        <main>

            <div className="hero-image">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>MUEVE TU NEGOCIO</h1>
                        <p>Incrementando tu flujo de caja</p>
                    </div>
                </div>
            </div>

            <div class="main">
                <section className="figures">
                    <h5>
                        Puedes aumentar tu dinero disponible en caja, monitoreando tu inventario en tiempo real SIN PARAR TU NEGOCIO
                    </h5>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </section>
                <section className="services">

                </section>
                <section className="customers">

                </section>
            </div>
        </main>
        <footer></footer>
    </div>
)
