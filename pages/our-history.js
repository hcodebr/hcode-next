import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/OurHistory.module.css'

export default function OurHistory(){
    return (
        <body>
            <Header />
            <main id={styles['our-history']} className={styles.page}>
                    <hr className="italy" />
                <div className={ styles['page-header']}>
                    <header>
                        <ul>
                            <li>#legado</li>
                        </ul>
                        <h1>Nossa História</h1>
                    </header>
                </div>
                <div className={styles.columns}>
                    <div className={ styles.column}>
                        <h2 className={ styles.green}>Nossa História</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa et officia quaerat repellat vel quod mollitia, quibusdam recusandae laboriosam sed tenetur quos fuga tempore esse nihil aliquid eos ipsa?</p>
                    </div>
                    <div className={ styles.column}>
                        <h2 className={ styles.gray}>Nossa História</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa et officia quaerat repellat vel quod mollitia, quibusdam recusandae laboriosam sed tenetur quos fuga tempore esse nihil aliquid eos ipsa?</p>
                    </div>
                    <div className={ styles.column}>
                        <h2 className={ styles.red}>Nossa História</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa et officia quaerat repellat vel quod mollitia, quibusdam recusandae laboriosam sed tenetur quos fuga tempore esse nihil aliquid eos ipsa?</p>
                    </div>
                </div>
                <div className={ styles.ceo}>
                    <figure>
                        <picture>
                            <source srcSet="images/ceo@3x.png" media="(min-width: 750px)" />
                            <source srcSet="images/ceo@2x.png" media="(min-width: 375px)" />
                            <img src="/images/ceo.png" alet="Louis C. Camilleri" />
                        </picture>
                        <figcaption>
                            <small>CEO</small>
                            Louis C. Camilleri
                        </figcaption>
                    </figure>
                    <section className={ styles.text}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio, veritatis possimus voluptas, corporis quae delectus fugit architecto, et doloribus ex consequatur? Nisi quos earum laborum aspernatur, veniam iure incidunt.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio, veritatis possimus voluptas, corporis quae delectus fugit architecto, et doloribus ex consequatur? Nisi quos earum laborum aspernatur, veniam iure incidunt.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio, veritatis possimus voluptas, corporis quae delectus fugit architecto, et doloribus ex consequatur? Nisi quos earum laborum aspernatur, veniam iure incidunt.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </body>
    )
}