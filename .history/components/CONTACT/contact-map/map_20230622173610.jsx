"use client"
import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xldmY1aXhjMDN5cjNzczhpNmhlcnhvbyJ9.CooF1evN26LuGdMTHWWKtw';

const Map = ({ latitude, longitude, zoom }) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
  });

  return (
    <ReactMapGL tMapGL
      {...viewport}
      width="100%"
      height="400px"
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
    >
      <Marker latitude={latitude} longitude={longitude}>
        <div>Marker component or content</div>
      </Marker>
      {/* Add more markers or other components as needed */}
    </ReactMapGL>
  );
};

export default Map;
