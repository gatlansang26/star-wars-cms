import React from 'react';
import DynamicTable from '../DynamicTable';

const VehicleList = ({ data }) => {
    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 'model',
            numeric: true,
            disablePadding: false,
            label: 'Model',
        },
        {
            id: 'manufacturer',
            numeric: true,
            disablePadding: false,
            label: 'Manufacturer',
        },
        {
            id: 'cargo_capacity',
            numeric: false,
            disablePadding: false,
            label: 'Cargo Capacity',
        },
        {
            id: 'vehicle_class',
            numeric: false,
            disablePadding: false,
            label: 'Vehicle Class',
        },
    ];

    return (
        <>
            <DynamicTable rows={data.results} columns={headCells} />
        </>
    );
};

export default VehicleList;
