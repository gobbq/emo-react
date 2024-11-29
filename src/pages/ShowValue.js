import React from 'react';
import useDataStore from "../stores/dataStore";

const ShowValue = ({ }) => {
    console.log('show value rendering...')
    const value = useDataStore(state => state.value);
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            width: '100%',
            background: '#f2f2f8'
        }}>
            {value}
        </div>
    );
};

export default ShowValue;