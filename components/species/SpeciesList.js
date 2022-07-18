import React from 'react';
import DynamicTable from '../DynamicTable';

const SpeciesList = ({ data }) => {

    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 'classification',
            numeric: true,
            disablePadding: false,
            label: 'Classification',
        },
        {
            id: 'average_height',
            numeric: true,
            disablePadding: false,
            label: 'Average Height',
        },
        {
            id: 'average_lifespan',
            numeric: false,
            disablePadding: false,
            label: 'Average Lifespan',
        },
        {
            id: 'homeworld_id',
            numeric: false,
            disablePadding: false,
            label: 'Homeworld',
        },
    ];

    return (
        <>
            <DynamicTable rows={data.results} columns={headCells} />
        </>
    );
};

export default SpeciesList;
