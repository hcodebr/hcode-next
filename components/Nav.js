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
    return (
        <nav className={`${styles.menu} ${styles[props.isOpen]}`}>
            <div>
                <ul>
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
        </nav>
    )
}