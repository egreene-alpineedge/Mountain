import { useEffect, useRef } from "react";
import "../App.css";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    // useEffect(() => {
    //     mapboxgl.accessToken =
    //         "";
    //     mapRef.current = new mapboxgl.Map({
    //         container: mapContainerRef.current,
    //         style: "mapbox://styles/egreene017/cmdhv7u0y00be01ptcsa72o14",
    //         center: [-78.30327, 43.77049],
    //         zoom: 6,
    //     });

    //     return () => {
    //         mapRef.current.remove();
    //     };
    // }, []);

    return <div className="map" ref={mapContainerRef}></div>;
}

export default Map;
