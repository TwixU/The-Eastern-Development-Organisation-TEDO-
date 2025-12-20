import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>
      <section className="page-header" style={{ padding: '4rem 0', backgroundColor: '#333' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="heading-xl text-white animate-fade-in">Thank You</h1>
        </div>
      </section>

      <section className="section" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <CheckCircle size={80} color="#10B981" />
          </div>
          
          <h2 className="heading-lg mb-md">Message Sent Successfully!</h2>
          <p className="mb-lg text-gray" style={{ fontSize: '1.2rem' }}>
            Thank you for reaching out to TEDO. We have received your message and will get back to you as soon as possible.
          </p>
          
          <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
