import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato" className="footer-logo" />
          <p>
            Order delicious food from your favourite restaurants and get it
            delivered quickly to your doorstep. Discover great food, explore
            new places, and enjoy a seamless ordering experience.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-column">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-content-column">
          <h2>For Foodies</h2>
          <ul>
            <li>Explore Restaurants</li>
            <li>Popular Cuisines</li>
            <li>Offers &amp; Deals</li>
            <li>Order Food Online</li>
            <li>Track Your Order</li>
          </ul>
        </div>

        <div className="footer-content-column">
          <h2>For Restaurants</h2>
          <ul>
            <li>Partner With Us</li>
            <li>Register Your Restaurant</li>
            <li>Restaurant Dashboard</li>
            <li>Business Solutions</li>
            <li>Restaurant Resources</li>
          </ul>
        </div>

        <div className="footer-content-column">
          <h2>Learn More</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
            <li>Help &amp; Support</li>
            <li>Refund Policy</li>
            <li>Delivery Information</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 98765 43210</li>
            <li>support@tomato.com</li>
            <li>Greater Noida, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © 2026 Tomato.com. All Rights Reserved.
          </p>
          <p>Made with ❤️ for food lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
