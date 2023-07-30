import React, {useEffect, useState} from 'react';
import "./PathPolylines.scss";
import {Polyline} from "react-leaflet";
import {useSelector} from "react-redux";

const pathOptions = {
    color: 'red',
    stroke: "blue",
    weight: 2,
    opacity: 1,
    lineCap: "round", // butt | round | square
    dashArray: 4,
}

function PathPolylines(props) {

    const path = useSelector(store => store.currentPath);
    let [polylines, setPolilines] = useState([]);

    function getUrl() {
        if (Object.keys(path).length < 2) {
            return;
        }
        let head = 'http://router.project-osrm.org/route/v1/driving/';
        let nail = '?steps=true&geometries=geojson';
        let coordinates = "";
        for (let key in path) {
            coordinates += path[key].lng + ",";
            coordinates += path[key].lat + ";";
        }
        coordinates = coordinates.slice(0, -1)
        return head + coordinates + nail;
    }

    function getPolylines(data) {
        let ways = [];
        data.routes[0].geometry.coordinates.forEach(way => {
            ways.push(way.reverse())
        });
        return ways;
    }

    function showSteps(data) {
        console.log('\n');
        data.routes[0].legs.forEach(leg => {
            leg.steps.forEach(step => {
                console.log(step.maneuver.type + " " + step.maneuver.modifier + ", " + step.name);
            })
        });
        console.log('\n');
    }

    useEffect(() => {
        let url = getUrl();
        if (!url) return;

        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            // Draw lines on the map between points
            setPolilines(getPolylines(data));
            // Show path info
            showSteps(data);
        }).catch(ex => console.log(ex));
    }, [path]);

    useEffect(() => {
    }, [polylines]);

    return (
        <Polyline pathOptions={pathOptions} positions={polylines}/>
    );
}

export default PathPolylines;