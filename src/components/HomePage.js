import React from 'react';
import ProjectList from './ProjectList';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <header>
                <h1>Welcome to the DIY Community</h1>
                <p>Share and explore amazing DIY projects from enthusiasts around the world.</p>
            </header>
            <main>
                <ProjectList />
            </main>
        </div>
    );
};

export default HomePage;
