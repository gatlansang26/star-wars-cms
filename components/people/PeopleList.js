import React from 'react';
import DynamicTable from '../DynamicTable';

const PeopleList = ({ data }) => {
    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 'height',
            numeric: true,
            disablePadding: false,
            label: 'Height',
        },
        {
            id: 'homeworld_id',
            numeric: true,
            disablePadding: false,
            label: 'Homeworld',
        },
        {
            id: 'gender',
            numeric: false,
            disablePadding: false,
            label: 'Gender',
        },
        {
            id: 'birth_year',
            numeric: false,
            disablePadding: false,
            label: 'Birth Year',
        },
    ];

    return (
        <>
            <DynamicTable rows={data.results} columns={headCells} />
        </>
    );
};

export default PeopleList;
