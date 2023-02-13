import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { createClient } from '@supabase/supabase-js'
import { faClock, faComment } from '@fortawesome/free-regular-svg-icons'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_API_KEY || '')

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
          <div className='py-3 px-4 mx-auto bg-white rounded-xl shadow-lg w-1/3'>
            <p>Tämä on uusi viesti 111. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl dui, lobortis eu lobortis vitae, bibendum eget libero. Ut eget vulputate odio, ac convallis risus. Aliquam eleifend et velit sed pharetra. Mauris euismod neque non elit porttitor consectetur. Nullam blandit eu felis ac hendrerit. Suspendisse quis massa efficitur, vulputate nunc volutpat, auctor lorem. Mauris mollis viverra varius. In viverra sapien ut lectus venenatis dignissim. Phasellus pretium lectus at ipsum cursus, vel placerat turpis cursus. Praesent luctus fermentum nunc, non porta purus convallis ac. Nullam lobortis magna a leo mollis pulvinar. Proin dignissim orci vitae dictum pretium. Vivamus eu dui bibendum est vulputate vestibulum quis ut diam. Nulla facilisi. Mauris ornare felis vel est pretium, eget volutpat lacus varius. Nulla eleifend placerat ex nec tristique.</p>
            <div className='text-right text-xs text-gray-500 mt-2'><FontAwesomeIcon icon={faClock}/> 13.02.2023 klo 15:54</div>
          </div>
          
          <div className='py-3 px-4 mx-auto bg-white rounded-xl shadow-lg w-1/3'>
            <p>Tämä on uusi viesti 222. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl dui, lobortis eu lobortis vitae, bibendum eget libero. Ut eget vulputate odio, ac convallis risus. Aliquam eleifend et velit sed pharetra. Mauris euismod neque non elit porttitor consectetur. Nullam blandit eu felis ac hendrerit. Suspendisse quis massa efficitur, vulputate nunc volutpat, auctor lorem. Mauris mollis viverra varius. In viverra sapien ut lectus venenatis dignissim. Phasellus pretium lectus at ipsum cursus, vel placerat turpis cursus. Praesent luctus fermentum nunc, non porta purus convallis ac. Nullam lobortis magna a leo mollis pulvinar. Proin dignissim orci vitae dictum pretium. Vivamus eu dui bibendum est vulputate vestibulum quis ut diam. Nulla facilisi. Mauris ornare felis vel est pretium, eget volutpat lacus varius. Nulla eleifend placerat ex nec tristique.</p>
            <div className='text-right text-xs text-gray-500 mt-2'><FontAwesomeIcon icon={faClock}/> 13.02.2023 klo 15:54</div>
          </div>
          <div className='py-3 px-4 mx-auto bg-white rounded-xl shadow-lg w-1/3'>
            <p>Tämä on uusi viesti 333. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl dui, lobortis eu lobortis vitae, bibendum eget libero. Ut eget vulputate odio, ac convallis risus. Aliquam eleifend et velit sed pharetra. Mauris euismod neque non elit porttitor consectetur. Nullam blandit eu felis ac hendrerit. Suspendisse quis massa efficitur, vulputate nunc volutpat, auctor lorem. Mauris mollis viverra varius. In viverra sapien ut lectus venenatis dignissim. Phasellus pretium lectus at ipsum cursus, vel placerat turpis cursus. Praesent luctus fermentum nunc, non porta purus convallis ac. Nullam lobortis magna a leo mollis pulvinar. Proin dignissim orci vitae dictum pretium. Vivamus eu dui bibendum est vulputate vestibulum quis ut diam. Nulla facilisi. Mauris ornare felis vel est pretium, eget volutpat lacus varius. Nulla eleifend placerat ex nec tristique.</p>
            <div className='text-right text-xs text-gray-500 mt-2'><FontAwesomeIcon icon={faClock}/> 13.02.2023 klo 15:54</div>
          </div>
          <div className='py-3 px-4 mx-auto bg-white rounded-xl shadow-lg w-1/3'>
            <p>Tämä on uusi viesti 444. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl dui, lobortis eu lobortis vitae, bibendum eget libero. Ut eget vulputate odio, ac convallis risus. Aliquam eleifend et velit sed pharetra. Mauris euismod neque non elit porttitor consectetur. Nullam blandit eu felis ac hendrerit. Suspendisse quis massa efficitur, vulputate nunc volutpat, auctor lorem. Mauris mollis viverra varius. In viverra sapien ut lectus venenatis dignissim. Phasellus pretium lectus at ipsum cursus, vel placerat turpis cursus. Praesent luctus fermentum nunc, non porta purus convallis ac. Nullam lobortis magna a leo mollis pulvinar. Proin dignissim orci vitae dictum pretium. Vivamus eu dui bibendum est vulputate vestibulum quis ut diam. Nulla facilisi. Mauris ornare felis vel est pretium, eget volutpat lacus varius. Nulla eleifend placerat ex nec tristique.</p>
            <div className='text-right text-xs text-gray-500 mt-2'><FontAwesomeIcon icon={faClock}/> 13.02.2023 klo 15:54</div>
          </div>

        </div>
      </main>
    </>
  )
}
