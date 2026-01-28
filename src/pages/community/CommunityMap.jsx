import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ArrowLeft, MapPin, AlertTriangle, Shield, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Icons
const createCustomIcon = (iconHtml, className) => {
    return L.divIcon({
        html: `<div class="${className}">${iconHtml}</div>`,
        className: 'custom-leaflet-icon',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
};

const CommunityMap = () => {
    const navigate = useNavigate();
    const [userLocation] = useState([19.1590, 72.9986]); // Default start

    // Dummy Data for Map
    const markers = [
        { id: 1, pos: [19.1650, 73.0030], type: 'hazard', title: 'Road Blockage', desc: 'Fallen tree blocking main road.' },
        { id: 2, pos: [19.1520, 72.9920], type: 'safe', title: 'Community Center', desc: 'Open for shelter.' },
        { id: 3, pos: [19.1620, 72.9850], type: 'hazard', title: 'Power Line Down', desc: 'Avoid area.' },
        { id: 4, pos: [19.1550, 73.0000], type: 'info', title: 'Water Distribution', desc: 'Truck available till 6 PM.' },
    ];

    const getIcon = (type) => {
        if (type === 'hazard') {
            return createCustomIcon(
                `<div class="bg-red-500 rounded-full p-2 border-2 border-white shadow-lg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg></div>`,
                'flex items-center justify-center'
            );
        }
        if (type === 'safe') {
            return createCustomIcon(
                `<div class="bg-green-500 rounded-full p-2 border-2 border-white shadow-lg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>`,
                'flex items-center justify-center'
            );
        }
        return createCustomIcon(
            `<div class="bg-blue-500 rounded-full p-2 border-2 border-white shadow-lg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>`,
            'flex items-center justify-center'
        );
    };

    return (
        <div className="h-screen w-full relative bg-slate-900">
            {/* Header / Back Button */}
            <div className="absolute top-4 left-4 z-[1000]">
                <button
                    onClick={() => navigate('/dashboard/community')}
                    className="bg-white/90 backdrop-blur text-slate-800 px-4 py-2 rounded-lg shadow-lg font-bold flex items-center gap-2 hover:bg-white transition"
                >
                    <ArrowLeft size={18} /> Back to Dashboard
                </button>
            </div>

            <MapContainer
                center={userLocation}
                zoom={14}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />

                {/* User Location */}
                <Marker position={userLocation} icon={createCustomIcon(
                    `<div class="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-lg relative z-20"></div><div class="w-12 h-12 rounded-full border-2 border-blue-500/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>`,
                    'flex items-center justify-center'
                )}>
                    <Popup>You are here</Popup>
                </Marker>

                {/* Incident Markers */}
                {markers.map(m => (
                    <Marker key={m.id} position={m.pos} icon={getIcon(m.type)}>
                        <Popup>
                            <div className="font-bold text-sm mb-1">{m.title}</div>
                            <div className="text-xs text-slate-600">{m.desc}</div>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>

            {/* Legend */}
            <div className="absolute bottom-6 right-6 z-[1000] bg-white/90 backdrop-blur p-4 rounded-lg shadow-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2 text-sm">Map Legend</h4>
                <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> Hazard / Incident</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div> Safe Shelter</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Resource / Info</div>
                </div>
            </div>
        </div>
    );
};

export default CommunityMap;
