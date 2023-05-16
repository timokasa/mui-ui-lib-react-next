import * as React from 'react';
import {
    DataGridPro,
    LicenseInfo
} from "@mui/x-data-grid-pro";
import {
    DataGridProProps,
} from '@mui/x-data-grid-pro/models/dataGridProProps';

LicenseInfo.setLicenseKey('LICENSE_KEY');

export const BgDataGrid = (props: DataGridProProps & React.RefAttributes<HTMLDivElement>) => {

    console.log("props", props);

    return (
        <>
            <h1>BgDataGrid</h1>
            <DataGridPro
                {...props}
            />
        </>
    );
};

