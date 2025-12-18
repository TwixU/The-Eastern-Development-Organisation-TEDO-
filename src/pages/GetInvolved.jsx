import React from 'react';
import { Heart, CreditCard, Smartphone, Package, Users, Globe, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';

const GetInvolved = () => {
    return (
        <div className="get-involved-page">
            <section className="page-header involved-header">
                <div className="container">
                    <h1 className="heading-xl text-white animate-fade-in">Get Involved</h1>
                    <p className="page-subtitle text-white animate-fade-in">
                        You can make a difference. Donate, volunteer, or partner with us to bring hope to Eastern Uganda.
                    </p>
                </div>
            </section>

            {/* Donate Section */}
            <section className="section">
                <div className="container">
                    <div className="donate-intro text-center mb-lg">
                        <h2 className="heading-lg text-primary mb-sm">Donate Now</h2>
                        <p className="text-lg text-gray max-w-md mx-auto">
                            Financial contributions are the fastest way to make an impact. Every shilling or dollar helps us reach more children and families.
                        </p>
                    </div>

                    <div className="donation-methods-grid">
                        <div className="donate-card">
                            <div className="card-icon"><Globe size={32} /></div>
                            <h3>Online Donation</h3>
                            <p>Secure online payment via credit card or PayPal.</p>
                            <button className="btn btn-primary mt-sm">Donate Online</button>
                            <p className="note text-sm mt-xs">(Coming Soon)</p>
                        </div>

                        <div className="donate-card">
                            <div className="card-icon"><CreditCard size={32} /></div>
                            <h3>Bank Transfer</h3>
                            <p>Direct transfer to our account in Uganda.</p>
                            <div className="details-box">
                                <p><strong>Bank:</strong> [Bank Name Placeholder]</p>
                                <p><strong>Account Name:</strong> TEDO</p>
                                <p><strong>Account No:</strong> [Account Number]</p>
                                <p><strong>Swift Code:</strong> [SWIFT]</p>
                            </div>
                        </div>

                        <div className="donate-card">
                            <div className="card-icon"><Smartphone size={32} /></div>
                            <h3>Mobile Money</h3>
                            <p>For donors within Uganda.</p>
                            <div className="details-box">
                                <p><strong>MTN / Airtel:</strong></p>
                                <p>+256 700 000 000</p>
                                <p>Ref: Your Name</p>
                            </div>
                        </div>

                        <div className="donate-card">
                            <div className="card-icon"><Package size={32} /></div>
                            <h3>In-Kind Gifts</h3>
                            <p>We accept tools, equipment, and supplies.</p>
                            <p className="text-sm mt-xs">Sewing machines, computers, clothes, books.</p>
                            <Link to="/contact" className="btn btn-outline mt-sm">Contact to Arrange</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-lg">
                        <h2 className="heading-lg text-secondary">Volunteer With Us</h2>
                        <p className="text-lg text-gray">Give your time and talent to empower others.</p>
                    </div>

                    <div className="volunteer-row">
                        <div className="volunteer-content">
                            <div className="volunteer-item">
                                <div className="v-icon-wrap"><Users size={24} /></div>
                                <div className="v-text">
                                    <h3>Local Volunteers</h3>
                                    <p>Join us on the ground in Busia. Teach a skill, help build a well, or assist in administration.</p>
                                </div>
                            </div>

                            <div className="volunteer-item">
                                <div className="v-icon-wrap"><Globe size={24} /></div>
                                <div className="v-text">
                                    <h3>International Volunteers</h3>
                                    <p>Support us remotely with grant writing, social media, or curriculum development, or come visit us!</p>
                                </div>
                            </div>

                            <div className="volunteer-item">
                                <div className="v-icon-wrap"><Briefcase size={24} /></div>
                                <div className="v-text">
                                    <h3>Corporate & Groups</h3>
                                    <p>Organize a service trip or team-building activity that leaves a lasting impact.</p>
                                </div>
                            </div>

                            <div className="mt-lg">
                                <Link to="/contact" className="btn btn-secondary btn-lg">Apply to Volunteer</Link>
                            </div>
                        </div>

                        <div className="volunteer-image-placeholder">
                            {/* This would be an image of volunteers */}
                            <div className="ph-img">
                                <span>Volunteers in Action</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
