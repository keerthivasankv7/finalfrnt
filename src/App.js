import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectForm from './components/ProjectForm';
import ProjectPage from './components/ProjectPage';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/new-project" component={ProjectForm} />
                        <Route path="/projects/:id" component={ProjectPage} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
