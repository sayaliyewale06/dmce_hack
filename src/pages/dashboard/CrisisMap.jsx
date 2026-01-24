import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import {
    Flame, Shield, Stethoscope, Users, ChevronRight, AlertTriangle,
    Navigation, Radio, Crosshair, Clock, Filter
} from 'lucide-react';

// Fix for default Leaflet marker icons in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Icons Utilities
const createCustomIcon = (IconComponent, color) => {
    const markup = renderToStaticMarkup(
        <div style={{
            background: `rgba(15, 23, 42, 0.8)`,
            border: `2px solid ${color}`,
            borderRadius: '50%',
            padding: '6px',
            boxShadow: `0 0 10px ${color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <IconComponent size={20} color={color} fill={color} fillOpacity={0.2} />
        </div>
    );
    return L.divIcon({
        html: markup,
        className: 'custom-marker-icon',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
};

const CrisisMap = () => {
    // State for filters
    const [filters, setFilters] = useState({
        medical: true,
        fire: true,
        security: true,
        responders: true
    });

    // Mock Data
    const incidents = [
        { id: 1, type: 'Fire', lat: 40.7128, lng: -74.0060, title: 'CONTAINMENT FIRE', sector: 3, responders: 3, distance: '1.2 km', time: '5 min ago', severity: 'HIGH', icon: Flame, color: '#f97316' },
        { id: 2, type: 'Medical', lat: 40.7150, lng: -74.0100, title: 'MEDICAL EMERGENCY', sector: 7, responders: 2, distance: '0.8 km', time: '12 min ago', severity: 'MEDIUM', icon: Stethoscope, color: '#06b6d4' },
        { id: 3, type: 'Security', lat: 40.7088, lng: -74.0080, title: 'CIVIL DISTURBANCE', sector: 4, responders: 5, distance: '2.5 km', time: '2 min ago', severity: 'CRITICAL', icon: Shield, color: '#ef4444' },
        { id: 4, type: 'Fire', lat: 40.7180, lng: -73.9990, title: 'STRUCTURE FIRE', sector: 12, responders: 4, distance: '3.1 km', time: '18 min ago', severity: 'HIGH', icon: Flame, color: '#f97316' },
    ];

    const respondersList = [
        { id: 1, name: 'Rescue Team 3', status: 'RESPONDING', distance: '1.2 km', action: 'RESPONDING', from: 'Sector 1', icon: Users, color: '#3b82f6' },
        { id: 2, name: 'Med Team 6', status: 'EN ROUTE', distance: '2.5 km', action: 'EN ROUTE', from: 'Hospital General', icon: Stethoscope, color: '#06b6d4' },
        { id: 3, name: 'Patrol Unit 7', status: 'ON PATROL', distance: '0.5 km', action: 'PATROLLING', from: 'Sector 4', icon: Shield, color: '#ef4444' },
    ];

    // Toggle Filter
    const toggleFilter = (key) => {
        setFilters(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'CRITICAL': return '#ef4444';
            case 'HIGH': return '#f97316';
            case 'MEDIUM': return '#eab308';
            default: return '#3b82f6';
        }
    };

    return (
        <div style={{ position: 'relative', height: 'calc(100vh - 70px)', width: '100%', overflow: 'hidden' }}>

            {/* Map Container */}
            <MapContainer
                center={[40.7128, -74.0060]}
                zoom={14}
                style={{ height: '100%', width: '100%', background: '#0f1419' }}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />

                {/* Incident Markers */}
                {incidents.map((incident) => {
                    const isVisible =
                        (incident.type === 'Fire' && filters.fire) ||
                        (incident.type === 'Medical' && filters.medical) ||
                        (incident.type === 'Security' && filters.security);

                    if (!isVisible) return null;

                    return (
                        <Marker
                            key={incident.id}
                            position={[incident.lat, incident.lng]}
                            icon={createCustomIcon(incident.icon, incident.color)}
                        >
                            <Popup
                                className="custom-popup"
                                closeButton={false}
                                style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}
                            >
                                <div style={{
                                    background: 'rgba(15, 23, 42, 0.95)',
                                    border: `1px solid ${getSeverityColor(incident.severity)}`,
                                    borderRadius: '8px',
                                    padding: '1rem',
                                    width: '280px',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    fontFamily: "'Rajdhani', sans-serif"
                                }}>
                                    <div style={{
                                        position: 'absolute', top: -10, left: 10,
                                        background: '#0f172a', border: `1px solid ${getSeverityColor(incident.severity)}`,
                                        padding: '2px 8px', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '4px'
                                    }}>
                                        Sector {incident.sector}
                                    </div>
                                    <h3 style={{ margin: '10px 0 5px 0', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <incident.icon size={18} color={incident.color} />
                                        {incident.title}
                                    </h3>
                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '10px' }}>
                                        {incident.responders} ACTIVE RESPONDERS
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '8px' }}>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Navigation size={12} /> {incident.distance}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {incident.time}</span>
                                        </div>
                                        <span style={{
                                            background: `${getSeverityColor(incident.severity)}20`,
                                            color: getSeverityColor(incident.severity),
                                            padding: '2px 6px', borderRadius: '4px', fontWeight: '800', fontSize: '0.7rem'
                                        }}>
                                            {incident.severity}
                                        </span>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}

                {/* Responder Markers */}
                {filters.responders && respondersList.map((responder) => (
                    <CircleMarker
                        key={`resp-${responder.id}`}
                        center={[
                            40.7128 + (Math.random() * 0.01 - 0.005),
                            -74.0060 + (Math.random() * 0.01 - 0.005)
                        ]}
                        pathOptions={{ color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.8 }}
                        radius={6}
                    >
                        <Popup>
                            <div style={{ color: 'black', fontWeight: 'bold' }}>{responder.name}</div>
                        </Popup>
                    </CircleMarker>
                ))}

            </MapContainer>

            {/* Header Overlay */}
            <div style={{
                position: 'absolute', top: '20px', left: '30px', zIndex: 999,
                pointerEvents: 'none' // Let clicks pass through
            }}>
                <h1 style={{
                    fontSize: '2rem', fontWeight: 'bold', fontFamily: "'Rajdhani', sans-serif",
                    color: 'white', letterSpacing: '2px', textShadow: '0 0 20px rgba(0,0,0,0.8)'
                }}>CRISIS MAP</h1>
            </div>

            {/* Filter Panel Overlay */}
            <div style={{
                position: 'absolute', top: '20px', right: '350px', zIndex: 1000, // Adjusted Right to not overlap with Responders Panel if it were full height, but design shows right sidebar
                background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)',
                borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)',
                width: '200px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                    <Filter size={14} /> FILTERS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                        { key: 'medical', label: 'Medical', color: '#06b6d4' },
                        { key: 'fire', label: 'Fire', color: '#f97316' },
                        { key: 'security', label: 'Security', color: '#ef4444' },
                        { key: 'responders', label: 'Responders', color: '#3b82f6' }
                    ].map(f => (
                        <div
                            key={f.key}
                            onClick={() => toggleFilter(f.key)}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', opacity: filters[f.key] ? 1 : 0.5, transition: '0.2s' }}
                        >
                            <div style={{
                                width: '18px', height: '18px', borderRadius: '50%', background: filters[f.key] ? f.color : 'transparent',
                                border: `2px solid ${f.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                {filters[f.key] && <div style={{ width: '8px', height: '8px', background: '#0f172a', borderRadius: '50%' }} />}
                            </div>
                            <span style={{ color: 'white', fontWeight: '500', fontSize: '0.9rem' }}>{f.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responders Panel Overlay - Right Side */}
            <div style={{
                position: 'absolute', top: '20px', right: '20px', bottom: '20px', zIndex: 1000,
                width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem', pointerEvents: 'none'
            }}>
                {/* Active Units Summary */}
                <div style={{
                    background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(12px)',
                    borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)',
                    pointerEvents: 'auto'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>RESPONDERS</span>
                        <span style={{ color: '#00f0ff', fontSize: '1.2rem', fontWeight: 'bold' }}>92</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.9rem' }}>
                        <Radio size={16} color="#00f0ff" /> Active Units
                    </div>
                </div>

                {/* Responders List */}
                <div style={{
                    background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(12px)',
                    borderRadius: '12px', flex: 1, border: '1px solid rgba(255,255,255,0.05)',
                    pointerEvents: 'auto', overflow: 'hidden', display: 'flex', flexDirection: 'column'
                }}>
                    <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>Response Teams</span>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} />
                    </div>
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {respondersList.map((team, idx) => (
                            <div key={idx} style={{
                                padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)',
                                display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1rem', alignItems: 'center',
                                cursor: 'pointer', transition: '0.2s'
                            }}
                                className="responder-item"
                            >
                                <div style={{
                                    width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <team.icon size={18} color={team.color} />
                                </div>
                                <div>
                                    <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{team.name}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2px' }}>
                                        <span style={{
                                            background: team.status === 'RESPONDING' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                                            color: team.status === 'RESPONDING' ? '#f97316' : '#3b82f6',
                                            fontSize: '0.65rem', padding: '1px 6px', borderRadius: '4px', fontWeight: 'bold'
                                        }}>{team.status}</span>
                                        <span style={{ color: '#64748b', fontSize: '0.75rem' }}>{team.distance}</span>
                                    </div>
                                </div>
                                <ChevronRight size={16} color="#475569" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrisisMap;
