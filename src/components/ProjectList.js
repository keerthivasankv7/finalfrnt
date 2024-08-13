import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProjectList.css';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://finalpro-1.onrender.com/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="project-list">
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <Link to={`/projects/${project._id}`}>
                            <h3>{project.title}</h3>
                            {project.image && <img src={`https://finalpro-1.onrender.com/${project.image}`} alt={project.title} />}
                            <p>{project.description}</p>
                            <small>by {project.author}</small>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
