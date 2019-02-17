import React from "react"
import { Navbar } from "./Navbar"
import styles from "./Layout.module.css"


export default ({ children }) => (
    <div className={styles.container}>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>
)
