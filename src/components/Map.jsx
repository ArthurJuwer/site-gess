"use client";
import React, { useEffect, useState } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// Ícone personalizado para os pins
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const senacLatLang = [-29.79656611894146, -51.1528760574173];

const Map = ({ latlang }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = L.map("map", { zoomControl: false }).setView(senacLatLang, 15);
    
    setMap(mapInstance);
  
    // Adiciona a camada do OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapInstance);
  
    // Adiciona apenas o ponto de origem (Senac)
    L.marker(senacLatLang, { icon: customIcon })
      .addTo(mapInstance)
      .bindTooltip("Senac São Leopoldo", { permanent: true, direction: "bottom" });
  
    // Aguarda o Leaflet renderizar os controles antes de removê-los
    setTimeout(() => {
      document.querySelector(".leaflet-control-container")?.remove(); // Remove todo o container de controles
    }, 500); // Pequeno delay para garantir a remoção
  
    return () => mapInstance.remove(); // Remove o mapa ao desmontar o componente
  }, []);


  useEffect(() => {
    if (!map) return; // Aguarda até o mapa estar inicializado

    // Remove camadas anteriores para evitar duplicação
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    // Mantém sempre o ponto de origem (Senac)
    L.marker(senacLatLang, { icon: customIcon })
      .addTo(map)
      .bindTooltip("Senac São Leopoldo", { permanent: true, direction: "bottom" });

    if (!latlang || latlang.length !== 2) return; // Se não houver destino, não adiciona rota

    // Adiciona marcador de destino
    L.marker(latlang, { icon: customIcon })
      .addTo(map)
      .bindTooltip("Destino", { permanent: true, direction: "bottom" });

    // Adiciona rota automática
    L.Routing.control({
      waypoints: [L.latLng(senacLatLang), L.latLng(latlang)],
      routeWhileDragging: false,
      createMarker: () => null,
      lineOptions: { styles: [{ color: "#ADD8E6", weight: 4 }] },
      show: false,
      router: L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1",
        profile: "foot",
      }),
    }).addTo(map);

    // Adiciona linha reta vermelha
    L.polyline([senacLatLang, latlang], {
      color: "red",
      weight: 4,
      opacity: 0.7,
    }).addTo(map);

    // Ajusta o mapa para mostrar ambos os pontos
    map.fitBounds([senacLatLang, latlang]);
  }, [map, latlang]);

  return <div id="map" className="z-0" style={{ height: "400px", width: "100%" }}></div>;
};

export default Map;
