import ServiceCardsTun from "../components/ServiceCards";
import MainLayout from "../layouts/MainLayout";

const TrademarksTun = () => {
  return (
    <MainLayout>
      <h1 className='text-center font-semibold text-3xl pt-8 pb-3'>Nuestros Servicios</h1>
      <div className='flex flex-col m-4'>
        <div className='flex lg:flex-row flex-col m-5 bg-gradient-to-br from-teal-300 to-emerald-400 rounded-tl-[4rem] rounded-br-[4rem]'>
          <ServiceCardsTun 
            image='/TunGroupS1.jpg' 
            descrip='Tramite Único Notarial: Es nuestra apuesta por digitalizar los procesos notariales utilizando la seguridad 
              y la agilidad que estos trámites requieren, con estándares de precisión y con la rapidez que la vida de hoy nos exige 
              sin desplazamientos extensos para realizar las gestiones notariales desde un clic, con seguridad y en la comodidad de 
              su hogar u oficina.'
            width={250} 
            height={180}      
          />
        </div>
        <div className='flex lg:flex-row-reverse flex-col m-5 bg-gradient-to-tl from-teal-600 to-cyan-600 rounded-tr-[4rem] rounded-bl-[4rem]'>
          <ServiceCardsTun 
            image='/TunGroupS2-n.png' 
            descrip='Registro Digital a la Administracion en Salud: Es el desarrollo tecnológico que permite la agilidad, el control 
              y el manejo del sector salud, contando con módulos digitales que economizan recursos y tiempos en cada proceso médico 
              clínico, haciendo todo en el menor tiempo posible con un control paso a paso y con la auditoria necesaria que requiere 
              este sector tan importante de nuestras vidas.' 
            width={400} 
            height={200}          
          />
        </div>
        <div className='flex lg:flex-row flex-col m-5 bg-gradient-to-br to-sky-600 from-blue-300 rounded-tl-[4rem] rounded-br-[4rem]'>
          <ServiceCardsTun 
            image='/TunGroupS3.png' 
            descrip='Tramite Unificado de Movilidad: Este es el desarrollo que hará que cada tramite de movilidad cuente con la experiencia, 
              la transparencia que se requiere en el sector automotriz, descongestionando la tramitología y la corrupción existente en este 
              sector, apostamos a demostrar que desde la digitalización llevaremos la trazabilidad de cada registro existente entre los distintos 
              actores y tramites de la movilidad.' 
            width={225} 
            height={135}            
          />
        </div>
        <div className='flex lg:flex-row-reverse flex-col m-5 bg-gradient-to-br to-emerald-300 from-blue-400 rounded-tr-[4rem] rounded-bl-[4rem]'>
          <ServiceCardsTun 
            image='/TunGroupS4.png' 
            descrip='PROVIDE MOBILITY: Proveer movilidad, será el software que revolucione las zonas azules o de parqueo con un software que 
              le facilite a usted el parqueo en las ciudades, desde una APP usted podrá guardar su lugar en dicho sector a donde se dirige, 
              teniendo un reconocimiento facial detectado por cámaras y el cual usted activa al separar el lugar de parqueo o en el momento de 
              parquear en una de las zonas controladas por nosotros le daremos seguridad.' 
            width={250} 
            height={100}            
          />
        </div>
      </div>
    </MainLayout>
  )
};

export default TrademarksTun;
