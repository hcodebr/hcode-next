import { useRouter } from 'next/router'
import HeaderTitle from '../../../components/admin/HeaderTitle'
import Card from '../../../components/admin/Card'
import styles from '../../../components/admin/UserEdit.module.css'
import Button from '../../../components/admin/Button'
import Layout from '../../../components/admin/Layout'

export default function Users() {

    const router = useRouter()
    const { id } = router.query // Selecionando o ID do usuário pela URL

    const userObj = {
        id: 9,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }
    
    return (
        <Layout>
                
            <HeaderTitle text="Editar Usuário" /> {/* Esse código poderá ser adicionado depois, se desejar */}

            <section className={styles.cards}>

                <Card actions={<Button>Salvar</Button>} className={styles.card}>

                    <div className={styles.header}>

                        <h2>Dados Pessoais</h2>

                        <button className="button-reset">
                            <svg id="Grupo_112" data-name="Grupo 112" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g id="more_vert-black-18dp" transform="translate(4.017 4.05)">
                                    <path id="Caminho_236" data-name="Caminho 236" d="M0,0H24V24H0Z" fill="none"/>
                                    <path id="Caminho_237" data-name="Caminho 237" d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z" fill="#666"/>
                                </g>
                                <rect id="Retângulo_73" data-name="Retângulo 73" width="32" height="32" fill="none"/>
                            </svg>
                        </button>

                    </div>
                    
                    <form className={`${styles['form-user-data']} ${styles.form}`}>

                        <input type="text" placeholder="Nome Completo" />

                        <input type="email" placeholder="E-mail" />

                        <input type="date" placeholder="Data de Nascimento" />

                    </form>

                </Card>

                <Card actions={<Button>Alterar</Button>}>

                    <div className={styles.header}>
                    
                        <h2>Senha</h2>

                    </div>
                    
                    <form className={styles.form}>

                        <input type="password" placeholder="Senha Atual" />

                        <input type="password" placeholder="Nova Senha" />

                        <input type="password" placeholder="Confirme a Nova Senha" />

                    </form>

                </Card>

                <Card actions={<Button>Escolher Foto</Button>}>

                    <div className={styles.header}>

                        <h2>Avatar</h2>

                    </div>

                    <img src="/images/user-photo.png" className={styles.avatar} />

                </Card>

            </section>

        </Layout>
    )

}