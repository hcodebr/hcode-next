import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Contact.module.css'

export default function Contact() {
    return (

        <>
            <Header />
            <main id={ styles.contact} className={styles.page}>
                    <hr className="italy" />
                <div className={ styles["page-header"]}>
                    <header>
                        <h1><span className={styles["show-desktop"]}>Fale Conosco</span><span className="hide-desktop">Contato</span></h1>
                    </header>
                </div>
                <section>
                    <form className={styles.form}>
                        <div className={ styles.fields}>
                            <div className={styles.field}>
                                <input type="text" name="name" id="name" />
                                <label for="name">Nome Completo</label>
                            </div>
                            <div className={styles.field}>
                                <input type="email" name="email" id="email" />
                                <label for="email">E-mail</label>
                            </div>
                        </div>
                        <div className={styles.field}>
                            <textarea name="message" id="message"></textarea>
                            <label for="message">Mensagem</label>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    <div id={ styles.map}></div>
                </section>
                <hr className={styles.divider} />
                <ul className={styles.contacts}>
                    <li>
                        <img src="images/google-place.svg" alt="Icon" />
                        <h3>OUR HEADQUARTERS</h3>
                        <p>Modena, Itália</p>
                    </li>
                    <li>
                        <img src="images/phone.svg" alt="Icon" />
                        <h3>SPEAK TO US</h3>
                        <p>(123) 456 7890</p>
                    </li>
                    <li>
                        <img src="images/skype.svg" alt="Icon" />
                        <h3>MAKE A VIDEO CALL</h3>
                        <p>FerrariOnSkype</p>
                    </li>
                    <li>
                        <img src="images/google-place.svg" alt="Icon" />
                        <h3>FOLLOW ON TWITTER</h3>
                        <p>2.3M Followers</p>
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    )
}