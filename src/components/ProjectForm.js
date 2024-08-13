import React, { useState } from 'react';
import axios from 'axios';
import './ProjectForm.css';

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);
        if (image) formData.append('image', image);

        axios.post('https://finalpro-zamt.onrender.com/projects', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(response => {
            console.log(response.data);
            setTitle('');
            setDescription('');
            setAuthor('');
            setImage(null);
        })
        .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit} className="project-form">
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button type="submit">Add Project</button>
        </form>
    );
};

export default ProjectForm;
