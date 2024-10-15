import React from 'react';
import L from 'leaflet';

interface CustomIconProps {
  iconHtml: string;
  iconSize: [number, number];
}

const CustomIcon: React.FC<CustomIconProps> = ({ iconHtml, iconSize }) => {
  const icon = L.divIcon({
    className: 'custom-icon',
    html: iconHtml,
    iconSize: iconSize,
  });
  
  return <>{icon}</>;
};

export default CustomIcon;
