import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Funnel from '../components/Funnel';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Funnel Engineering</h1>
                <p>Explore the concepts and strategies behind effective funnel engineering.</p>
                <Funnel />
            </main>
            <Footer />
        </div>
    );
};

export default Home;