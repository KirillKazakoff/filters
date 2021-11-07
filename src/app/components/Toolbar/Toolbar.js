import React from 'react';
import { nanoid } from 'nanoid';
import './Toolbar.css';

export default function Toolbar({ filters, onSelectFilter, selected }) {
    const filtersJsx = filters.map((filter) => {
        const className = filter === selected
            ? 'filter selected'
            : 'filter';

        return <li className={className} key={nanoid(4)}>{filter}</li>;
    });

    return (
        <ul
            className='toolbar'
            onClick={onSelectFilter}
            role='presentation'
        >

            {filtersJsx}
        </ul>
    );
}
