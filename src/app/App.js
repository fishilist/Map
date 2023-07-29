import '../assets/styles/null.scss';
import '../assets/styles/classes.scss';
import './App.scss';
import Header from "./Header/Header";
import {MapContainer, TileLayer} from "react-leaflet";
import React from "react";
import LocationMarker from "./LocationMarker/LocationMarker";
import "leaflet/dist/leaflet.css";

function App() {
    return <div className={'App-component'}>
        <Header />
        <MapContainer
            center={{ lat: 55.702868, lng: 37.530865 }}
            zoom={10}
            scrollWheelZoom={true}
            style={{height: '60vh'}}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    </div>
}
/*
<Routes>
    <Route path={'/'} element={<Foo/>}/>
</Routes>
*/

export default App;