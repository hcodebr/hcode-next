import styles from '../components/Footer.module.css'

export default function Footer(){
    return(

        <footer id={ styles.footer}>
                <button type="button">
                    <img src="images/icon-arrow-up.svg" alt="up" />
                </button>
                <div className={styles.columns}>
                    <div>
                        <ul className={ styles.links}>
                            <li className={ styles.titles}>Links</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/our-history">Nossa História</a></li>
                            <li><a href="/gallery">Galeria</a></li>
                            <li><a href="/contact">Contato</a></li>
                        </ul>
                        <ul>
                            <li className={ styles.title }>Contato</li>
                            <li>E-mail: support@ferrari.it</li>
                            <li className={ styles.social }>
                                <a href="#"><img src="images/facebook.svg" alt="Facebook"/></a>
                                <a href="#"><img src="images/twitter.svg" alt="Twitter"/></a>
                                <a href="#"><img src="images/youtube.svg" alt="YouTube"/></a>
                                <a href="#"><img src="images/instagram.svg" alt="Instagram"/></a>
                            </li>
                        </ul>
                    </div>
                    <a href="/"><img src="images/ferrari-footer.svg" alt="Logo" className={ styles.logo} /></a>
                </div>
                <p>2020 © Hcode. All rights reserved.</p>
            </footer>
    )
}