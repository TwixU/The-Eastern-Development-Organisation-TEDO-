import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hammer, Droplets, HeartHandshake, Sprout, CheckCircle, Users, Lightbulb, Heart } from 'lucide-react';
import './Programs.css';

const ProgramSection = ({ id, title, icon: Icon, color, goals, beneficiaries, outcomes, help, image }) => (
    <section id={id} className="program-detail-section" style={{ '--program-color': color }}>
        <div className="container">
            <div className="program-header-row">
                <div className="program-icon-large">
                    <Icon size={40} />
                </div>
                <h2 className="heading-lg">{title}</h2>
            </div>

            <div className="program-content-grid">
                <div className="program-main-info">
                    <div className="info-block">
                        <h3 className="info-title"><Lightbulb size={20} /> Goals</h3>
                        <p>{goals}</p>
                    </div>

                    <div className="info-block">
                        <h3 className="info-title"><Users size={20} /> Beneficiaries</h3>
                        <p>{beneficiaries}</p>
                    </div>

                    <div className="info-block">
                        <h3 className="info-title"><CheckCircle size={20} /> Outcomes</h3>
                        <ul className="outcomes-list">
                            {outcomes.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="program-sidebar">
                    <div className="help-card">
                        <h3><Heart size={20} fill="currentColor" /> How You Can Help</h3>
                        <ul className="help-list">
                            {help.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                        <a href="/get-involved" className="btn btn-primary full-width mt-sm">Donate to this Program</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const Programs = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const vocationalProgram = {
        id: 'vocational',
        title: 'Vocational Skills Training',
        icon: Hammer,
        color: '#FF8200',
        goals: 'Provide vocational training in trades (electrical, carpentry, plumbing, welding, hairdressing) to vulnerable youth lacking formal education.',
        beneficiaries: 'Orphans, school dropouts (especially young girls), and disabled youth in the community.',
        outcomes: [
            'Skilled youth with better employment opportunities.',
            'Improved livelihoods and household income.',
            'Greater self-sufficiency and confidence.'
        ],
        help: [
            'Sponsor a trainee (fees & materials).',
            'Donate tools (sewing machines, carpentry kits).',
            'Volunteer as a skills trainer or mentor.'
        ]
    };

    const waterProgram = {
        id: 'water',
        title: 'Clean Water & Sanitation',
        icon: Droplets,
        color: '#00AEEF',
        goals: 'Improve community health by providing access to safe drinking water and proper sanitation facilities.',
        beneficiaries: 'Entire communities in rural Uganda, especially families lacking clean water sources.',
        outcomes: [
            'Reduced water-borne diseases (cholera, typhoid).',
            'Cleaner environment through better sanitation.',
            'Improved quality of life (less time spent fetching water).'
        ],
        help: [
            'Contribute to well drilling projects.',
            'Donate water tanks or sanitation supplies.',
            'Volunteer in hygiene education campaigns.'
        ]
    };

    const reliefProgram = {
        id: 'relief',
        title: 'Disaster Relief',
        icon: HeartHandshake,
        color: '#E63946',
        goals: 'Provide emergency aid during disasters (floods, landslides, droughts) and help communities recover and prepare.',
        beneficiaries: 'Families and individuals affected by natural disasters or emergencies in our service area.',
        outcomes: [
            'Lives protected and basic needs met during crises.',
            'Quicker community recovery.',
            'Improved disaster preparedness and resilience.'
        ],
        help: [
            'Donate to our emergency relief fund.',
            'Provide in-kind items (food, blankets, medicine).',
            'Volunteer for disaster response training.'
        ]
    };

    const farmingProgram = {
        id: 'farming',
        title: 'Agricultural Support',
        icon: Sprout,
        color: '#046A38',
        goals: 'Empower local farmers with training, tools, and modern techniques to increase crop yields and ensure food security.',
        beneficiaries: 'Small-scale farmers and farming families in the community.',
        outcomes: [
            'Higher agricultural productivity.',
            'Better food security and incomes.',
            'Sustainable farming practices replacing outdated methods.'
        ],
        help: [
            'Provide funds for seeds and tools.',
            'Donate farming equipment.',
            'Volunteer expertise in agriculture.'
        ]
    };

    return (
        <div className="programs-page">
            <section className="page-header programs-header">
                <div className="container">
                    <h1 className="heading-xl text-white animate-fade-in">Our Programs</h1>
                    <p className="page-subtitle text-white animate-fade-in">
                        Targeted initiatives designed to solve real problems and build a sustainable future.
                    </p>
                </div>
            </section>

            <ProgramSection {...vocationalProgram} />
            <hr className="program-divider" />
            <ProgramSection {...waterProgram} />
            <hr className="program-divider" />
            <ProgramSection {...reliefProgram} />
            <hr className="program-divider" />
            <ProgramSection {...farmingProgram} />
        </div>
    );
};

export default Programs;
