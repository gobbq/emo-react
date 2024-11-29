import './App.css';
import ShowValue from "./pages/ShowValue";
import DataControl from "./pages/DataControl";
import React from "react";
import ShowChecked from "./pages/ShowChecked";

function App() {
    return (
        <div className="App">
            <div style={{display: 'flex', justifyContent: 'space-between', gap: 12}}>
                <ShowValue />
                <ShowChecked />
            </div>
            <hr/>
            <DataControl />
        </div>
    );
}

export default App;
