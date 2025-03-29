import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
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

const Map = () => {
  useEffect(() => {
    const map = L.map("map", {
      zoomControl: false, // Remove o controle de zoom
    }).setView([-29.79656611894146, -51.1528760574173], 13);

    // Camada do OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

    // 👉 Ponto A (Origem)
    const pointA = [-29.79656611894146, -51.1528760574173];
    L.marker(pointA, { icon: customIcon })
      .addTo(map)
      .bindTooltip("Senac São Leopoldo", { permanent: true, direction: "top" });

    // 👉 Ponto B (Destino)
    const pointB = [-29.79762567197966, -51.15178068173709];
    L.marker(pointB, { icon: customIcon })
      .addTo(map)
      .bindTooltip("Opus Academia", { permanent: true, direction: "top" });

    // **Rota automática** (azul fraco) entre os pontos
    L.Routing.control({
      waypoints: [
        L.latLng(pointA), // Ponto A
        L.latLng(pointB), // Ponto B
      ],
      routeWhileDragging: false,
      createMarker: () => null, // Remove os marcadores automáticos da rota
      lineOptions: {
        styles: [{ color: "#ADD8E6", weight: 4 }], // Azul fraco
      },
      show: false, // Oculta o painel de controle de rota
      router: L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1", // Serviço para calcular rotas
        profile: "foot", // Definindo a rota como a pé
      }),
    }).addTo(map);

    // **Linha reta** (vermelha) entre os pontos A e B
    L.polyline([pointA, pointB], {
      color: "red",   // Cor da linha
      weight: 4,      // Espessura da linha
      opacity: 0.7,   // Opacidade
    }).addTo(map);

    // Ajusta o mapa para garantir que ambos os pontos A e B estejam visíveis
    const lineBounds = [pointA, pointB];
    map.fitBounds(lineBounds);

    return () => {
      map.remove(); // Remove o mapa ao desmontar o componente
    };
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default Map;
