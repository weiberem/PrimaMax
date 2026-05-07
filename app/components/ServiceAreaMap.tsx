"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Aenderbergstrasse 19, 3800 Matten bei Interlaken (approximate)
const OFFICE: [number, number] = [46.6797, 7.8617];

// Loose polygon outlining the Bödeli service area
const BODELI_AREA: [number, number][] = [
  [46.7220, 7.8200], // NW – Sundlauenen / Beatenbucht
  [46.7280, 7.8550], // N
  [46.7320, 7.9100], // NE – above Ringgenberg
  [46.7050, 7.9300], // E – beyond Bönigen
  [46.6750, 7.9220], // SE
  [46.6480, 7.8800], // S – south of Wilderswil
  [46.6420, 7.8500], // SW
  [46.6580, 7.8200], // W
];

export default function ServiceAreaMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const map = L.map(ref.current, {
      center: [46.6863, 7.866],
      zoom: 12,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    mapRef.current = map;

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }
    ).addTo(map);

    // Service-area polygon
    L.polygon(BODELI_AREA, {
      color: "#2563eb",
      weight: 2,
      opacity: 0.9,
      fillColor: "#3b82f6",
      fillOpacity: 0.15,
    })
      .addTo(map)
      .bindTooltip("Unser Einsatzgebiet – Anfahrt inklusive", {
        sticky: true,
        direction: "top",
      });

    // Office marker
    const officeIcon = L.divIcon({
      className: "primamax-marker",
      html: `
        <div style="
          width: 36px;
          height: 36px;
          border-radius: 50% 50% 50% 0;
          background: #1d4ed8;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(30,58,138,0.4);
          border: 3px solid white;
        ">
          <span style="
            transform: rotate(45deg);
            color: white;
            font-weight: 700;
            font-size: 14px;
            font-family: system-ui, sans-serif;
          ">P</span>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36],
    });

    L.marker(OFFICE, { icon: officeIcon })
      .addTo(map)
      .bindPopup(
        `<strong>PrimaMax</strong><br/>Aenderbergstrasse 19<br/>3800 Matten bei Interlaken`
      );

    // Fit polygon
    map.fitBounds(L.latLngBounds(BODELI_AREA).pad(0.05));

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={ref}
      className="aspect-[4/3] w-full"
      role="region"
      aria-label="Karte: Einsatzgebiet PrimaMax"
    />
  );
}
