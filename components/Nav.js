<<<<<<< HEAD
import styles from './Header.module.css'
import LinkItem from './LinkItem'
import Link from 'next/link'
import React from 'react'

export default function Nav(props){

    const LinkMenu = (itens) => (
        <li>
            <Link href={itens.link}>
                <a title={itens.label}>{itens.label}</a>
            </Link>
        </li>
    )
=======
import styles from '../components/Header.module.css'
import React from 'react'
export default function Nav(props){
>>>>>>> 4e63c8412cc67cffd3e9f036bc41a6ee6fe39ee5
    return (
        <nav className={`${styles.menu} ${styles[props.isOpen]}`}>
            <div>
                <ul>
<<<<<<< HEAD
                {LinkItem.map(
                    (item)=> (
                        <LinkMenu key={item.id} link={item.link} label={item.label} /> 
                    ))}    
                </ul>
            </div>
            
            <Link href="/register">
            <a title="Registre-se / Login" className={ styles['btn-register']}>
                Registre-se / Login
            </a>
            </Link>
=======
                    <li><a href="/">Home</a></li>
                    <li><a href="/our-history">Nossa História</a></li>
                    <li><a href="/gallery">Galeria</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </div>
            <a href="/register" className={ styles['btn-register']}>
                Registre-se / Login
            </a>
>>>>>>> 4e63c8412cc67cffd3e9f036bc41a6ee6fe39ee5
        </nav>
    )
}