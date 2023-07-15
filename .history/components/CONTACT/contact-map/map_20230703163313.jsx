"use client"
import React, { useEffect, useState, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xldmY1aXhjMDN5cjNzczhpNmhlcnhvbyJ9.CooF1evN26LuGdMTHWWKtw';

mapboxgl.accessToken ='pk.eyJ1IjoibG1ldGEiLCJhIjoiY2xldmY1aXhjMDN5cjNzczhpNmhlcnhvbyJ9.CooF1evN26LuGdMTHWWKtw';

const Map = ({ locations, zoom }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: locations[0].coordinates,
        zoom: zoom,
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      locations.forEach((location) => {
        // Create a marker for each location
        const marker = new mapboxgl.Marker().setLngLat(location.coordinates).addTo(map);

        // Create a popup with text
        const popup = new mapboxgl.Popup().setHTML(`<h3>${location.name} </h3>`);
        
        // Attach the popup to the marker
        marker.setPopup(popup);
      });

      return () => map.remove();
    }
  }, [locations, zoom]);

  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-0 bottom-0 right-0 left-0' ref={mapContainerRef} />
    </div>
  );
};

export default Map;