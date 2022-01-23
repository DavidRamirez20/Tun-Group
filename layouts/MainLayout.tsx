import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Navbaresponsive from '../components/Navbaresponsive'
import Footeresponsive from '../components/Footeresponsive'

const MainLayout = ({children}: any) => {
  return (
      <div className='flex flex-col'>
         <Navbar />
         <Navbaresponsive />
         <main>{children}</main>
         <Footer />
         <Footeresponsive />
      </div>
   )
};

export default MainLayout;
