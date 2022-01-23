import { useState } from "react";
import Image from "next/image";
import MainLayout from "../layouts/MainLayout";

const InfoTun = () => {
  return (
     <MainLayout>
         <div className='lg:h-44 h-5'></div>
         <div className='lg:absolute lg:left-0 lg:right-0 lg:top-40 text-center'>
            <Image 
               src='https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?cs=srgb&dl=pexels-jopwell-2422290.jpg&fm=jpg'
               width={470}
               height={320}
               className='lg:rounded-md'
            />
         </div>
         <div className='lg:h-6'></div>
         <div className='lg:mx-8 mx-5 my-3 p-3 bg-indigo-50 rounded-3xl shadow-md'>
            <div className='lg:h-36'></div>
            <ReadMore>
               Grupo tecnológico creado para satisfacer al consumidor y al mundo con el mayor estándar tecnológico en las diferentes áreas empresariales, somos un grupo de 
               profesionales que contamos con la experiencia y objetividad para lograr tecnologías de punta que sean agiles y dinámicas para que el usuario pueda desarrollar 
               gestiones y trámites con la mayor seguridad, con trazabilidad y en el menor tiempo posible, haciendo cada tramite o gestión pública o privada con la razón de 
               la lealtad, sin corrupción y libre de intermediaciones que encarecen las gestiones en cada disciplina en la que intervienen los ciudadanos.
            </ReadMore>
            <div className='flex lg:flex-row flex-col justify-center my-3'>
               <div className='mx-5'>
                  <Image 
                     src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                     width={470}
                     height={320}
                     className='lg:rounded-sm'
                  />
               </div>
               <div className='mx-5'>
                  <Image 
                     src='https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
                     width={470}
                     height={320}
                     className='lg:rounded-sm'
                  />
               </div>
               <div className='mx-5'>
                  <Image 
                     src='https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                     width={470}
                     height={320}
                     className='lg:rounded-sm'
                  />
               </div>
            </div>
            <p className='py-1 px-5 lg:text-center text-justify font-serif text-gray-700 lg:text-lg'>
               Desarrollamos software personalizado para el área que usted lo requiera, contamos con aliados estratégicos líderes en el mercado de distintos países en 
               disciplinas que ayuden a crecer nuestra sociedad con la agilidad y calidad que requieren los tiempos modernos.
            </p>
         </div>
     </MainLayout>
  )
};

const ReadMore = ({ children }: any) => {
   const text = children;
   const [isReadMore, setIsReadMore] = useState(true);
   const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
   };
   return (
      <p className='py-1 px-5 text-justify font-serif text-gray-700 lg:text-lg'>
         {isReadMore ? text.slice(0, 326) : text}
         <span onClick={toggleReadMore} className='text-gray-400 hover:cursor-pointer'>
            {isReadMore ? " ...leer más" : " leer menos"}
         </span>
      </p>
   );
};

export default InfoTun;
