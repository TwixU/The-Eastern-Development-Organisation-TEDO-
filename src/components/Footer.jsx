import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <Link to="/" className="footer-logo">TEDO</Link>
                    <p className="footer-mission">
                        Bringing hope to children in need, empowering communities, and sustaining a healthy environment in Eastern Uganda.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Our Programs</Link></li>
                        <li><Link to="/get-involved">Get Involved</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <ul className="footer-contact">
                        <li>
                            <Mail size={18} />
                            <span>contact@theeasterndevelopment.org</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>(555) 123-4567</span>
                        </li>
                        <li>
                            <MapPin size={18} />
                            <span>Bunyadeti Village, Busia District, Uganda</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for updates.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-container">
                    <p>&copy; {year} The Eastern Development Organisation (TEDO). All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
