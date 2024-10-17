'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Carga los componentes dinámicamente, deshabilitando el SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const LeafletMapComponent = () => {
  const startPoint: [number, number] = [19.432608, -99.133209]; // CDMX
  const endPoint: [number, number] = [16.853109, -99.823653]; // Acapulco
  const route: [number, number][] = [
    [19.432608, -99.133209], // CDMX
    [18.766667, -99.0], // Intermediario en Morelos
    [17.4736, -99.5387], // Intermediario en Chilpancingo
    [16.853109, -99.823653], // Acapulco
  ];

  const intermediatePoints = [
    { position: [18.766667, -99.0] as [number, number], label: "Morelos: Inspección de calidad" },
    { position: [17.4736, -99.5387] as [number, number], label: "Chilpancingo: Cambio de transporte" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % route.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  // Verifica si estamos en el cliente antes de renderizar
  if (typeof window === 'undefined') {
    return null; // No renderizar en el servidor
  }

  // Asegúrate de que el marcador animado tenga la posición correcta
  const animatedMarkerPosition: [number, number] = route[currentIndex];

  return (
    <MapContainer bounds={[[16.5, -100], [20, -98]]} zoom={5} style={{ height: '200px', width: '100%' }} className="rounded-xl shadow-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker 
        position={startPoint} 
        icon={L.divIcon({ html: '<div style="font-size: 24px;">🚚</div>', iconSize: [40, 40] })}
      >
        <Popup><strong>Ciudad de México:</strong> Punto de recolección inicial</Popup>
      </Marker>

      <Marker 
        position={endPoint} 
        icon={L.divIcon({ html: '<div style="font-size: 24px;">🏁</div>', iconSize: [40, 40] })}
      >
        <Popup><strong>Acapulco:</strong> Destino final del envío</Popup>
      </Marker>

      <Polyline positions={route} color="blue" weight={5} opacity={0.7} dashArray="10,10" />

      {intermediatePoints.map((point, index) => (
        <Marker 
          key={index} 
          position={point.position} 
          icon={L.divIcon({ html: '<div style="font-size: 20px;">🛣️</div>', iconSize: [32, 32] })}
        >
          <Popup>{point.label}</Popup>
        </Marker>
      ))}

      <Marker 
        position={animatedMarkerPosition} 
        icon={L.divIcon({ html: '<div style="font-size: 20px;">🔄</div>', iconSize: [32, 32] })}
      >
        <Popup>En tránsito...</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMapComponent;
