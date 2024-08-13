import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectPage.css';

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios.get(`https://finalpro-zamt.onrender.com/${id}`)
            .then(response => setProject(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!project) return <div>Loading...</div>;

    return (
        <div className="project-page">
            <h2>{project.title}</h2>
            {project.image && <img src={`https://finalpro-zamt.onrender.com/${project.image}`} alt={project.title} />}
            <p>{project.description}</p>
            <small>by {project.author}</small>
        </div>
    );
};

export default ProjectPage;
