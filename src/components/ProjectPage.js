import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios.get(`https://finalpro-2.onrender.com/${id}`)
            .then(response => setProject(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!project) return <p>Loading...</p>;

    return (
        <div className="project-page">
            <h2>{project.title}</h2>
            {project.image && <img src={`https://finalpro-2.onrender.com/${project.image}`} alt={project.title} />}
            <p>{project.description}</p>
            <small>By: {project.author}</small>
        </div>
    );
};

export default ProjectPage;
