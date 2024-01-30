import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import './Footer.css';
function Footer() {
  
  return (

<div>
<footer className="footer-distributed">
  <div className="footer-left">
    <h3>
      CARE 32<span>DENTALS</span>
    </h3>
    <p className="footer-links">
      <a href="#" className="">
        Home
      </a>
      
      <a href="#">Services</a>
      <a href="#">About</a>
     
      <a href="#">Contact</a>
    </p>
    <p className="footer-company-name">Care32 © 2024</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      
      <p>
        Arangottukara & Desamangalam
      </p>
      
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>+1.555.555.5555</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p>
        <a href="mailto:support@company.com">info@care32.com</a>
      </p>
    </div>
  </div>
 
</footer>

</div>
  )
}

export default Footer