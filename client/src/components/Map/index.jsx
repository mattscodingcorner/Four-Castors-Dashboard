import React, { useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';

const MapComponent = () => {
  useEffect(() => {
    maptilersdk.config.apiKey = 'm4bCfOHZELO1pMFDEOCY';
    const map = new maptilersdk.Map({
      container: 'map',
      style: maptilersdk.MapStyle.BACKDROP,
      zoom: 13,
    });

    // Prompt user for location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setCenter([longitude, latitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '600px' }}></div>;
};

export default MapComponent;