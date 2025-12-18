import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProgramCard.css';

const ProgramCard = ({ title, description, icon: Icon, color, link }) => {
    return (
        <div className="program-card" style={{ '--card-accent': color }}>
            <div className="program-icon-wrapper">
                <Icon size={32} className="program-icon" />
            </div>
            <h3 className="program-title">{title}</h3>
            <p className="program-description">{description}</p>
            <Link to={link} className="program-link">
                Learn More <ArrowRight size={16} />
            </Link>
        </div>
    );
};

export default ProgramCard;
