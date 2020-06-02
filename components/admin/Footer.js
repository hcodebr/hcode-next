import styles from './Footer.module.css'

export default function Footer({ menuState }) {

    return (
        <footer id={styles.footer} className={menuState ? styles.open : ''}>
            <p className={styles.rights}>2020 © Hcode. All rights reserved.</p>
        </footer>
    )

}