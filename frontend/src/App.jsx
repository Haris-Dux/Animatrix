import react, { useEffect } from 'react'
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
import ContactQueries from './Pages/Dashboard/ContactQueries'
import UserFavourites from './Pages/Dashboard/UserFavourites'
import { useDispatch } from 'react-redux'
import { authUserAsync } from '../features/authSlice'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(authUserAsync())
  },[])
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
          <Route path="/contactqueries" element={<ContactQueries/>}/>
          <Route path="/UserFavourites" element={<UserFavourites/>}/>
          </Routes>
    </Router>
    <Toaster/>
    </>
  )
}

export default App
