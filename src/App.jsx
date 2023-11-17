import './style/globals.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Product from "./pages/products/Product.jsx";
import Profile from "./pages/profile/Profile.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PageNotFound from "./pages/pageNotFound/PageNotFound.jsx";
import ProductDetails from "./pages/products/ProductDetails.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/Register.jsx";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext.jsx";

function App() {
    const { isAuth } = useContext(AuthContext);
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/product/:id" element={<ProductDetails/>}/>
                <Route path="/profile" element={ isAuth ? <Profile/> : <Navigate to="/login"/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}

export default App
