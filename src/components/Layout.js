import React, { Component } from "react"
import Slider from "react-slick";
import { Navbar } from "./Navbar"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./all.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import honda from "../images/companies/honda.png"
import kawa from "../images/companies/kawasaki.png"
import yamaha from "../images/companies/yamaha.png"
import suzuki from "../images/companies/suzuki.png"
import ktm from "../images/companies/ktm.png"
import auteco from "../images/companies/auteco.png"

library.add(faArrowRight)

export default class Layout extends Component {

    render() {

        const settings = {
            arrows: true,
            autoplay: true,
            className: "slide",
            dots: true,
            fade: true,
            infinite: true,
            pauseOnHover: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (<div className="layout">
            <Navbar></Navbar>

            <main>
                {/* <div className="hero-image">
                </div> */}
                <Slider {...settings}>
                    <div>
                        <div className="hero1">
                            <div className="hero-container">
                                <div className="hero-text">
                                    <h1>MUEVE TU NEGOCIO</h1>
                                    <p>Incrementando tu flujo de caja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hero2">
                            <div className="hero-container">
                                <div className="hero-text">
                                    <h1>DESCUBRE CÓMO PUEDES</h1>
                                    <h1>GANAR MÁS DINERO</h1>
                                    <p>con lo que tienes hoy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>

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
                            <span className="arrow">
                                <FontAwesomeIcon color="$ECECEC" icon="arrow-right"></FontAwesomeIcon>
                            </span>
                            <span className="explore">EXPLORA EL DEMO</span>
                        </div>
                    </section>
                    <section className="services">
                        <h5 className="subtitle">PUEDES CONTAR CON:</h5>
                        <div className="services-list">
                            <div className="service">
                                <h3>Consultoría</h3>
                                <p>Conéctamos el inventario con tu caja para que tengas más dinero disponible</p>
                                <ul>
                                    <li>Descubrimos OPORTUNIDADES</li>
                                    <li>Metodología a la medida</li>
                                    <li>Te entregamos resultados de alto impacto</li>
                                </ul>
                                <span>logo</span>
                            </div>
                            <div className="service">
                                <h3>Conteo de Inventarios</h3>
                                <p>Tu negocio NO PARA en ningún momento </p>
                                <ul>
                                    <li>Metodología innovadora de conteo</li>
                                    <li>Personal interno o externo</li>
                                    <li>Sistema de sticker</li>
                                </ul>
                                <span>logo</span>
                            </div>
                            <div className="service">
                                <h3>Talleres y Cursos</h3>
                                <p>Tips cortos y EFECTIVOS</p>
                                <button>DESCUBRE LOS TIPS!!</button>
                                <span>logo</span>
                            </div>
                        </div>
                    </section>
                    <section className="customers">
                        <h5 className="subtitle">
                            ALGUNAS EMPRESAS CON LAS QUE HEMOS TRABAJADO
                    </h5>
                        <ul>
                            <li><img src={honda} alt="honda" /></li>
                            <li><img src={kawa} alt="kawasaki" /></li>
                            <li><img src={yamaha} alt="yamaha" /></li>
                            <li><img src={suzuki} alt="suzuki" /></li>
                            <li><img src={ktm} alt="ktm" /></li>
                            <li><img src={auteco} alt="auteco" /></li>
                        </ul>
                    </section>
                </div>
            </main>
            <footer></footer>
        </div>
        )
    }
}
