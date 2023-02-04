import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { TileLayer, Map } from 'leaflet';
import { OffersLocation } from '../types/offers-card-types';

export const useMap = (mapRef: MutableRefObject<HTMLElement | null>, city: OffersLocation) => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const coordinates = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        },
      );

      coordinates.addLayer(layer);

      setMap(coordinates);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
};
