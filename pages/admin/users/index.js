import HeaderTitle from '../../../components/admin/HeaderTitle'
import styles from '../../../components/admin/Home.module.css'
import Card from '../../../components/admin/Card'
import Button from '../../../components/admin/Button'
import Layout from '../../../components/admin/Layout'

export default function Index() {

    const users = [{
        id: 1,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 2,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 3,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 4,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 5,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 6,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 7,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 8,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 9,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 10,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 11,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 12,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }];

    return (
        <Layout>

            <HeaderTitle text="Usuários" />

            <section className={styles.users}>

                {users.map(user => (

                    <Card actions={<Button>Editar</Button>} key={user.id}> {/* Poderemos fazer essa refatoração depois */}

                        <div className={styles['user-info']}>

                            <div className={styles['user-data']}>

                                <h2>{user.name}</h2>
                                
                                <p>{user.email}</p>

                                <p>{user.date}</p>

                            </div>

                            <img src={"/images/" + user.photo} className={styles['user-photo']} />

                        </div>

                    </Card>

                ))}

            </section>
        </Layout>
    )

}