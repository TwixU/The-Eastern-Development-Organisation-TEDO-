import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-headline animate-fade-in">
                    Empowering Communities,<br />Changing Lives
                </h1>
                <p className="hero-subheading animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Helping vulnerable children and families in Eastern Uganda gain skills, hope, and a healthier future through vocational training, clean water, and disaster relief.
                </p>
                <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <Link to="/get-involved" className="btn btn-primary btn-lg">
                        Donate Now
                    </Link>
                    <Link to="/about" className="btn btn-secondary btn-lg">
                        Learn More <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
