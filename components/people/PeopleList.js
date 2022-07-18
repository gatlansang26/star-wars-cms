import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import DynamicTable from '../DynamicTable';

const PeopleList = ({ data }) => {
    const columns = [
        { field: 'name', headerName: 'Name', flex: 1},
        { field: 'height', headerName: 'Height',  flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
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
        { field: 'gender', headerName: 'Gender', flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
        { field: 'birth_year', headerName: 'Birth Year', flex: 1, disableColumnMenu: true, headerAlign: 'center', align: 'center'},
    ];

    return (
        <DynamicTable rows={data.results} columns={columns} />
    );
};

export default PeopleList;
