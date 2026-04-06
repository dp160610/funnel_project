import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
            <div>
                <p>&copy; {new Date().getFullYear()} Funnel Engineering. All rights reserved.</p>
                <nav>
                    <a href="/about" style={{ margin: '0 15px' }}>About</a>
                    <a href="/contact" style={{ margin: '0 15px' }}>Contact</a>
                    <a href="/privacy" style={{ margin: '0 15px' }}>Privacy Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;