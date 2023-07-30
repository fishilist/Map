import React from 'react';
import {useSelector} from "react-redux";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";
import "./PathPoints.scss"

const icon = L.icon({
    iconUrl: "./img/marker-icon-2x.png",
    iconSize: [15, 25]
})

function PathPoints(props) {
    let points = useSelector(store => store.currentPath);

    function getPathPoints() {
        let result = [];
        let counter = 0;
        for (let key in points) {
            let path = points[key];
            result.push(
                <Marker key={Math.random()} icon={icon} position={[path.lat, path.lng]}>
                    <Popup>
                        Point {++counter}
                    </Popup>
                </Marker>
            );
        }
        return result;
    }
    return getPathPoints();
}

export default PathPoints;