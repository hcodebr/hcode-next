import HeaderTitle from '../../../components/admin/HeaderTitle'
import styles from '../../../components/admin/Home.module.css'
import Card from '../../../components/admin/Card'
import Button from '../../../components/admin/Button'
import Layout from '../../../components/admin/Layout'
import axios from 'axios'
import { Cookies } from 'react-cookie'

export default async function Index() {
    
    const users = [{
        id: 1,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 2,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 3,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 4,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 5,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 6,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 7,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 8,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 9,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 10,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 11,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 12,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        birth_at: '18 de março de 2020',
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

                                <p>{user.birth_at}</p>

                            </div>

                            <img src={"/images/" + user.photo} className={styles['user-photo']} />

                        </div>

                    </Card>

                ))}

            </section>
        </Layout>
    )

}


// Index.getInitialProps = async (ctx)=>{

//     const cookies = new Cookies();
//     const token = cookies.get('token')
    
//     const config = {
//         header: {Authorization: `Bearer ${token}`}
//     }
//    // const users = await axios.post('http://localhost:3333/admin/users', config)
//     //return []
// }