import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
   <nav className='hidden lg:flex flex-row m-0 p-7 sticky shadow-lg'>
         <div className='flex w-1/5 justify-end'>
            <Link href='/'>
               <a>
                  <Image 
                     src='/TunGroup2.jpg' 
                     width={170} 
                     height={65}/>
               </a>
            </Link>
         </div>
         <ul className='w-4/5 flex flex-row justify-end items-center'>
            <Route name='Inicio' route='/'/>
            <Route name='Nosotros' route='/us'/>
            <Route name='Marcas' route='/trademarks'/>
            <Route name='Servicio al Cliente' route='/client'/>
            <li>
               <button className='w-28 mr-16 px-3 py-1 border border-indigo-500 rounded-xl text-gray-700 font-bold shadow-md hover:shadow-lg hover:scale-105'>Button</button>
            </li>
         </ul>
   </nav>
  )
};

const Route = ({route, name}: any) => {
   return (
      <Link href={route}>
         <a>
            <li className='lg:mr-16 font-bold text-gray-700 hover:text-gray-500 hover:cursor-pointer'>{name}</li>
         </a>
      </Link>
   )
}
export default Navbar;
