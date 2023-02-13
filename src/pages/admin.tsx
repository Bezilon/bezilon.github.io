import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { createClient } from '@supabase/supabase-js'
import { faClock, faComment } from '@fortawesome/free-regular-svg-icons'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_API_KEY || '')

const inter = Inter({ subsets: ['latin'] })

export default function Admin() {
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
        
        <form className='py-4 px-4 max-w-sm mx-auto rounded-xl shadow-lg grid grid-cols-[auto_1fr] gap-4 content-center grid-col bg-sky-900'>
          <label htmlFor='username' className='font-bold py-2 text-white'>Käyttäjätunnus</label>
          <input id='username' className='shadow-inner w-full h-10 rounded-md text-lg px-3' type='text'/>
          <label htmlFor='password' className='font-bold py-2 text-white'>Salasana</label>
          <input id='password' className='shadow-inner w-full h-10 rounded-md text-lg px-3' type='password'/>
          <button className='w-full col-span-2 bg-emerald-500 rounded-md text-white py-2 font-bold'>Kirjaudu</button>
        </form>
      </main>
    </>
  )
}
