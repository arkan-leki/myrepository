import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Image from 'next/image'

const collections = () => {
  return (
    <div>
      <Head>
        <title>Hawa Phone 1.2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Nav />
        <div>
          ad
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
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
    </div>
  )
}

export default collections