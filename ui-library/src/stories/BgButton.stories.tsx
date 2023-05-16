import * as React from 'react';
import {BgButton} from "../components";

export default {
    title: 'Example/BgButton',
    component: BgButton,
};

/**
 * BgDataGrid in Clientmodus
 *
 * This is description
 */
export const BgButtonStory = () => {
    return (
        <>
            <BgButton label={"This is BgButton"}/>
        </>
    );
};