import { FC, useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import { OffersLocation } from '../../types/offers-card-types';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  city: OffersLocation;
  points: (OffersLocation & { id: number })[];
  selectedPointsId: number | null;
};

const Map: FC<MapProps> = ({ city, points, selectedPointsId }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPointsId && point.id === selectedPointsId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPointsId]);

  return <div style={{height: '100%'}} ref={mapRef} ></div>;
};

export default Map;
