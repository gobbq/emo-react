import React from 'react';
import useDataStore from "../stores/dataStore";
import {useShallow} from "zustand/react/shallow";

const ShowChecked = ({ }) => {
    console.log('show checked rendering...')
    const checked = useDataStore(useShallow(state => state.checked));
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            width: '100%',
            background: '#f2f2f8'
        }}>
            {checked ? '是' : '否'}
        </div>
    );
};

export default ShowChecked;