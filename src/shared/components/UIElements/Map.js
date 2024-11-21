// import React, { useEffect, useRef } from 'react'

// import './Map.css';

// const Map = (props) => {
//     const mapRef = useRef();

//     const {center, zoom} = props;

//     useEffect(() => {

//         if (!window.google) {
//             console.error('Google Maps API not loaded.');
//             return;
//           }

//         const map = new window.google.maps.Map(mapRef.current, {
//             center: center,
//             zoom: zoom
//         });
//         new window.google.maps.Marker({ position: center, map: map})
//     }, [center, zoom]);

//   return (
//     <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
//   )
// }

// export default Map


import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const mapStyles = {
  height: '100%',
  width: '100%',
};

const Map = (props) => {
  const { center, zoom } = props;

  const apiKey = 'AIzaSyA3jenoOhl3O2em0NPhEU_ZDbfMn3uDyQc'; 

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={center}
        zoom={zoom}
      >
        
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
