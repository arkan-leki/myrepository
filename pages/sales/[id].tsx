import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'

const sale = (props) => {
    const router = useRouter()

    return (
        <Layout>
            <div>{router.query.id}</div>
        </Layout>
    )
}

export default sale