import styles from '../components/Header.module.css'

export default function Header(){
    return (

    <>
        
        <header id={styles.header}>
                <div id={ styles.overlay} data-close="menu"></div>
                <a href="/"><img src="images/logo.svg" id="logo" alt="Logo" /></a>
                <button type="button" id={ styles['btn-open']}>
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
                <nav className={ styles.menu}>
                    <div>
                        <button type="button" id={ styles['btn-close']} data-close="menu">
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
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/our-history">Nossa História</a></li>
                            <li><a href="/gallery">Galeria</a></li>
                            <li><a href="/contact">Contato</a></li>
                        </ul>
                    </div>
                    <a href="register.html" className={ styles['btn-register']}>
                        Registre-se / Login
                    </a>
                </nav>
            </header>
    </>
    )
}