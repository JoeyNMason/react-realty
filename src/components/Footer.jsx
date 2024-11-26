import React from "react";
import '../footer.css';

function Footer(){
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </footer>
}

export default Footer;