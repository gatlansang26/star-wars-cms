import React from 'react';
import DynamicTable from '../DynamicTable';

const VehicleList = ({ data }) => {
    const columns = [
        { field: 'name', headerName: 'Name', flex: 1},
        { field: 'model', headerName: 'Model',  flex: 1, disableColumnMenu: true},
        { field: 'manufacturer', headerName: 'Manufacturer', flex: 1, disableColumnMenu: true, },
        { field: 'cargo_capacity', headerName: 'Cargo Capacity', flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
        { field: 'vehicle_class', headerName: 'Vehicle Class', flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
    ];

    return (
        <DynamicTable rows={data.results} columns={columns} />
    );
};

export default VehicleList;
