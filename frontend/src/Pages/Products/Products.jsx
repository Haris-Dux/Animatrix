import react from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Slider from './Slider'
import ProductCards from './ProductCards'

function Products() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <ProductCards/>
    <Footer/>
    </>
  )
}

export default Products
