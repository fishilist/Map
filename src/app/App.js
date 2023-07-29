import '../assets/styles/null.scss';
import '../assets/styles/classes.scss';
import './App.scss';
import Header from "./Header/Header";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import React, {useEffect, useRef, useState} from "react";
import LocationMarker from "./LocationMarker/LocationMarker";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PathPoints from "./PathPoints/PathPoints";


function App() {
    let [wayline, setWayline] = useState([]);
    let Berlin = [52.517037, 13.388860];

    // Code Review
    useEffect(()=>{
        let copyURL = 'http://router.project-osrm.org/route/v1/driving/30.29496392,59.84660399;30.42423701,59.82934196;30.38064206,59.83567701?steps=true&geometries=geojson'
        let myURL = 'http://router.project-osrm.org/route/v1/driving/30.29496392,59.84660399;30.42423701,59.82934196;30.38064206,59.83567701?overview=false'
        let url = 'http://router.project-osrm.org/route/v1/driving/30.42423701,59.82934196;30.41705607,59.82761295;30.29496392,59.84660399?overview=false'
        fetch(copyURL).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data);
            let ways = [];
            data.routes[0].geometry.coordinates.forEach(way=>{
                ways.push(way.reverse())
            })
            setWayline(ways);

            data.routes[0].legs.forEach(leg=>{
                leg.steps.forEach(step=>{
                    console.log(step);
                })
            })

        }).catch(ex=>console.log(ex))
    },[])

    console.log(wayline);

    return <div className={'App-component'}>
        <Header />
        <MapContainer
            center={{ lat: 59.84660399, lng: 30.29496392 }}
            zoom={9}
            scrollWheelZoom={true}
            style={{height: '60vh'}}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <PathPoints />
            <Polyline pathOptions={{color: 'red'}} positions={wayline} />
        </MapContainer>
    </div>
}
/*
<Routes>
    <Route path={'/'} element={<Foo/>}/>
</Routes>
*/

export default App;