import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>About Funnel Engineering</h1>
                <p>
                    Funnel engineering is a systematic approach to understanding and optimizing the customer journey. 
                    It involves analyzing each stage of the funnel, from awareness to conversion, to identify 
                    opportunities for improvement and increase overall efficiency.
                </p>
                <p>
                    Our website aims to provide resources, insights, and tools for professionals looking to enhance 
                    their funnel strategies. Whether you're a marketer, product manager, or business owner, 
                    you'll find valuable information to help you succeed.
                </p>
                <p>
                    Join us as we explore the principles of funnel engineering and how they can transform your 
                    approach to customer engagement and retention.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default About;