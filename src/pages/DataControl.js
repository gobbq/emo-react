import React from 'react';
import useDataStore from "../stores/dataStore";

const DataControl = ({ }) => {
    const { setValue, setChecked } = useDataStore();
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onCheck = (e) => {
        setChecked(e.target.checked);
    }
    return (
        <div>
            <input
                onChange={onChange}
                style={{width: 400, height: 30, padding: 12}}
                placeholder="Input what you want!"
            />
            <input type="checkbox" onChange={onCheck} />
        </div>
    );
};

export default DataControl;