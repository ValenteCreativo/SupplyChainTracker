'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Emojis como iconos personalizados
const startIcon = L.divIcon({ className: 'custom-icon', html: '🚚', iconSize: [40, 40] })
const endIcon = L.divIcon({ className: 'custom-icon', html: '🏁', iconSize: [40, 40] })
const intermediateIcon = L.divIcon({ className: 'custom-icon', html: '🛣️', iconSize: [32, 32] })

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

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % route.length)
    }, 2000) // Cambia cada 2 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <MapContainer center={[18.5, -99.5]} zoom={5} style={{ height: '200px', width: '100%' }} className="rounded-xl shadow-lg">
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

      {/* Marcador animado */}
      <Marker position={route[currentIndex]} icon={L.divIcon({ className: 'custom-icon', html: '🔄', iconSize: [32, 32] })}>
        <Popup>En tránsito...</Popup>
      </Marker>

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
