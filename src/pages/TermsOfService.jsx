import React, { useEffect } from 'react';
import './Legal.css';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <div className="legal-page legal-content">
                <h1>Terms of Service</h1>
                <span className="last-updated">Last Updated: January 1, 2025</span>

                <p>Welcome to theeasterndevelopment.org. By using our website, you agree to these Terms of Service.</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By using this website, you confirm you accept these terms.</p>

                <h2>2. Nonprofit Purpose</h2>
                <p>TEDO is a registered nonprofit in Uganda. This site is for lawful, non-commercial purposes consistent with our mission.</p>

                <h2>3. Content & Copyright</h2>
                <p>All content is property of TEDO unless otherwise noted. You may use it for personal/educational use with attribution, but not for commercial purposes.</p>

                <h2>4. User Contributions</h2>
                <p>Any content you post (e.g. comments) must be respectful and lawful. We reserve the right to moderate content.</p>

                <h2>5. Disclaimer</h2>
                <p>The website is provided "as is". We do not guarantee it will be error-free or always available.</p>

                <h2>6. Limitation of Liability</h2>
                <p>TEDO is not liable for damages resulting from your use of the website.</p>

                <h2>7. Governing Law</h2>
                <p>These terms are governed by the laws of the Republic of Uganda.</p>

                <h2>8. Contact</h2>
                <p>Questions? Email us at contact@theeasterndevelopment.org.</p>
            </div>
        </div>
    );
};

export default TermsOfService;
