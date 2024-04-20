import react from 'react'
import Navbar from '../../components/Navbar'
import Header from './Header'
import HomeCards from './HomeCards'
import HomePicsCards from './HomePicsCards'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <HomeCards/>
    <HomePicsCards/>
    <Footer/>
    </>
  )
}

export default Home
