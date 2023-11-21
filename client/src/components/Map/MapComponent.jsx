
import React, { useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';

const MapComponent = () => {
  useEffect(() => {
    maptilersdk.config.apiKey = 'm4bCfOHZELO1pMFDEOCY';
    const map = new maptilersdk.Map({
      container: 'map',
      style: maptilersdk.MapStyle.STREETS,
      center: [16.62662018, 49.2125578],
      zoom: 14,
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default MapComponent;