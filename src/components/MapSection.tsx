import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// NOTE: fix leaflet icon path in your app if needed

export default function MapSection({ schools }: any){
  const center = schools.length ? [schools[0].lat, schools[0].lng] : [52.52, 13.405];

  return (
    <section className="map-section">
      <h3>Participating Schools</h3>
      <div style={{ height: 300 }}>
        <MapContainer center={center as any} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {schools.map((s: any) => (
            <Marker key={s.id} position={[s.lat, s.lng]}>
              <Popup>
                <strong>{s.name}</strong><br />{s.short}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
