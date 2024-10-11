'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Iconos personalizados para los marcadores
const startIcon = new L.Icon({
  iconUrl: 'https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN', // Ícono de inicio
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

const endIcon = new L.Icon({
  iconUrl: 'https://coral-near-warbler-359.mypinata.cloud/ipfs/Qme3rRCgyk1ZNVWj3QJ9gXaEtH7qgct58Z1L5mC2N3V4ho', // Ícono de destino
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

const intermediateIcon = new L.Icon({
  iconUrl: 'https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXTvJLVwBGxZHoHeLZfw5xRMQujsJmqm8k6dMboVquPf2', // Ícono de puntos intermedios
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

const LeafletMap = () => {
  const startPoint: [number, number] = [19.432608, -99.133209] // CDMX
  const endPoint: [number, number] = [16.853109, -99.823653] // Acapulco

  const route: [number, number][] = [
    [19.432608, -99.133209], // CDMX
    [18.766667, -99.0], // Intermediario en Morelos
    [17.4736, -99.5387], // Intermediario en Chilpancingo
    [16.853109, -99.823653], // Acapulco
  ]

  const intermediatePoints = [
    { position: [18.766667, -99.0], label: "Morelos: Inspección de calidad" },
    { position: [17.4736, -99.5387], label: "Chilpancingo: Cambio de transporte" },
  ]

  useEffect(() => {
    // Aquí podrías añadir alguna simulación de movimiento si lo deseas
  }, [])

  return (
    <MapContainer center={startPoint} zoom={7} style={{ height: '400px', width: '100%' }} className="rounded-xl shadow-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marcador en el punto de partida */}
      <Marker position={startPoint} icon={startIcon}>
        <Popup><strong>Ciudad de México:</strong> Punto de recolección inicial</Popup>
      </Marker>

      {/* Marcador en el punto final */}
      <Marker position={endPoint} icon={endIcon}>
        <Popup><strong>Acapulco:</strong> Destino final del envío</Popup>
      </Marker>

      {/* Línea que representa la ruta */}
      <Polyline positions={route} color="blue" weight={5} opacity={0.7} dashArray="10,10" />

      {/* Marcadores y detalles en los puntos intermedios */}
      {intermediatePoints.map((point, index) => (
        <Marker key={index} position={point.position} icon={intermediateIcon}>
          <Popup>{point.label}</Popup>
        </Marker>
      ))}

      {/* Información de rastreo estilo Uber/Amazon */}
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md text-sm text-gray-700">
        <p><strong>Semilla Azul A.C.</strong> está enviando donativos a un centro de distribución en <strong>Acapulco, Guerrero</strong>. Última actualización: 11 de octubre de 2024, 14:45 hrs.</p>
        <p>Estado del pedido: <span className="text-blue-600">En tránsito</span>. Estimación de llegada: 12 de octubre de 2024, 10:00 hrs.</p>
        <p>Cantidad: 50 cajas de víveres. Calidad: Verificada.</p>
      </div>
    </MapContainer>
  )
}

export default LeafletMap
