import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import {
    Filter, Radio, Flame, Shield, Activity, Users,
    ChevronRight, Plus, Minus, Search, Navigation
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './CrisisMap.css';

// --- CUSTOM ICONS SETUP ---

// Fix Default Leaflet Icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Marker Factory
const createGlowingIcon = (type) => {
    let color = '#fff';
    let iconHtml = '';
    let glowColor = 'rgba(255,255,255,0.5)';

    // Define styles based on type
    if (type === 'fire') {
        color = '#FF6B35'; // Orange
        glowColor = 'rgba(255, 107, 53, 0.6)';
        iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3a6 6 0 0 1 2 2.5Z"/></svg>`;
    } else if (type === 'medical') {
        color = '#00ffff'; // Cyan
        glowColor = 'rgba(0, 255, 255, 0.6)';
        iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
    } else if (type === 'security') {
        color = '#DC143C'; // Red
        glowColor = 'rgba(220, 20, 60, 0.6)';
        iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
    } else if (type === 'responder') {
        color = '#4169E1'; // Blue
        glowColor = 'rgba(65, 105, 225, 0.6)';
        iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" x2="20" y1="8" y2="14"/><line x1="23" x2="17" y1="11" y2="11"/></svg>`;
    }

    return L.divIcon({
        html: `
            <div style="
                position: relative;
                width: 40px; 
                height: 40px; 
                display: flex; 
                align-items: center; 
                justify-content: center;
            ">
                <div style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: ${glowColor};
                    opacity: 0.3;
                    animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
                "></div>
                <div style="
                    position: relative;
                    width: 32px;
                    height: 32px;
                    background: rgba(10, 10, 10, 0.8);
                    border: 2px solid ${color};
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 10px ${glowColor};
                ">
                    ${iconHtml}
                </div>
            </div>
        `,
        className: 'custom-marker-container',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
};


// --- COMPONENTS ---

const MapController = ({ zoomIn, zoomOut }) => {
    const map = useMap();
    useEffect(() => {
        if (zoomIn) { map.zoomIn(); zoomIn.reset(); }
        if (zoomOut) { map.zoomOut(); zoomOut.reset(); }
    }, [zoomIn, zoomOut, map]);
    return null;
};

const CrisisMap = () => {
    // --- STATE ---
    const [activeFilters, setActiveFilters] = useState({
        medical: true,
        fire: true,
        security: true,
        responders: true
    });

    const [zoomInTrigger, setZoomInTrigger] = useState(null);
    const [zoomOutTrigger, setZoomOutTrigger] = useState(null);

    // --- DATA ---
    // In a real app, this would come from a websocket or API
    const incidents = [
        { id: 1, type: 'fire', pos: [19.1650, 73.0030], title: 'Industrial Fire', desc: 'Warehouse 4B', status: 'Active' },
        { id: 2, type: 'medical', pos: [19.1620, 72.9850], title: 'Cardiac Emergency', desc: 'Sector 2 Res.', status: 'Unit Dispatched' },
        { id: 3, type: 'security', pos: [19.1550, 73.0000], title: 'Looting Attempt', desc: 'Market District', status: 'Patrol En Route' },
        { id: 4, type: 'fire', pos: [19.1580, 72.9910], title: 'Small Brush Fire', desc: 'Park Zone', status: 'Contained' },
    ];

    const responders = [
        { id: 'R1', name: 'Rescue Team 3', type: 'responder', status: 'RESPONDING', dist: '1.2 km', pos: [19.1630, 73.0010], iconType: 'users' },
        { id: 'R2', name: 'Med Team 6', type: 'responder', status: 'EN ROUTE', dist: '2.6 km', pos: [19.1600, 72.9880], iconType: 'activity' },
        { id: 'R3', name: 'Patrol Unit 7', type: 'responder', status: 'ON PATROL', dist: '0.5 km', pos: [19.1560, 72.9990], iconType: 'shield' },
    ];

    // --- HANDLERS ---
    const toggleFilter = (key) => {
        setActiveFilters(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleZoomIn = () => setZoomInTrigger({ reset: () => setZoomInTrigger(null) });
    const handleZoomOut = () => setZoomOutTrigger({ reset: () => setZoomOutTrigger(null) });

    return (
        <div className="crisis-map-container">

            {/* --- MAP AREA (LEFT/CENTER) --- */}
            <div className="map-area">
                <MapContainer
                    center={[19.1600, 73.0000]}
                    zoom={14}
                    style={{ height: "100%", width: "100%", background: 'transparent' }}
                    zoomControl={false}
                    attributionControl={false}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; CARTO'
                        opacity={0.9} // Slight transparency for background blend if needed
                    />

                    <MapController zoomIn={zoomInTrigger} zoomOut={zoomOutTrigger} />

                    {/* Render Incidents */}
                    {incidents.map(inc => {
                        if (!activeFilters[inc.type]) return null;
                        return (
                            <Marker key={inc.id} position={inc.pos} icon={createGlowingIcon(inc.type)}>
                                <Popup className="crisis-popup" closeButton={false}>
                                    <div className="p-3 bg-black/80 w-48">
                                        <div className="flex items-center gap-2 mb-2 border-b border-gray-700 pb-2">
                                            {inc.type === 'fire' && <Flame size={16} className="text-orange-500" />}
                                            {inc.type === 'medical' && <Activity size={16} className="text-cyan-400" />}
                                            {inc.type === 'security' && <Shield size={16} className="text-red-500" />}
                                            <span className="font-bold text-sm tracking-wide uppercase">{inc.title}</span>
                                        </div>
                                        <div className="text-xs text-gray-300 mb-2">{inc.desc}</div>
                                        <div className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/10 w-fit">
                                            Status: <span className={inc.type === 'security' ? 'text-red-400' : 'text-cyan-400'}>{inc.status}</span>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        )
                    })}

                    {/* Render Responders */}
                    {activeFilters.responders && responders.map(res => (
                        <Marker key={res.id} position={res.pos} icon={createGlowingIcon('responder')}>
                            <Popup className="crisis-popup" closeButton={false}>
                                <div className="p-3">
                                    <div className="font-bold text-blue-400 mb-1">{res.name}</div>
                                    <div className="text-xs text-white">{res.status}</div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                </MapContainer>

                {/* Map Overlays */}

                {/* Search Bar */}
                <div className="absolute top-4 left-4 z-[500] w-72">
                    <div className="bg-black/60 backdrop-blur border border-white/10 rounded-lg flex items-center p-2 shadow-lg">
                        <Search size={18} className="text-gray-400 ml-2" />
                        <input
                            type="text"
                            placeholder="Search Sector or Unit ID..."
                            className="bg-transparent border-none text-white text-sm ml-3 w-full outline-none placeholder-gray-500 font-mono"
                        />
                    </div>
                </div>

                {/* Zoom Controls */}
                <div className="custom-map-controls">
                    <button onClick={handleZoomIn} className="control-btn"><Plus size={20} /></button>
                    <button onClick={handleZoomOut} className="control-btn"><Minus size={20} /></button>
                    <button className="control-btn"><Navigation size={18} /></button>
                </div>
            </div>


            {/* --- RIGHT PANEL (FILTERS & RESPONDERS) --- */}
            <div className="right-panel">

                {/* 1. FILTERS SECTION */}
                <div className="panel-header">
                    <div className="flex items-center gap-2">
                        <Filter size={16} className="text-cyan-400" />
                        <span className="panel-title">FILTERS</span>
                    </div>
                </div>

                <div className="filter-list">
                    <FilterItem
                        label="Medical"
                        color="#00ffff"
                        icon={<Activity size={16} />}
                        active={activeFilters.medical}
                        onClick={() => toggleFilter('medical')}
                    />
                    <FilterItem
                        label="Fire"
                        color="#FF6B35"
                        icon={<Flame size={16} />}
                        active={activeFilters.fire}
                        onClick={() => toggleFilter('fire')}
                    />
                    <FilterItem
                        label="Security"
                        color="#DC143C"
                        icon={<Shield size={16} />}
                        active={activeFilters.security}
                        onClick={() => toggleFilter('security')}
                    />
                    <FilterItem
                        label="Responders"
                        color="#4169E1"
                        icon={<Users size={16} />}
                        active={activeFilters.responders}
                        onClick={() => toggleFilter('responders')}
                    />
                </div>

                {/* 2. RESPONDERS SECTION */}
                <div className="panel-header" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-2">
                        <span className="panel-title">RESPONDERS</span>
                        <span className="text-cyan-400 font-bold text-lg">92</span>
                    </div>
                    <div className="text-xs text-green-400 flex items-center gap-1 font-mono uppercase tracking-wider">
                        <Radio size={12} className="animate-pulse" /> Active Units
                    </div>
                </div>

                <div className="responder-list">
                    <div className="text-xs text-purple-400 uppercase font-bold tracking-wider mb-2 ml-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Response Teams
                    </div>

                    {responders.map(team => (
                        <div key={team.id} className={`team-card ${team.status === 'RESPONDING' ? 'status-red' : 'status-blue'}`}>
                            <div className="team-info">
                                <div className="team-icon">
                                    {team.iconType === 'users' && <Users size={18} className="text-cyan-400" />}
                                    {team.iconType === 'activity' && <Activity size={18} className="text-cyan-400" />}
                                    {team.iconType === 'shield' && <Shield size={18} className="text-red-400" />}
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-white">{team.name}</div>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${team.status === 'RESPONDING' ? 'bg-red-500/20 text-red-500' : 'bg-blue-500/20 text-blue-400'
                                            }`}>
                                            {team.status}
                                        </span>
                                        <span className="text-xs text-gray-500">{team.dist}</span>
                                    </div>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-600" />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

// Sub-component for Filters
const FilterItem = ({ label, color, icon, active, onClick }) => (
    <div className={`filter-item ${active ? 'active' : ''}`} onClick={onClick}>
        <div
            className="filter-dot"
            style={{
                background: active ? color : 'transparent',
                border: `2px solid ${color}`,
                boxShadow: active ? `0 0 10px ${color}` : 'none'
            }}
        ></div>
        <span className={`text-sm font-bold ${active ? 'text-white' : 'text-gray-500'}`}>{label}</span>
    </div>
);

export default CrisisMap;
