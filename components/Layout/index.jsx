import Head from "next/head"
import ASideBar from "./ASideBar"
import Header from "./Header"
import Image from 'next/image'
import { useState } from "react"

const Layout = ({ children }) => {
    const [sate, setSate] = useState(false)
    const handleState = () => {
        setSate(!sate)
    }
    return (
        <>
            <Head>
                <title>Hawa Phone 1.2</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main dir="rtl">
                <Header sate={sate} handleState={handleState} />
                <ASideBar sate={sate} />
                <div className={(!sate) ? `md:mr-52 `: 'mr-0'} dir='rtl'>
                    {children}
                </div>
            </main>

            <footer className={(!sate) ? `flex h-24 w-full items-center justify-center border-t md:mr-56 `:` flex h-24 w-full items-center justify-center border-t`}>
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </footer>
        </>
    )
}

export default Layout