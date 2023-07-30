import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import PathPoints from "../PathPoints/PathPoints";
import PathPolylines from "../PathPolylines/PathPolylines";
import './Map.scss'

const mapOptions = {
    center: [59.84660399, 30.29496392],
    zoom: 9,
    scrollWheelZoom: true,
}

function Map(props) {
    return (
        <MapContainer
            center={mapOptions.center}
            zoom={mapOptions.zoom}
            scrollWheelZoom={mapOptions.scrollWheelZoom}
            className={'map-container'}>
            <PathPolylines/>
            <PathPoints/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </MapContainer>
    );
}

export default Map;