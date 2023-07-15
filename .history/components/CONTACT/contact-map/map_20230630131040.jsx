"use client"
import React, { useEffect, useState, useRef } from 'react';
// import L from 'leaflet';
// import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xldmY1aXhjMDN5cjNzczhpNmhlcnhvbyJ9.CooF1evN26LuGdMTHWWKtw';

mapboxgl.accessToken ='pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xldmY1aXhjMDN5cjNzczhpNmhlcnhvbyJ9.CooF1evN26LuGdMTHWWKtw';

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
    <div className='w-full  h-full relative'>
      <div className='absolute top-0 bottom-0 right-0 left-0' ref={mapContainerRef} />
    </div>
  );
};

export default Map;
