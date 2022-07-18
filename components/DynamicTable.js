import React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const DynamicTable = ({rows, columns}) => {
    const [pageSize, setPageSize] = React.useState(10);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        disableColumnSelector
                        disableSelectionOnClick
                    />
                </div>
            </div>
        </div>
    );
};

export default DynamicTable;
