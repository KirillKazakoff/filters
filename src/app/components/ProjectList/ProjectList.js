import { nanoid } from 'nanoid';
import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import './ProjectList.css';

export default function ProjectList({ projects }) {
    const projectList = projects.map((proj) => (
        <ImageListItem key={nanoid()} className='project'>
            <img src={proj.img} alt='' />
        </ImageListItem>
    ));

    return (
        <ImageList variant='masonry' cols={3} gap={8} className='ProjectList'>
            {projectList}
        </ImageList>
    );
}
