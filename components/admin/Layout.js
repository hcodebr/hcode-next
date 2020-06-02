import styles from './Layout.module.css'
import Header from "./Header"
import Footer from "./Footer"
import { useState } from 'react'

export default function Layout({ children }) {

    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className={[styles.content, menuOpened ? styles.open : ''].join(' ')}>

            <Header onMenuToggle={menuState => setMenuOpened(menuState)} />

            <main className={styles.main}>

                {children}

            </main>

            <Footer menuState={menuOpened} />

        </div>
    )

}