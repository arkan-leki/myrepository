import Link from 'next/link'
import React, { useRef } from 'react'
import { Layout } from '../../components/Layout'


const register = (props) => {
  const emailInput = useRef()
  const nameInput = useRef()

  async function handleSave() {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email: emailInput.current?.value })
    });
    if (!res.ok) {
      console.log(res.text);
    }
    const data = await res.json()
    console.log(data.data);
    
  }

  return (
    <Layout>
      <section className='items-center flex flex-row justify-center'>
        <div className='p-3 bg-blue-800 bg-opacity-20 m-2 items-center rounded w-80 flex flex-col space-y-1 '>
          <h3 className='font-bold'>register</h3>
          <div className='flex flex-col space-y-2 w-full'>
          <input className='input' type="email" placeholder='email' ref={emailInput} />
            <input className='input' type="text" placeholder='name' ref={nameInput} />
            <button className="btn" onClick={handleSave}>Sign Up</button>
          </div>
          <Link href={'/auth'}>login</Link>
        </div>
      </section>
    </Layout>
  )
}

export default register