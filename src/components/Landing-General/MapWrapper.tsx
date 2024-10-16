'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Importa el componente de mapa dinámicamente, deshabilitando SSR
const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

const MapWrapper = () => {
  return (
    <div>
      <LeafletMap />
    </div>
  );
};

export default MapWrapper;