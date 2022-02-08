import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import Image from 'next/image'
import InfoCards from '../components/InfoCards'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
   return (
      <MainLayout>
         <Head>
            <title>Home | Tun Group</title>
         </Head>
         <div className='flex lg:flex-row flex-col-reverse items-center my-8 mx-10'>
            <div className='lg:w-1/3 flex flex-col mt-5'>
               <ul className='flex flex-col items-end'>
                  <li className='font-bold lg:text-6xl text-4xl font-cursive'>Lorem Ipsum</li>
                  <li className='font-semibold lg:text-4xl text-2xl font-sans italic'>Eos amet voluptatum</li>
                  <li className='font-semibold lg:text-2xl text-lg'>Inventore aut porro aperiam optio ad.</li>
               </ul>
               <div className='flex lg:mt-10 mt-5 place-self-center'>
                  <Link href='/client'>
                     <a>
                        <button className='flex p-4 rounded-full bg-cyan-700 text-slate-100 text-center shadow-md hover:shadow-lg hover:bg-cyan-600 hover:text-slate-50'>
                           Delectus dolore ipsam earum quam
                        </button>
                     </a>
                  </Link>
               </div>
            </div>
            <div className='lg:w-2/3 flex justify-center'>
               <Image src='/HomeImg.png' width={800} height={450}/>
            </div>
         </div>
         <div className='h-10'></div>
         <div className='bg-sky-900 m-8 p-1 rounded-lg'>
            <Link href='/trademarks'>
               <ul className='flex flex-wrap list-none justify-around'>
                  <InfoCards 
                     name='TUN'
                     image='/TunGroupS1.jpg'
                     width={300}
                     height={260} 
                     detail='Trámite Único Notarial'
                     backGround='green'
                     backColor={500}
                  />
                  <InfoCards 
                     name='RDAS'
                     image='/TunGroupS2-n.png'
                     width={300}
                     height={200} 
                     detail='Registro Digital a la Administración en Salud'
                     backGround='cyan'
                     backColor={500}
                  />
                  <InfoCards 
                     name='MOVITUN'
                     image='/TunGroupS3.png'
                     width={300}
                     height={200} 
                     detail='Trámite Unificado de Movilidad'
                     backGround='cyan'
                     backColor={500}
                  />
                  <InfoCards 
                     name='PROVIDE MOBILITY'
                     image='/TunGroupS4.png'
                     width={300}
                     height={230} 
                     detail='Proveer Movilidad Zonas Azules'
                     backGround='cyan'
                     backColor={500}
                  />
               </ul>
            </Link>
         </div>
      </MainLayout>
   )
}

export default Home
