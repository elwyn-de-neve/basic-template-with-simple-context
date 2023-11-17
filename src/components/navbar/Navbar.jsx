import {Link, NavLink} from "react-router-dom";
import './navbar.css'
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const Navbar = () => {

    const {isAuth, logout} = useContext(AuthContext);

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item"><NavLink to="/">Home</NavLink></li>
                <li className="navbar__item"><NavLink to="/product">Products</NavLink></li>
                {isAuth && <li className="navbar__item"><NavLink to="/profile">Profile</NavLink></li>}
                <li className="navbar__item"><NavLink to="/about">About</NavLink></li>
                <li className="navbar__item"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <ul className="navbar__list">
                {!isAuth ?
                    <>
                        <li className="navbar__item"><Link to="/login">Login</Link></li>
                        <li className="navbar__item"><Link to="/register">Register</Link></li>
                    </>
                    :
                    <li className="navbar__item">
                        <button onClick={logout}>Logout</button>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default Navbar;