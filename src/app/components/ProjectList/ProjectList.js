/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import React from 'react';
import './ProjectList.css';

export default function ProjectList({ projects }) {
    const projectList = projects.map((proj) => (
        <li
            key={nanoid(4)}
            className='project'
        >
            <img
                src={proj.img}
                alt=''
                className='img'
            />
        </li>
    ));

    return <ul className='ProjectList'>{projectList}</ul>;
}
