import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faClock, faComment } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Admin() {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/auth', { username, password }).then(res => console.log(res))
  }

  return (
    <>
      <Head>
        <title>Viestimuuri</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'p-3 bg-cyan-500 h-screen'}>
        <h1 className='text-xl text-white font-extrabold'>Viestimuuri - Admin</h1>
        
        <form className='py-4 px-4 max-w-sm mx-auto rounded-xl shadow-lg grid grid-cols-[auto_1fr] gap-4 content-center grid-col bg-sky-900' onSubmit={onSubmit}>
          <label htmlFor='username' className='font-bold py-2 text-white'>Käyttäjätunnus</label>
          <input id='username' className='shadow-inner w-full h-10 rounded-md text-lg px-3' type='text' value={username} onChange={e => setUsername(e.target.value)}/>
          <label htmlFor='password' className='font-bold py-2 text-white'>Salasana</label>
          <input id='password' className='shadow-inner w-full h-10 rounded-md text-lg px-3' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button className='w-full col-span-2 bg-emerald-500 rounded-md text-white py-2 font-bold'>Kirjaudu</button>
        </form>
      </main>
    </>
  )
}
