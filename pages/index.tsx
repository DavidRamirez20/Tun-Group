import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import { useDarkMode } from '../context/DarkMode'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>Hola</div>
    </MainLayout>
  )
}

export default Home
