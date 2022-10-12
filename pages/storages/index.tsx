import React from 'react'
import Storages from '../../components/storage/Storages'
import Layout from '../../components/Layout'

interface Props {
}

const storage = (props) => {
    return (
        <div>
            <Layout children={<Storages />} />
        </div>
    )
}

export default storage