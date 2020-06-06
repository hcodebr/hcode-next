// admin/index.js
import Layout from '../../components/admin/Layout'
import HeaderTitle from '../../components/admin/HeaderTitle'
import React from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import { handleAuthSSR } from '../../utils/auth'

export default function Index(props) {

    const cookies = new Cookies()
    const serverUrl = 'http://localhost:3333'

    return (
        <Layout>

            <HeaderTitle text={props.res} />

        </Layout>
    )
}

Index.getInitialProps = async (ctx) => {
  const res = await handleAuthSSR(ctx)

    return { "res": res }
}
