import Image from "next/image";

interface InfoCards {
   image: string;
   descrip: string;
   width: number;
   height: number;
}

const ServiceCardsTun = (info: InfoCards) => {
  return (
     <>
      <div className='hidden w-1/4 text-center m-5 p-3 lg:flex justify-center'>
         <Image src={info.image} width={info.width} height={info.height}/>
      </div>
      <div className='w-3/4 m-5 p-5 items-center flex'>
         <p className='text-gray-100 font-semibold text-lg text-justify'>{info.descrip}</p>
      </div>
     </>
  )
};

export default ServiceCardsTun;
