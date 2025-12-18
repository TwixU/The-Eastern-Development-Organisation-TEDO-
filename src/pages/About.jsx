import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header about-header">
                <div className="container">
                    <h1 className="heading-xl text-white animate-fade-in">Who We Are</h1>
                    <p className="page-subtitle text-white animate-fade-in">
                        A grassroots organization born from the community, working for the community.
                    </p>
                </div>
            </section>

            {/* Intro & Mission/Vision */}
            <section className="section">
                <div className="container">
                    <div className="about-intro">
                        <h2 className="heading-lg mb-md">Our Story</h2>
                        <p className="text-lg">
                            The Eastern Development Organisation (TEDO) is a registered Ugandan nonprofit organization dedicated to uplifting vulnerable communities in Eastern Uganda. Founded in 2012 in Bunyadeti, we were established by concerned local citizens who saw the need for skills training, clean water, and disaster support.
                        </p>
                    </div>

                    <div className="mission-vision-grid mt-lg">
                        <div className="mv-card mission-card">
                            <h3>Our Mission</h3>
                            <p>
                                To bring hope to children in need by providing vocational skills development, mobilizing communities toward self‑reliance, and sustaining a healthy living environment.
                            </p>
                        </div>
                        <div className="mv-card vision-card">
                            <h3>Our Vision</h3>
                            <p>
                                We support, train, care, and demonstrate high standards to empower community income-generating activities. We envision an empowered, self-sufficient community where poverty and hopelessness are replaced by opportunity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <div className="text-center mb-lg">
                        <h2 className="heading-lg text-white">Our Core Values</h2>
                        <p className="section-intro text-white-opacity">Our work is guided by strong values that reflect who we are.</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-item">
                            <h3>Empowerment</h3>
                            <p>Equipping people with knowledge, skills, and resources to take charge of their own lives.</p>
                        </div>
                        <div className="value-item">
                            <h3>Community</h3>
                            <p>Believing in local solutions and working hand-in-hand with community members.</p>
                        </div>
                        <div className="value-item">
                            <h3>Compassion</h3>
                            <p>Prioritizing the most vulnerable with empathy, ensuring dignity for all.</p>
                        </div>
                        <div className="value-item">
                            <h3>Sustainability</h3>
                            <p>Focusing on long-term solutions that serve generations.</p>
                        </div>
                        <div className="value-item">
                            <h3>Integrity</h3>
                            <p>Operating with transparency, accountability, and ethical practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="section">
                <div className="container">
                    <h2 className="heading-lg text-center mb-lg">Our History & Achievements</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-year">2012</div>
                            <div className="timeline-content">
                                <h3>Foundation & First Center</h3>
                                <p>Established as a CBO. Launched a Vocational Training Center in Bunyadeti with 20 youths learning carpentry and tailoring.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2015</div>
                            <div className="timeline-content">
                                <h3>Clean Water Initiative</h3>
                                <p>Partnered with local leaders to drill community boreholes, bringing clean water to over 3,000 people and reducing waterborne diseases.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2019</div>
                            <div className="timeline-content">
                                <h3>Disaster Relief</h3>
                                <p>Provided emergency food, shelter, and medical care to over 500 residents during floods, leading to the formation of disaster preparedness groups.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">Today</div>
                            <div className="timeline-content">
                                <h3>Ongoing Growth</h3>
                                <p>expanding Agricultural Support, introducing modern farming techniques, and continuing to empower youth and women every day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="heading-lg text-center mb-md">Leadership & Team</h2>
                    <p className="text-center max-w-md mx-auto mb-lg">
                        TEDO is guided by a dedicated leadership team and a community-based Board of Directors. Our team includes seasoned educators, social workers, and development experts.
                    </p>
                    <div className="team-statement text-center">
                        <p>
                            We attribute our success to the hard work of our volunteers and staff on the ground, as well as the trust of the communities we serve.
                            We operate with standards of governance and accountability on par with international best practices.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
