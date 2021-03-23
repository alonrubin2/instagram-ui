import React, { useEffect, useState, useContext } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
// import {MapContext} from '../../map-context';
import mapKey from '../../keys';
import './Map.scss';

function Map(props) {


    const [north, setNorth] = useState(null);
    const [east, setEast] = useState(null);
    // const [northEast, setNorthEast] = useState([])
    // const { setNorth, setEast } = useContext(MapContext);

    function mapClicked(e) {
        const north = e.latLng.lat();
        const east = e.latLng.lng();
        setNorth(north);
        setEast(east);
        props.setMarkerPosition(north, east)
        // setEast(east);
    }


    return (
        <div className="Map" id="map"
        onChange={(e) => props.onChange(north, east)}>
            <GoogleMap
                className="map"
                onClick={mapClicked}
                
                defaultZoom={10}
                defaultCenter={{ lat: 45.902582, lng: -68.919323 }}
            >
                <Marker position={{ lat: north, lng: east }} />
            </GoogleMap>
            <div  className="north-east">North: {north}, East: {east}</div>
        </div>
    );
}

export default withScriptjs(withGoogleMap(Map));
