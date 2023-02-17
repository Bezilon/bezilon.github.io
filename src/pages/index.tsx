import { Message } from 'lib/models/Message'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { createClient } from '@supabase/supabase-js'
import { faClock, faComment } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const MessageBlock = ({id, created_at, text, appoved_by, appoved_at}: Message) => {
  const createdAt = new Date(created_at)
  return <div className='py-3 px-4 mx-auto bg-white rounded-xl shadow-lg w-1/3 mb-4'>
    <p>{text}</p>
    <div className='text-right text-xs text-gray-500 mt-2'><FontAwesomeIcon icon={faClock}/> {createdAt.toTimeString()}</div>
  </div>
}
  
export default function Home() {
  const [ messages, setMessages ] = useState<Array<Message>>([])

  useEffect(() => {
    axios.get('/api/messages').then(response => setMessages(response.data))
  }, [])

  return (
    <>
      <Head>
        <title>Viestimuuri</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'p-3 bg-cyan-500 h-screen'}>
        <h1 className='text-xl text-white font-extrabold mb-4'>Viestimuuri</h1>

        <div className='flex flex-col'>
          { messages.map(message => {
            console.log(message)
            return <MessageBlock key={`message-${message.id}`} {...message}
              created_at={message.created_at}
              text={message.text}
              appoved_by={message.appoved_by}
              appoved_at={message.appoved_at}
            />
          }) }
        </div>
      </main>
    </>
  )
}
