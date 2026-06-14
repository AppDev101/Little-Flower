"use client";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

function GoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      setOptions({ key: process.env.NEXT_PUBLIC_MAPS_API_KEY, v: "weekly" });

      const center = { lat: 11.232986600223937, lng: 124.98506705327324 };

      const { Map } = await importLibrary("maps");
      const { AdvancedMarkerElement } = await importLibrary("marker");

      if (mapRef.current) {
        const map = new Map(mapRef.current, {
          center: center,
          zoom: 15,
          mapId: process.env.NEXT_PUBLIC_MAP_ID,
        });

        new AdvancedMarkerElement({
          map,
          position: center,
          title: "Litte-Flower",
        });
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: "400px", width: "100vw" }} />;
}

export default GoogleMap;
