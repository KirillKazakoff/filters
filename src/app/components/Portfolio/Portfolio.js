/* eslint-disable no-use-before-define */

import React, { useState } from 'react';
import projects from './projects';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';
import './Portfolio.css';

export default function Portfolio() {
    const [activeFilter, setFilter] = useState('All');
    const [projList, setList] = useState(projects);

    const onSelectFilter = (e) => {
        const { target } = e;
        const receivedF = target.textContent;
        setFilter(receivedF);

        const newList = receivedF === 'All'
            ? projects
            : filterList(receivedF);

        setList(newList);
    };

    return (
        <div className='portfolio'>
            <Toolbar
                filters={['All', 'Websites', 'Flayers', 'Business Cards']}
                onSelectFilter={onSelectFilter}
                selected={activeFilter}
            />
            <ProjectList projects={projList} />
        </div>
    );
}

function filterList(filter) {
    return projects.filter((proj) => proj.category === filter);
}
