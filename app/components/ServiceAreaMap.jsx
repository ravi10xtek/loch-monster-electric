'use client';
import { useEffect, useRef } from 'react';

const DARK_MAP_STYLE = [
  { elementType: 'geometry', stylers: [{ color: '#212121' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#757575' }] },
  { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#bdbdbd' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c2c2c' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#8a8a8a' }] },
  { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#373737' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#3c3c3c' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#212121' }] },
  { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#f3d19c' }] },
  { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#3d3d3d' }] },
];

const MARKER_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.941 14 22 14 22S28 23.941 28 14C28 6.268 21.732 0 14 0z" fill="#F97316"/>
    <circle cx="14" cy="14" r="5.5" fill="#fff"/>
  </svg>`
);

function loadMapsApi(key) {
  if (typeof window === 'undefined') return Promise.reject();
  if (window.google?.maps) return Promise.resolve(window.google.maps);

  const existing = document.getElementById('google-maps-script');
  if (existing) {
    return new Promise((res, rej) => {
      existing.addEventListener('load', () => res(window.google.maps), { once: true });
      existing.addEventListener('error', rej, { once: true });
    });
  }

  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.id = 'google-maps-script';
    s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    s.async = true;
    s.defer = true;
    s.onload = () => res(window.google.maps);
    s.onerror = rej;
    document.head.appendChild(s);
  });
}

export default function ServiceAreaMap({ cities }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!mapRef.current) return;

    loadMapsApi(apiKey).then((maps) => {
      const map = new maps.Map(mapRef.current, {
        center: { lat: 44.94, lng: -93.22 },
        zoom: 10,
        styles: DARK_MAP_STYLE,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: { position: maps.ControlPosition.RIGHT_CENTER },
        gestureHandling: 'cooperative',
      });

      // Suppress the default InfoWindow close button via injected style
      if (!document.getElementById('sa-map-iw-style')) {
        const style = document.createElement('style');
        style.id = 'sa-map-iw-style';
        style.textContent = `
          .sa-map-iw .gm-ui-hover-effect { display: none !important; }
          .sa-map-iw .gm-style-iw-c { padding: 0 !important; border-radius: 4px !important; box-shadow: 0 2px 12px rgba(0,0,0,.45) !important; }
          .sa-map-iw .gm-style-iw-d { overflow: hidden !important; padding: 0 !important; }
          .sa-map-iw .gm-style-iw-t::after { background: #1a1a1a !important; }
        `;
        document.head.appendChild(style);
      }

      const infoWindow = new maps.InfoWindow({ disableAutoPan: true });

      const markerIcon = {
        url: `data:image/svg+xml;charset=UTF-8,${MARKER_SVG}`,
        scaledSize: new maps.Size(28, 36),
        anchor: new maps.Point(14, 36),
      };

      cities.forEach((city) => {
        if (!city.lat || !city.lng) return;

        const marker = new maps.Marker({
          position: { lat: city.lat, lng: city.lng },
          map,
          icon: markerIcon,
          title: `${city.name}, ${city.state}`,
        });

        marker.addListener('mouseover', () => {
          infoWindow.setContent(
            `<div style="font-family:'Work Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:.06em;color:#fff;background:#1a1a1a;padding:7px 14px;white-space:nowrap;">
              ${city.name.toUpperCase()}, ${city.state}
            </div>`
          );
          infoWindow.open({ map, anchor: marker });
          // Apply class after open so the element exists
          setTimeout(() => {
            document.querySelectorAll('.gm-style-iw-c').forEach((el) => {
              el.closest('.gm-style-iw-a')?.classList.add('sa-map-iw');
              el.parentElement?.classList.add('sa-map-iw');
            });
          }, 0);
        });

        marker.addListener('mouseout', () => {
          infoWindow.close();
        });

        marker.addListener('click', () => {
          window.location.href = `/service-areas/${city.slug}`;
        });
      });
    });
  }, [cities]);

  return (
    <section className="sa-map-section">
      <div ref={mapRef} className="sa-map-canvas" />
    </section>
  );
}
