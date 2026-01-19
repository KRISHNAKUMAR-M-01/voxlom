import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
        </main>
    );
};

export default Home;
