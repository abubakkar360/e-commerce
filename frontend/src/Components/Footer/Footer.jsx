import "./Footer.css"
import { TbBrandPinterest,TbBrandWhatsapp,TbBrandInstagram  } from "react-icons/tb";

import footer_logo from "../Assets/logo.webp"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt=""/>
        
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icon">
        <div className="footer_icons_container">
            <TbBrandWhatsapp/>
           
        </div>
        <div className="footer_icons_container">

            <TbBrandInstagram/>
            
        </div>
        <div className="footer_icons_container">
        
            <TbBrandPinterest/>
        </div>
      </div>
      <div className="footer_copywrite">
        <hr />
        <p>Copywrite @ 2026 - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
