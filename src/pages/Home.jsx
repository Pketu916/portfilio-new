import React from 'react';
import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import WhyChooseMe from '../components/home/WhyChooseMe';
import WebflowInfo from '../components/home/WebflowInfo';
import Projects from '../components/home/Projects';
import Services from '../components/home/Services';
import CTA from '../components/home/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <ValueProposition />
            <WhyChooseMe />
            <WebflowInfo />
            <Projects />
            <Services />
            <CTA />
        </>
    );
};

export default Home;
