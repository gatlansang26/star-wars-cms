import React from 'react';
import DynamicTable from '../DynamicTable';

const PlanetList = ({ data }) => {
    const columns = [
        { field: 'name', headerName: 'Name', flex: 1},
        { field: 'rotation_period', headerName: 'Rotation Period',  flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
        { field: 'orbital_period', headerName: 'Orbital Period', flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
        { field: 'population', headerName: 'Population', flex: 1, disableColumnMenu: true},
        { field: 'gravity', headerName: 'Gravity', flex: 1, disableColumnMenu: true},
    ];

    return (
        <DynamicTable rows={data.results} columns={columns} />
    );
};

export default PlanetList;
