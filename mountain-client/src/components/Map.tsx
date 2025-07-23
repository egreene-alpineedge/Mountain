import { useEffect, useRef } from "react";
import "../App.css";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    // useEffect(() => {
    //     mapboxgl.accessToken =
    //         "pk.eyJ1IjoiZWdyZWVuZTAxNyIsImEiOiJjbWQ4dnQwZGUwMWF0MmxxM2dmZ3R4eHFsIn0.p7JZc_5YeQvQpOnOjLn3-w";
    //     mapRef.current = new mapboxgl.Map({
    //         container: mapContainerRef.current,
    //         center: [-71.30327, 44.27049],
    //         zoom: 6,
    //     });

    //     return () => {
    //         mapRef.current.remove();
    //     };
    // }, []);

    return <div className="map" ref={mapContainerRef}></div>;
}

export default Map;
