"use client"
import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xldmY1aXhjMDN5cjNzczhpNmhlcnhvbyJ9.CooF1evN26LuGdMTHWWKtw';
const center = [37.7577, -122.4376]; // Center coordinates
const zoom = 10; // Initial zoom level

const markers = [
  { position: [37.7749, -122.4194], content: 'Marker 1' },
  { position: [37.774, -122.437], content: 'Marker 2' },
  // Add more marker coordinates and content as needed
];

const Map = ({ latitude, longitude, zoom }) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
  });

  return (
    // <ReactMapGL tMapGL
    //   {...viewport}
    //   width="100%"
    //   height="100%"
    //   // onViewportChange={(newViewport) => setViewport(newViewport)}
    //   mapboxApiAccessToken="pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xqNzlrZ2ViMGZvajNub2J0ejlka2V1dyJ9.843Un7DSzVqflGkVt7YnUA"
    // >
    //   <Marker latitude={latitude} longitude={longitude}>
    //     <div>Visit us</div>
    //   </Marker>
    //   {/* Add more markers or other components as needed */}
    // </ReactMapGL>
      <MapContainer center={center} zoom={zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}

    </MapContainer>


  );
};

export default Map;
