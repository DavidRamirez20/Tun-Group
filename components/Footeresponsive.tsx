import React from 'react'
import Image from 'next/image';

const Footeresponsive = () => {
  return (
    <footer className='w-full m-0 p-7 bg-gradient-to-br from-gray-400 to-slate-100 flex lg:hidden flex-col items-center'>
      <div>
        <Image src='/TunGroup.png' alt='Imagen Empresa' width={218} height={200}/>
      </div>
      <ul className='flex flex-col mb-5 items-center'>
        <li>Política de Tratamiento de Datos</li>
        <li>Aviso de Privacidad</li>
      </ul>
      <ul className='flex flex-col mb-2 items-center'>
        <li>Av. XXXXX # 00-00, Bogotá - Colombia</li>
        <li>Teléfono Bogotá: +57 (601) 777777</li>
        <li>E-mail: servicioalcliente@tungroup.com</li>
      </ul>
    </footer>
  )
}

export default Footeresponsive;
