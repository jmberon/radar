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

            <div className="main">
                <section className="figures">
                    <h5>
                        Puedes aumentar tu dinero disponible en caja, monitoreando tu inventario en tiempo real SIN PARAR TU NEGOCIO
                    </h5>
                    <ul>
                        <li>
                            <div className="card">
                                <b className="digits">11</b>
                                <span>AÑOS</span>
                                <span>de investigación</span>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <b className="digits">150</b>
                                <span>Negocios de motos y</span>
                                <span>autopartes estudiados</span>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <b className="digits">3</b>
                                <span>Dimensiones estudiadas</span>
                                <span>Procesos/Personas/</span>
                                <span>Infraestructura</span>
                            </div>
                        </li>
                    </ul>
                    <p>
                        ¡Desarrollamos un modelo PRÁCTICO, FÁCIL y RÁPIDO para gestionar compras e inventarios que realmente te sorprenderá!
                    </p>
                    <div className="download-app">
                        <button type="button">APP</button>
                        <span className="marketing">Construimos una PODEROSA APP para determinar TODO lo que impacta en tu negocio</span>
                        <span className="arrow"></span>
                        <span className="explore">EXPLORA EL DEMO</span>
                    </div>
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
