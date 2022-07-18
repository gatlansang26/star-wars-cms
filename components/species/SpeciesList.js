import React from 'react';
import DynamicTable from '../DynamicTable';
import Link from 'next/link';
import Button from '@mui/material/Button';

const SpeciesList = ({ data }) => {
    const columns = [
        { field: 'name', headerName: 'Name', flex: 1},
        { field: 'classification', headerName: 'Classification',  flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
        { field: 'average_height', headerName: 'Average Height', flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
        { field: 'average_lifespan', headerName: 'Average Lifespan', flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
        {
            field: 'homeworld_id',
            headerName: 'Homeworld',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            disableColumnMenu: true,
            renderCell: (params) => {
                if (params.value) {
                    return (
                        <Link href={`/planets/${params.value}`} passHref>
                            <Button component="a" variant="text" color="inherit">
                                {params.value}
                            </Button>
                        </Link>
                    );
                }
            }
        },
    ];

    return (
        <DynamicTable rows={data.results} columns={columns} />
    );
};

export default SpeciesList;
