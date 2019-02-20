import React from "react"
import { Navbar } from "./Navbar"
import styles from "./Layout.module.css"


export default ({ children }) => (
    <div>
        <Navbar></Navbar>

        <main>

            <div className={styles.heroImage}>
                <div className={styles.heroText}>
                    <h1>Mueve tu negocio</h1>
                    <p>Incrementando tu flujo de caja</p>
                </div>
            </div>



        </main>

        <footer></footer>
    </div>
)
