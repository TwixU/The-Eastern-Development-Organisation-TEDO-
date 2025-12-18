import React from 'react';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import { Hammer, Droplets, HeartHandshake, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const programs = [
        {
            title: 'Vocational Training',
            description: 'Teaching trades like carpentry, plumbing, and tailoring to orphans and school dropouts, enabling them to earn a living.',
            icon: Hammer,
            color: '#FF8200', // Accent Orange
            link: '/programs#vocational'
        },
        {
            title: 'Clean Water',
            description: 'Drilling boreholes and building latrines to provide safe water and improve community health.',
            icon: Droplets,
            color: '#00AEEF', // Secondary Blue
            link: '/programs#water'
        },
        {
            title: 'Disaster Relief',
            description: 'Providing food, shelter, and medical support to families hit by floods, landslides, and other emergencies.',
            icon: HeartHandshake,
            color: '#E63946', // Emergency Red-ish
            link: '/programs#relief'
        },
        {
            title: 'Farming Support',
            description: 'Training farmers in modern techniques and providing tools to increase harvests and incomes.',
            icon: Sprout,
            color: '#046A38', // Primary Green
            link: '/programs#farming'
        }
    ];

    return (
        <div className="home-page">
            <Hero />

            {/* Why Trust TEDO Section */}
            <section className="section section-trust">
                <div className="container">
                    <div className="trust-content">
                        <h2 className="heading-lg text-center mb-md">Why Trust TEDO?</h2>
                        <p className="trust-text text-center">
                            Since 2012, The Eastern Development Organisation (TEDO) has been at the forefront of community development in Busia District, Uganda.
                            We pride ourselves on our core values of <strong>Empowerment, Community, Compassion, Sustainability, and Integrity</strong>.
                            Our transparent approach and local roots mean every donation directly fuels projects that transform lives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center mb-lg">
                        <span className="section-subtitle text-primary">What We Do</span>
                        <h2 className="heading-lg">Our Impact Programs</h2>
                        <p className="section-intro">
                            Each of our programs addresses a critical need in the community, creating a holistic approach to breaking the cycle of poverty.
                        </p>
                    </div>

                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <ProgramCard key={index} {...program} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta">
                <div className="container text-center">
                    <h2 className="heading-lg text-white mb-md">Ready to make a difference?</h2>
                    <p className="cta-text text-white mb-lg">
                        Whether you donate to fund a well, volunteer to mentor a student, or simply spread the word, you are part of the solution.
                    </p>
                    <Link to="/get-involved" className="btn btn-primary btn-lg">
                        Donate Now & Change a Life
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
