// import React from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.webp'
import { FaCartPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../assets/Context/ShopContextInstance";


const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext);
  const [menu,setMenu] = useState("shop")
  return (
    <div>
      <div className="navber">
        <div className="nav_logo">
          <Link to={'/'}><img src={logo} alt="" /></Link>
        </div>
        <ul className="nav_menu">
          <li onClick={()=>{setMenu("shop")}}> <Link to={'/'} className="link">Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}> <Link to={'/mens'} className="link">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}> <Link to={'/womens'} className="link">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}> <Link to={'/kids'} className="link">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to={'/login'} className="link"><button>Login</button></Link>
          <Link to={'/cart'} className="link"><FaCartPlus className="cartbtn" /></Link>
          <div className="nav_cart_count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
