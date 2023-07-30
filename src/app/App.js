import '../assets/styles/null.scss';
import '../assets/styles/classes.scss';
import './App.scss';
import Header from "./Header/Header";
import React from "react";
import "leaflet/dist/leaflet.css";
import Map from "./Map/Map";

function App() {
    return (
        <div className={'App-component'}>
            <Header/>
            <Map/>
        </div>
    )
}

export default App;