import styles from '../components/Header.module.css'
import React from 'react'
export default function Nav(props){
    return (
        <nav className={`${styles.menu} ${styles[props.isOpen]}`}>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/our-history">Nossa História</a></li>
                    <li><a href="/gallery">Galeria</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </div>
            <a href="/register" className={ styles['btn-register']}>
                Registre-se / Login
            </a>
        </nav>
    )
}