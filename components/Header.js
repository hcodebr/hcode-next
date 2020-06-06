import styles from '../components/Header.module.css'
import React, {useState} from 'react'
import Nav from './Nav'

export default function Header(){

    const [open, setOpen] = useState('')
    

    const handleClick = ()=>{
        
        setOpen(open?'':'open-menu')
    }


    return (

    <>
        
        <header id={styles.header}>
                <div id={ styles.overlay} data-close="menu"></div>
<<<<<<< HEAD
                <a href="/"><img src="images/logo.svg" id={styles.logo} alt="Logo" /></a>
=======
                <a href="/"><img src="images/logo.svg" id="logo" alt="Logo" /></a>
>>>>>>> 4e63c8412cc67cffd3e9f036bc41a6ee6fe39ee5
                <button type="button" id={ styles['btn-open']} onClick={handleClick}>
                    <svg id="menu-black-18dp" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <style jsx>{`
                        #Caminho_216 {
                        fill: #000;
                        }
                        @media(prefers-color-scheme: dark){
                        #Caminho_216 {
                            fill: #FFF;
                        }
                        }
                        `}</style>
                        <path id="Caminho_215" data-name="Caminho 215" d="M0,0H32V32H0Z" fill="none"/>
                        <path id="Caminho_216" data-name="Caminho 216" d="M3,18H29V16H3Zm0-5H29V11H3ZM3,6V8H29V6Z" transform="translate(0 4)"/>
                    </svg>
                </button>
<<<<<<< HEAD
    <button type="button" id={ styles['btn-close']} data-close="menu" onClick={handleClick} className={styles[open]}>
=======
                <button type="button" id={ styles['btn-close']} data-close="menu" onClick={handleClick}>
>>>>>>> 4e63c8412cc67cffd3e9f036bc41a6ee6fe39ee5
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <style jsx>{`
                                #caminho {
                                    fill: #000;
                                }
                                @media(prefers-color-scheme: dark){
                                    #caminho {
                                    fill: #FFF;
                                    }
                                }
                                `}</style>
                                <path id="caminho" d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
                                <path d="M0,0H24V24H0Z" fill="none"/>
                            </svg>
                </button>


                <Nav isOpen={open} />
            </header>
    </>
    )
}