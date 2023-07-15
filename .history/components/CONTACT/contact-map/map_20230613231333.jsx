import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = ({ lat, lng }) => {
  useEffect(() => {
    // Create a map instance
    const map = L.map('map').setView([lat, lng], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);

    // Create a marker at the specified coordinates
    const marker = L.marker([lat, lng]).addTo(map);

    // Add a popup to the marker
    marker.bindPopup('This is a marker').openPopup();
  }, [lat, lng]);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default Map;
