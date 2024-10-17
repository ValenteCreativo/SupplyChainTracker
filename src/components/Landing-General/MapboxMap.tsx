'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import Map, { Marker, Popup, Layer, Source } from 'react-map-gl';

const MapboxMap = () => {
  const startPoint: [number, number] = [19.432608, -99.133209]; // CDMX
  const endPoint: [number, number] = [16.853109, -99.823653]; // Acapulco
  const route: [number, number][] = [
    [19.432608, -99.133209], // CDMX
    [18.766667, -99.0], // Intermediario en Morelos
    [17.4736, -99.5387], // Intermediario en Chilpancingo
    [16.853109, -99.823653], // Acapulco
  ];

  const intermediatePoints = [
    { position: [18.766667, -99.0], label: "Morelos: Inspección de calidad" },
    { position: [17.4736, -99.5387], label: "Chilpancingo: Cambio de transporte" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMarker, setCurrentMarker] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % route.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const animatedMarkerPosition = route[currentIndex];

  return (
    <div className="w-full max-w-3xl h-[180px] rounded-xl shadow-lg mx-auto">
      <Map
        initialViewState={{
          longitude: -99.133209,
          latitude: 18.532608,
          zoom: 5,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        {/* Ruta con línea */}
        <Source id="route" type="geojson" data={{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route.map(([lat, lng]) => [lng, lat]),
          },
        }}>
          <Layer
            id="route"
            type="line"
            paint={{
              'line-color': '#3b82f6',
              'line-width': 5,
              'line-dasharray': [2, 4],
            }}
          />
        </Source>

        {/* Marcadores */}
        <Marker longitude={startPoint[1]} latitude={startPoint[0]} anchor="bottom">
          <div onClick={() => setCurrentMarker("cdmx")}>
            🚚
          </div>
        </Marker>
        {currentMarker === "cdmx" && (
          <Popup
            longitude={startPoint[1]}
            latitude={startPoint[0]}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setCurrentMarker(null)}
            anchor="top"
          >
            <strong>Ciudad de México:</strong> Punto de recolección inicial
          </Popup>
        )}

        <Marker longitude={endPoint[1]} latitude={endPoint[0]} anchor="bottom">
          <div onClick={() => setCurrentMarker("acapulco")}>
            🏁
          </div>
        </Marker>
        {currentMarker === "acapulco" && (
          <Popup
            longitude={endPoint[1]}
            latitude={endPoint[0]}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setCurrentMarker(null)}
            anchor="top"
          >
            <strong>Acapulco:</strong> Destino final del envío
          </Popup>
        )}

        {/* Marcadores intermedios */}
        {intermediatePoints.map((point, index) => (
          <Marker key={index} longitude={point.position[1]} latitude={point.position[0]} anchor="bottom">
            <div onClick={() => setCurrentMarker(`intermediate-${index}`)}>
              🛣️
            </div>
          </Marker>
        ))}
        {intermediatePoints.map((point, index) =>
          currentMarker === `intermediate-${index}` ? (
            <Popup
              key={index}
              longitude={point.position[1]}
              latitude={point.position[0]}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setCurrentMarker(null)}
              anchor="top"
            >
              {point.label}
            </Popup>
          ) : null
        )}

        {/* Marcador animado */}
        <Marker longitude={animatedMarkerPosition[1]} latitude={animatedMarkerPosition[0]} anchor="bottom">
          <div>
            🔄
          </div>
        </Marker>
      </Map>
    </div>
  );
};

export default MapboxMap;
