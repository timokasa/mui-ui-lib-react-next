import * as React from 'react';
import {Button} from "@mui/material";

export interface BgButtonProps {
    label: string;
}

export const BgButton = ({label}:BgButtonProps) => {

    return (
        <>
            <h1>BgButton</h1>
            <Button>
                {label}
            </Button>
        </>
    );
};

