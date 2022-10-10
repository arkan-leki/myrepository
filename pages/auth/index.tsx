import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../../components/Layout'
import jwt from 'jsonwebtoken'
import { getCookies, getCookie, setCookie, deleteCookie, hasCookie } from 'cookies-next';

const index = (props) => {
  const emailInput = useRef()
  const nameInput = useRef()
  const [loged, setLoged] = useState(false)
  const [user, setUser] = useState()
  const [err, setErr] = useState()


  async function handleSave() {
    const res = await fetch('/api/auth/', {
      method: 'POST',
      body: JSON.stringify({ email: emailInput.current?.value })
    });
    const data = await res.json()
    if (!res.ok) {
      setErr(data.msg)
    }
    if (data.data) {
      setLoged(true)
    }

  }

  useEffect(() => {
    setLoged(hasCookie('token'))
    let token = getCookie('token')
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string }
      setUser(json)
      console.log(json);

    }
  }, [loged, err])

  function handleLogout() {
    setLoged(false)
    deleteCookie('token');
  }

  return (
    <Layout>
      {loged || <section className='items-center flex flex-row justify-center'>
        <div className='p-3 bg-blue-800 bg-opacity-20 m-2 items-center rounded w-80 flex flex-col space-y-1 '>
          <h3 className='font-bold'>login</h3>
          <div className='flex flex-col space-y-2 w-full'>
            {<><p className='text-red-500'>{err}</p></>}
            <input className='input' type="email" placeholder='email' ref={emailInput} />
            <input className='input' type="text" placeholder='name' ref={nameInput} />
            <button className="btn" onClick={handleSave}>Login</button>
          </div>
          <Link href={'/auth/register'}>create account</Link>
        </div>
      </section>}
      {loged && <section className='items-center flex flex-row justify-center'>
        <div className='p-3 bg-blue-800 bg-opacity-20 m-2 items-center rounded w-80 flex flex-col space-y-1 '>
          <h3 className='font-bold'>login</h3>
          <h3>welcome {user?.email}</h3>
          <button className="btn bg-red-700" onClick={handleLogout}>LogOut</button>
        </div>
      </section>}

    </Layout>
  )
}

export default index