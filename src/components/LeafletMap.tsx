'use client'
import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icons in Next.js
const DefaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

interface MapProps {
  center: { lat: number; lng: number }
  zoom: number
  markerPosition: [number, number] | null
}

const LeafletMap = ({ center, zoom, markerPosition }: MapProps) => {
  useEffect(() => {
    // Initialize map only on client side
    const map = L.map('map').setView([center.lat, center.lng], zoom)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    // Set default icon
    L.Marker.prototype.options.icon = DefaultIcon

    // Add marker if position is provided
    if (markerPosition) {
      L.marker([markerPosition[0], markerPosition[1]]).addTo(map)
    }

    return () => {
      map.remove()
    }
  }, [center, zoom, markerPosition])

  return <div id="map" style={{ height: '100%', width: '100%' }} />
}

export default LeafletMap