import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Home.module.css'

export default function Index(){
    return (  
        <>
            <Head>
                    <title>Ferrari</title>
            </Head>
            <Header />
            <main id={ styles.home }>
                
                <hr className="italy" />

                <header>
                    
                    <h1>SF90 Stradale</h1>
                    <a href="/galeria.html">Detalhes</a>

                </header>

                <section className={ styles.gallery}>

                    <figure>
                        <img src="/images/photos/espostivas-amarela-375x250.jpg" alt="Ferrari Amarela" />	
                        <figcaption>
                            <h2>Esportivas</h2>
                            <p>Ferrari F1000</p>
                        </figcaption>
                    </figure>

                    <figure>
                        <img src="/images/photos/esportivas-interior-375x250.jpg" alt="Ferrari Interior" />	
                        <figcaption>
                            <h2>Esportivas</h2>
                            <p>Ferrari F1000</p>
                        </figcaption>
                    </figure>

                    <figure>
                        <img src="/images/photos/espostivas-azul-375x250.jpg" alt="Ferrari Azul" />	
                        <figcaption>
                            <h2>Esportivas</h2>
                            <p>Ferrari F1000</p>
                        </figcaption>
                    </figure>

                </section>

                <section className= { styles.inspiration }>

                    <div></div>

                    <div className={ styles.text}>
                        <h2>Inspirando<span>Gerações</span></h2>
                        <hr />
                        <p>Assertively iterate enterprise-wide portals through synergistic products. Efficiently build adaptive schema…</p>
                        <p className={ styles.complete}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab itaque nesciunt sapiente optio nobis atque veritatis rem aut ea expedita, reprehenderit fugit reiciendis, minus quod obcaecati inventore at placeat provident!</p>
                    </div>

                    <div className={` ${styles.car} ${styles.animated} `}>
                        <div className={ styles.wheel }></div>
                    </div>

                </section>

                <section className={styles.know}>

                    <div className={styles['know-1']}>
                        <h1>Conheça a Máquina</h1>
                        <p>Assertively iterate enterprise-wide portals through synergistic products. Efficiently build adaptive schemas after transparent quality vectors. Phosfluorescently optimize competitive resources after extensive convergence. Rapidiously optimize high-quality meta-services via distributed architectures. Credibly deliver 24/365.</p>
                        <a href="/gallery.html">Detalhes</a>
                    </div>

                    <img src="/images/top-view.jpg" alt="Ferrari Top View" />


                    <div className={ styles['know-2']}>
                        
                        <dl>
                            <dt>Motorização</dt>
                            <dd>Assertively iterate enterprise-wide portals through synergistic products.</dd>

                            <dt>Desempenho</dt>
                            <dd>Assertively iterate enterprise-wide portals through synergistic products.</dd>

                            <dt>Conforto</dt>
                            <dd>Assertively iterate enterprise-wide portals through synergistic products.</dd>
                        </dl>

                    </div>

                </section>

            </main>
            <Footer />
    </>

    )
}