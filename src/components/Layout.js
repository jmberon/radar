import React, { Component } from "react"
import Slider from "react-slick";
import { Navbar } from "./Navbar"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./all.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import kawa from "../images/companies/kawasaki.png"
import casahonda from "../images/companies/CasaHonda.png"
import credibike from "../images/companies/Credibike.png"
import hondabogota from "../images/companies/HondaBogota.png"
import hondanarino from "../images/companies/HondaNarino.png"
import motoagil from "../images/companies/Motoagil.png"
import motomax from "../images/companies/Motomax.jpeg"
import motosas from "../images/companies/MotoSAS.png"
import motosymotos from "../images/companies/MotosYMotos.jpeg"
import servihonda from "../images/companies/Servihonda.jpeg"
import zafras from "../images/companies/Zafras.jpeg"

import consultoria from "../images/services/consultoria.png"
import inventarios from "../images/services/inventarios.png"
import talleres from "../images/services/talleres.png"

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
        const customerSettings = {
            arrows: true,
            autoplay: true,
            dots: false,
            fade: true,
            infinite: true,
            pauseOnHover: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (<div className="layout">
            <Navbar></Navbar>

            <main>
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
                                <img src={consultoria} alt="consultoria"></img>
                            </div>
                            <div className="service">
                                <h3>Conteo de Inventarios</h3>
                                <p>Tu negocio NO PARA en ningún momento </p>
                                <ul>
                                    <li>Metodología innovadora de conteo</li>
                                    <li>Personal interno o externo</li>
                                    <li>Sistema de sticker</li>
                                </ul>
                                <img src={inventarios} alt="inventarios"></img>
                            </div>
                            <div className="service">
                                <h3>Talleres y Cursos</h3>
                                <p>Tips cortos y EFECTIVOS</p>
                                <button>DESCUBRE LOS TIPS!!</button>
                                <img src={talleres} alt="talleres"></img>
                            </div>
                        </div>
                    </section>
                    <section className="customers">
                        <h5 className="subtitle">
                            ALGUNAS EMPRESAS CON LAS QUE HEMOS TRABAJADO
                        </h5>
                        <Slider {...customerSettings}>
                            <div>
                                <ul>
                                    <li><img src={casahonda} alt="casahonda" /></li>
                                    <li><img src={credibike} alt="credibike" /></li>
                                    <li><img src={hondabogota} alt="hondabogota" /></li>
                                    <li><img src={motoagil} alt="motoagil" /></li>
                                    <li><img src={motomax} alt="motomax" /></li>
                                    <li><img src={motosas} alt="motosas" /></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><img src={motosymotos} alt="motosymotos" /></li>
                                    <li><img src={servihonda} alt="servihonda" /></li>
                                    <li><img src={hondanarino} alt="hondanarino" /></li>
                                    <li><img src={zafras} alt="zafras" /></li>
                                    <li><img src={kawa} alt="kawasaki" /></li>
                                </ul>
                            </div>
                        </Slider>
                    </section>
                </div>
            </main>
            <footer></footer>
        </div>
        )
    }
}
