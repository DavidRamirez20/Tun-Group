import React from 'react';
import { useDarkMode } from '../context/DarkMode';

const TriggerDarkMode = () => {
   const { darkMode, setDarkMode }: any = useDarkMode();

   return (
      <button
         onClick={() => {
            setDarkMode(!darkMode);
         }}
         className='mr-16'
      >
         {darkMode ? 'Desactivar ' : 'Activar'} modo dark
      </button>
   );
};

export default TriggerDarkMode;