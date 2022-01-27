import MainLayout from "../layouts/MainLayout";

const client = () => {
   return (
      <MainLayout>
         <div className='clientBack lg:h-screen static'>
            <div className='bg-white/50 lg:h-3/4 lg:w-2/6 flex flex-col lg:absolute lg:right-32 lg:top-52 lg:rounded-lg drop-shadow-lg shadow-white backdrop-blur-md justify-center'>
               <span className='text-center pt-8 font-bold text-xl text-gray-600'>Líneas Telefónicas</span>
               <hr className='mt-2 w-2/3 flex place-self-center border-slate-100'></hr>
               <ul className='flex flex-col p-5 items-center justify-center'>
                  <li className='font-semibold text-lg text-gray-600'>Bogotá</li>
                  <a href='tel:057601777777'>
                     <li className='font-semibold text-lg text-gray-600 pb-5 hover:text-gray-500'>+57 (601) 777777</li>
                  </a>
                  <li className='font-semibold text-lg text-gray-600'>Cali</li>
                  <a href='tel:057601777777'>
                     <li className='font-semibold text-lg text-gray-600 pb-5 hover:text-gray-500'>+57 (602) 777777</li>   
                  </a>
                  <li className='font-semibold text-lg text-gray-600'>Medellin</li>
                  <a href='tel:057601777777'>
                     <li className='font-semibold text-lg text-gray-600 hover:text-gray-500'>+57 (604) 777777</li>
                  </a>
               </ul>
               <span className='text-center pt-8 font-bold text-xl text-gray-600'>Correo Electrónico</span>
               <hr className='mt-2 w-2/3 flex place-self-center border-slate-100'></hr>
               <ul className='flex flex-col p-5 items-center justify-center'>
                  <a href='mailto:servicioalcliente@tungroup.com'>
                     <li className='font-semibold text-lg text-gray-600 hover:text-blue-600 hover:underline'>servicioalcliente@tungroup.com</li>
                  </a>
               </ul>
            </div>
         </div>
      </MainLayout>
   )
 
};

export default client;
