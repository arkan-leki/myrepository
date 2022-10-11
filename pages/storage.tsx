import React from 'react'
import Storages from '../components/Storages'
import Layout from '../components/Layout'

interface Props {
}

const storage = (props: Props) => {
    return (
        <div>
            <Layout children={<Storages />} />
        </div>
    )
}

export default storage