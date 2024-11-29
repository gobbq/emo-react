import './App.css';
import ShowValue from "./pages/ShowValue";
import DataControl from "./pages/DataControl";
import React from "react";
import ShowChecked from "./pages/ShowChecked";
import Timer from "./pages/Timer";

function App() {
    return (
        <div className="App">
            <Timer />
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
