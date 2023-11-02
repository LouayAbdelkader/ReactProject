import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Data1.js';

export default function Projects() {
    const [Count, setCount] = useState(2);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.ProjectsContainer');
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleClick() {
        let Name = prompt("Write the name of the new project");
        let image = prompt("Write your image's link");
        let id = Count;
        const newProject = {
            name: Name,
            img: image,
            id: id
        };
        if (Name !== "" && image !== "") {
            setCount(Count + 1);
            Table.push(newProject);
        } else {
            alert('Please write a valid input');
        }
    }

    return (
        <div>
            <div className='HeaderTitle'>
                <h1 className='Title'>
                    My Projects ({Count})
                </h1>
                <div className='ButtonBloc'>
                    <button className="button" role="button" onClick={handleClick}>
                        <p><i className="bi bi-plus-lg"></i></p>
                    </button>
                </div>
            </div>
            <div className={`ProjectsContainer ${isVisible ? 'active' : ''}`}>
                <div className="ProjectsContent">
                    {Table.map(project => (
                        <div className='cardProject' key={project.id}>
                            <h1>{project.name}</h1>
                            <img src={project.img} alt={project.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
