import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Gallery.module.css'
//import React from 'react'


export default function Gallery(){

    return (
        //JSX fragment - Fragmento JSX - <> </>
        <>
            <Header />
            <main id={ styles.gallery} className={styles.page}>
                    <hr className="italy" />
                <div className={styles['page-header']}>
                    <header>
                        <h1>Galeria</h1>
                    </header>
                </div>
                <section className={ styles.photos}>
                    <picture>
                        <source srcSet="images/photos/2014_dmc_ferrari_laferrari_fxxr_3-1920x1080@2x.png" media="(min-width: 750px)" />
                        <img src="images/photos/2014_dmc_ferrari_laferrari_fxxr_3-1920x1080.png" alt="Ferrari" />
                    </picture>
                    <picture>
                        <source srcSet="images/photos/2014_ferrari_california_t_6-1920x1080@2x.png" media="(min-width: 750px)" />
                        <img src="images/photos/2014_ferrari_california_t_6-1920x1080.png" alt="Ferrari" />
                    </picture>
                    <picture>
                        <source srcSet="images/photos/2016_ferrari_488_spider_2-1920x1080@2x.png" media="(min-width: 750px)" />
                        <img src="images/photos/2016_ferrari_488_spider_2-1920x1080.png" alt="Ferrari" />
                    </picture>
                    <picture>
                        <source srcSet="images/photos/ferrari_formula_1_2015-1920x1080@2x.png" media="(min-width: 750px)" />
                        <img src="images/photos/ferrari_formula_1_2015-1920x1080.png" alt="Ferrari" />
                    </picture>
                    <picture>
                        <source srcSet="images/photos/ferrari_fxx_k-1920x1080@2x.png" media="(min-width: 750px)" />
                        <img src="images/photos/ferrari_fxx_k-1920x1080.png" alt="Ferrari" />
                    </picture>
                    <picture>
                        <source srcSet="images/photos/ferrari_hd_widescreen-1920x1200@2x.png" media="(min-width: 750px)" />
                        <img src="images/photos/ferrari_hd_widescreen-1920x1200.png" alt="Ferrari" />
                    </picture>
                </section>
            </main>            
            <Footer />
        </>
    )
}


/*
const Gallery = ()=> {
    return (
        <body>
            <Header />
            <Footer />
        </body>
    )
}

export default


*/
/*
class Gallery extends React.Component {
    render() {
        return (
            <body>
                <Header />
                <Footer />
            </body>

        )
    }
}

export default Gallery

*/




