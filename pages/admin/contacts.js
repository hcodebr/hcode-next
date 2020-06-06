import Layout from '../../components/admin/Layout'
import HeaderTitle from '../../components/admin/HeaderTitle'
import { handleAuthSSR } from '../../utils/auth'

export default function Contacts() {

    return (
        <Layout>

            <HeaderTitle text="Contatos" />

        </Layout>
    )

}

Contacts.getInitialProps = async (ctx) => {
<<<<<<< HEAD
    await handleAuthSSR(ctx)
=======
   // await handleAuthSSR(ctx)
>>>>>>> 4e63c8412cc67cffd3e9f036bc41a6ee6fe39ee5

    return {}
}
