import react from 'react'
import Navbar from '../../components/Navbar'
import Header from './Header'
import HomeCards from './HomeCards'
import HomePicsCards from './HomePicsCards'
import Footer from '../../components/Footer'
import Chart from './Chart'

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Chart/>
    <HomeCards/>
    <HomePicsCards/>
    <Footer/>
    </>
  )
}

export default Home
