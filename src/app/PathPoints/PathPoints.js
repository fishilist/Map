import React from 'react';
import {useSelector} from "react-redux";
import {Marker} from "react-leaflet";
import L from "leaflet";

const icon = L.icon({
    iconUrl: "./img/marker-icon-2x.png",
    iconSize: [15, 25]
})

function PathPoints(props) {
    let points = useSelector(store => store.currentPath);

    function getPathPoints() {
        let result = [];
        for (let key in points) {
            let path = points[key];
            result.push(<Marker key={Math.random()} icon={icon} position={[path.lat, path.lng]}></Marker>);
        }
        return result;
    }
    return getPathPoints();
    /*<Marker position={positionOne}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>*/
}

export default PathPoints;