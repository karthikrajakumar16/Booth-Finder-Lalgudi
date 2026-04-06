import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polygon } from "react-leaflet";
import L from "leaflet";
// eslint-disable-next-line import/no-unresolved
import "leaflet/dist/leaflet.css";
import { booths } from "@/data/booths";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

const createBoothIcon = (id: number, isActive: boolean) => {
  const size = isActive ? 28 : 22;
  const bg = isActive ? "hsl(45, 100%, 50%)" : "hsl(0, 80%, 55%)";
  const border = isActive ? "hsl(215, 75%, 20%)" : "rgba(0,0,0,0.3)";
  const textColor = isActive ? "hsl(215, 75%, 20%)" : "white";
  const shadow = isActive ? "0 0 10px rgba(255,200,0,0.6)" : "0 2px 4px rgba(0,0,0,0.3)";

  return L.divIcon({
    className: "custom-booth-icon",
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50%;
      background:${bg};border:2px solid ${border};
      display:flex;align-items:center;justify-content:center;
      font-size:${isActive ? 10 : 8}px;font-weight:700;color:${textColor};
      box-shadow:${shadow};transition:all 0.2s;
      cursor:pointer;
    ">${id}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

const FlyToActive = ({ activeBoothId }: { activeBoothId: number | null }) => {
  const map = useMap();
  useEffect(() => {
    if (activeBoothId !== null) {
      const booth = booths.find((b) => b.id === activeBoothId);
      if (booth) {
        map.flyTo([booth.lat, booth.lng], map.getZoom(), { duration: 0.5 });
      }
    }
  }, [activeBoothId, map]);
  return null;
};

const BoothMap = () => {
  const [activeBoothId, setActiveBoothId] = useState<number | null>(null);
  const [expandedAreaBoothId, setExpandedAreaBoothId] = useState<number | null>(null);

  const center: [number, number] = [10.8711, 78.8197];

  // Lalgudi constituency boundary coordinates (polygon points)
  const constituencyBoundary: [number, number][] = [
    [11.100, 78.810],
    [11.100, 79.015],
    [11.020, 79.015],
    [10.880, 79.000],
    [10.845, 78.895],
    [10.845, 78.710],
    [10.915, 78.710],
    [11.000, 78.815],
    [11.100, 78.810],
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-5 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Lalgudi Constituency
          </h1>
          <p className="text-primary-foreground/70 text-sm mt-1">
            Tiruchirappalli District — {booths.length} Polling Booths
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <div className="rounded-xl overflow-hidden border border-border shadow-md" style={{ height: "75vh" }}>
            <MapContainer
              center={center}
              zoom={12}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polygon
                positions={constituencyBoundary}
                pathOptions={{
                  color: "hsl(215, 75%, 20%)",
                  weight: 3,
                  opacity: 0.8,
                  fillColor: "hsl(45, 100%, 50%)",
                  fillOpacity: 0.05,
                }}
              />
              <FlyToActive activeBoothId={activeBoothId} />
              {booths.map((booth) => (
                <Marker
                  key={booth.id}
                  position={[booth.lat, booth.lng]}
                  icon={createBoothIcon(booth.id, activeBoothId === booth.id)}
                  eventHandlers={{
                    mouseover: () => setActiveBoothId(booth.id),
                    mouseout: () => setActiveBoothId(null),
                  }}
                  
                >
                  <Popup>
                    <div className="text-sm">
                      <p className="font-bold text-primary">
                        Booth {booth.id}
                        {booth.votersCount && (
                          <span> ({booth.votersCount.toLocaleString()} voters)</span>
                        )}
                      </p>
                      <p className="font-medium mt-1">{booth.name}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{booth.address}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <aside className="lg:w-80 shrink-0">
          <div className="sticky top-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
            <div className="bg-primary px-4 py-3">
              <h2 className="text-primary-foreground font-semibold text-sm">
                All Booths ({booths.length})
              </h2>
            </div>
            <div className="max-h-[70vh] overflow-y-auto">
              {booths.map((booth) => (
                <div key={booth.id}>
                  <div
                    className={`px-4 py-2.5 border-b border-border/50 cursor-pointer transition-colors duration-150 ${
                      activeBoothId === booth.id
                        ? "bg-map-highlight/20 border-l-4 border-l-map-booth-hover"
                        : "hover:bg-muted border-l-4 border-l-transparent"
                    }`}
                    onMouseEnter={() => setActiveBoothId(booth.id)}
                    onMouseLeave={() => setActiveBoothId(null)}
                    onClick={() => {
                      setActiveBoothId(booth.id);
                      if (booth.areaCovered && booth.areaCovered.length > 0) {
                        setExpandedAreaBoothId(
                          expandedAreaBoothId === booth.id ? null : booth.id
                        );
                      }
                    }}
                  >
                    <p className="text-xs font-bold text-map-booth">
                      Booth {booth.id}
                    </p>
                    <p className="text-sm font-medium text-foreground leading-tight mt-0.5">
                      {booth.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {booth.address}
                    </p>
                    {booth.votersCount && (
                      <p className="text-[11px] text-primary font-medium mt-1">
                        👥 {booth.votersCount.toLocaleString()} voters
                      </p>
                    )}
                    {booth.areaCovered && booth.areaCovered.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveBoothId(booth.id);
                          setExpandedAreaBoothId(
                            expandedAreaBoothId === booth.id ? null : booth.id
                          );
                        }}
                        className="mt-2 text-xs px-2 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded transition-colors duration-200"
                      >
                        {expandedAreaBoothId === booth.id ? "▼" : "▶"} Areas Covered
                      </button>
                    )}
                  </div>
                  {expandedAreaBoothId === booth.id && booth.areaCovered && (
                    <div className="bg-muted/50 border-b border-border/50 max-h-96 overflow-y-auto animate-expand-in">
                      <div className="px-4 py-3 space-y-2">
                        {booth.areaCovered.map((area, idx) => (
                          <div
                            key={idx}
                            className="text-xs text-muted-foreground bg-background rounded px-2.5 py-1.5 border border-border/40 leading-relaxed"
                          >
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BoothMap;
