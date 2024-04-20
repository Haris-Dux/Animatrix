import react from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Products from './Pages/Products/Products'
import Contact from './Pages/Contact/Contact'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Blogs from './Pages/Blogs/Blog'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          </Routes>
    </Router>
    <Toaster/>
    </>
  )
}

export default App
