'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

const campaigns = [
  {
    id: 1,
    title: "Blankets and Hygiene Products for Women with Disabilities",
    category: "In-kind",
    location: [15.783471, -90.230758], // Guatemala
    goal: "Help Needed"
  },
  {
    id: 2,
    title: "River Magdalena Clean-Up Campaign",
    category: "Volunteer",
    location: [19.4326, -99.1332], // Ciudad de México
    goal: "Help Needed"
  },
  {
    id: 3,
    title: "Rainwater Harvesting Solution",
    category: "Monetary",
    location: [4.5709, -74.2973], // Colombia
    goal: "5000 USD"
  },
  {
    id: 4,
    title: "Support for Women's Shelters",
    category: "In-kind",
    location: [-9.1900, -75.0152], // Perú
    goal: "Help Needed"
},
  {
    id: 5,
    title: "Education Resources for Children",
    category: "Monetary",
    location: [23.6345, -102.5528], // México
    goal: "3000 USD"
  },
  {
    id: 6,
    title: "Food Distribution for Vulnerable Families",
    category: "In-kind",
    location: [-14.2350, -51.9253], // Brasil
    goal: "Help Needed"
  },
];

const MapboxMap = () => {
  const [currentMarker, setCurrentMarker] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl h-[360px] rounded-xl shadow-lg mx-auto">
      <Map
        initialViewState={{
          longitude: -99.133209,
          latitude: 15.532608,
          zoom: 2, 
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        {/* Marcadores de campañas */}
        {campaigns.map((campaign) => (
          <Marker key={campaign.id} longitude={campaign.location[1]} latitude={campaign.location[0]} anchor="bottom">
            <div onClick={() => setCurrentMarker(campaign.id)} style={{ fontSize: '36px' }}>
              📍 {/* Emoji del pin, puedes cambiarlo si deseas */}
            </div>
          </Marker>
        ))}

        {/* Popups de campañas */}
        {campaigns.map((campaign) => (
          currentMarker === campaign.id ? (
            <Popup
              key={campaign.id}
              longitude={campaign.location[1]}
              latitude={campaign.location[0]}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setCurrentMarker(null)}
              anchor="top"
            >
              <strong>{campaign.title}</strong>
              <p>Category: {campaign.category}</p>
              <p>Goal: {campaign.goal}</p>
            </Popup>
          ) : null
        ))}
      </Map>
    </div>
  );
};

export default MapboxMap;
