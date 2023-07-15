"use client"
import React, { useEffect, useState, useRef } from 'react';
// import L from 'leaflet';
// import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'leaflet';
import mapboxgl from 'mapbox-gl';

// const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xldmY1aXhjMDN5cjNzczhpNmhlcnhvbyJ9.CooF1evN26LuGdMTHWWKtw';

mapboxgl.accessToken ='pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xldmY1aXhjMDN5cjNzczhpNmhlcnhvbyJ9.CooF1evN26LuGdMTHWWKtw';

// const Map = () => {
//   const mapContainerRef = useRef(null);

//   const [lng, setLng] = useState(5);
//   const [lat, setLat] = useState(34);
//   const [zoom, setZoom] = useState(1.5);

//   // Initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     // Add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     map.on('move', () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     // Clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div className='w-[100%] h-[400px] relative'>
//       <div className='absolute top-0 bottom-0  right-0 left-0' ref={mapContainerRef} />
//     </div>
//   );
// };
const Map = ({ lng, lat, zoom }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom,
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      return () => map.remove();
    }
  }, [lng, lat, zoom]);

  return (
    <div className='w-auto h-[240px] relative'>
      <div className='absolute top-0 bottom-0 right-0 left-0' ref={mapContainerRef} />
    </div>
  );
};

export default Map;
