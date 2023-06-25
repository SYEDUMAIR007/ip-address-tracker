import React from 'react';
import L from 'leaflet';
import {location} from "../assets";
const Map = ({ info }) => {
  const mapContainer = React.useRef(null);
  
  React.useEffect(() => {
    const map = L.map(mapContainer.current).setView([info.lat, info.long], 13);
    
    // Add a tile layer to the map
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      attribution: 'Map data &copy; Google Maps',
      maxZoom: 20,
      subdomains:["mt0", "mt1", "mt2", "mt3"]
    }).addTo(map);

    // Create a custom icon
    const customIcon = L.icon({
      iconUrl: (location),
     
    });

    // Add a marker with the custom icon to the map
    L.marker([info.lat, info.long], { icon: customIcon }).addTo(map);

    return () => {
      map.remove();
    };
  }, [info.lat, info.long]);

  return <div ref={mapContainer} className=" map" />;
};

export default Map;
