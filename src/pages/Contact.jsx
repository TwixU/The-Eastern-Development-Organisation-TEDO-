import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-header contact-header">
                <div className="container">
                    <h1 className="heading-xl text-white animate-fade-in">Contact Us</h1>
                    <p className="page-subtitle text-white animate-fade-in">
                        We would love to hear from you. Reach out with questions, ideas, or just to say hello.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-container">
                    <div className="contact-info">
                        <h2 className="heading-lg mb-md">Get in Touch</h2>
                        <p className="mb-lg text-gray">
                            Whether you are a community member, donor, or partner, your communication is important to us.
                        </p>

                        <div className="contact-item">
                            <div className="c-icon"><MapPin size={24} /></div>
                            <div>
                                <h3>Visit Us</h3>
                                <p>TEDO – The Eastern Development Organisation</p>
                                <p>Bunyadeti Village, Busia District</p>
                                <p>Eastern Region, Uganda</p>
                                <p className="text-sm text-gray mt-xs">(Next to Bunyadeti community center)</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="c-icon"><Mail size={24} /></div>
                            <div>
                                <h3>Email Us</h3>
                                <p>contact@theeasterndevelopment.org</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="c-icon"><Phone size={24} /></div>
                            <div>
                                <h3>Call Us</h3>
                                <p>(555) 123-4567</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="c-icon"><Clock size={24} /></div>
                            <div>
                                <h3>Office Hours</h3>
                                <p>Mon – Fri, 9am – 5pm EAT</p>
                            </div>
                        </div>

                        <div className="map-placeholder mt-lg">
                            {/* Embed Map Placeholder */}
                            <div className="google-map">
                                <span>Google Map Embed Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h2 className="heading-lg mb-md">Send a Message</h2>
                        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="you@example.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="How can we help?" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="6" placeholder="Write your message here..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary full-width">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
