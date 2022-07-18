import React from 'react';
import DynamicTable from '../DynamicTable';

const PlanetList = ({ data }) => {
    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 'rotation_period',
            numeric: true,
            disablePadding: false,
            label: 'Rotation Period',
        },
        {
            id: 'orbital_period',
            numeric: true,
            disablePadding: false,
            label: 'Orbital Period',
        },
        {
            id: 'population',
            numeric: false,
            disablePadding: false,
            label: 'Population',
        },
        {
            id: 'gravity',
            numeric: false,
            disablePadding: false,
            label: 'Gravity',
        },
    ];

    return (
        <>
            <DynamicTable rows={data.results} columns={headCells} />
        </>
    );
};

export default PlanetList;
