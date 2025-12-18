import React, { useEffect } from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <div className="legal-page legal-content">
                <h1>Privacy Policy</h1>
                <span className="last-updated">Last Updated: January 1, 2025</span>

                <p>Your privacy is important to The Eastern Development Organisation (TEDO). This Privacy Policy explains what personal information we collect through our website, how we use and protect that information, and your rights.</p>

                <h2>1. Information We Collect</h2>
                <ul>
                    <li><strong>Personal Data You Provide:</strong> Name, email, phone number when you contact or donate (processed by third parties).</li>
                    <li><strong>Derivative Data:</strong> IP address, browser type for analytics.</li>
                    <li><strong>Cookies:</strong> Used for site functionality and analytics.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <ul>
                    <li>To communicate with you regarding inquiries or donations.</li>
                    <li>To facilitate donations and scheduled services.</li>
                    <li>To improve our website through analytics.</li>
                    <li>To ensure security and legal compliance.</li>
                </ul>

                <h2>3. How We Protect Your Information</h2>
                <p>We use SSL/TLS encryption, restrict access to authorized staff, and partner with PCI-DSS compliant payment processors. While we strive for security, no online transmission is 100% secure.</p>

                <h2>4. Sharing and Disclosure</h2>
                <p>We do not sell your data. We may share it with trusted third-party providers (host, email services) or if required by law.</p>

                <h2>5. Your Rights</h2>
                <p>You may request access to your data, opt-out of newsletters, or manage cookies via your browser.</p>

                <h2>6. External Links</h2>
                <p>Our site links to external websites; we are not responsible for their privacy practices.</p>

                <h2>7. Contact Us</h2>
                <p>If you have questions, contact us at contact@theeasterndevelopment.org.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
