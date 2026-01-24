import React, { useState, useEffect } from 'react';
import {
    Map as MapIcon, Navigation, Shield, AlertTriangle,
    Home, Plus, Minus, Layers, Crosshair, User
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './VolunteerDashboard.css';

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

// Custom Icons factory
const createCustomIcon = (iconHtml, className) => {
    return L.divIcon({
        html: `<div class="${className}">${iconHtml}</div>`,
        className: 'custom-leaflet-icon',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
};

// 1. User Marker: Cyan Pulsing Dot
const userIcon = createCustomIcon(
    `<div class="w-6 h-6 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20 relative"></div>
     <div class="w-16 h-16 rounded-full border-2 border-cyan-400/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>`,
    'flex items-center justify-center relative'
);

// 2. Destination Marker: Orange Warning Triangle
const destinationIcon = createCustomIcon(
    `<div class="relative flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#f59e0b" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-lg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        <div class="mt-1 text-[10px] text-white font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm whitespace-nowrap border border-white/10">COLLAPSE</div>
     </div>`,
    'flex flex-col items-center justify-center'
);

// Locations
const LOCATIONS = {
    USER: [19.1590, 72.9986], // Start
    SECTOR_7: [19.1650, 73.0030], // End
    SHELTER_B: [19.1520, 72.9920],
    GAS_LEAK: [19.1620, 72.9850]
};

// Map Controller for external buttons
const MapController = ({ zoomIn, zoomOut, recenter, setMap, focusRoute }) => {
    const map = useMap();

    useEffect(() => {
        setMap(map);
    }, [map, setMap]);

    useEffect(() => {
        if (zoomIn) {
            map.zoomIn();
            zoomIn.reset();
        }
    }, [zoomIn, map]);

    useEffect(() => {
        if (zoomOut) {
            map.zoomOut();
            zoomOut.reset();
        }
    }, [zoomOut, map]);

    useEffect(() => {
        if (recenter) {
            map.flyTo(LOCATIONS.USER, 16);
            recenter.reset();
        }
    }, [recenter, map]);

    useEffect(() => {
        if (focusRoute) {
            const bounds = L.latLngBounds([LOCATIONS.USER, LOCATIONS.SECTOR_7]);
            map.fitBounds(bounds, { padding: [100, 100], animate: true });
            focusRoute.reset();
        }
    }, [focusRoute, map]);

    return null;
};

const VolunteerMap = () => {
    const [map, setMap] = useState(null);
    const [layers, setLayers] = useState({
        tasks: true,
        hazards: true,
        safeZones: true,
        teams: true
    });
    // Default to ACTIVE guidance
    const [showRoute, setShowRoute] = useState(true);

    // Trigger states
    const [zoomInTrigger, setZoomInTrigger] = useState(null);
    const [zoomOutTrigger, setZoomOutTrigger] = useState(null);
    const [recenterTrigger, setRecenterTrigger] = useState(null);
    const [focusRouteTrigger, setFocusRouteTrigger] = useState(null); // New trigger

    // Initial load focus
    useEffect(() => {
        // Delay slightly to ensure map is ready
        const timer = setTimeout(() => {
            setFocusRouteTrigger({ reset: () => setFocusRouteTrigger(null) });
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const toggleLayer = (layer) => {
        setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
    };

    const handleZoomIn = () => setZoomInTrigger({ reset: () => setZoomInTrigger(null) });
    const handleZoomOut = () => setZoomOutTrigger({ reset: () => setZoomOutTrigger(null) });
    const handleRecenter = () => setRecenterTrigger({ reset: () => setRecenterTrigger(null) });

    const toggleGuidance = () => {
        const newState = !showRoute;
        setShowRoute(newState);
        if (newState) {
            setFocusRouteTrigger({ reset: () => setFocusRouteTrigger(null) });
        }
    };

    // Other Icons
    const hazardIcon = createCustomIcon(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
         <div class="bg-red-900/80 text-white text-[10px] px-1 rounded border border-red-500/50 absolute -bottom-6 whitespace-nowrap">GAS LEAK</div>`,
        'flex flex-col items-center justify-center'
    );

    const shelterIcon = createCustomIcon(
        `<div class="p-1.5 bg-green-500/20 rounded-full border border-green-500/50 text-green-400"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
         <div class="mt-1 text-[10px] text-green-400 font-bold bg-black/50 px-1 rounded absolute -bottom-5 whitespace-nowrap">SHELTER B</div>`,
        'flex flex-col items-center justify-center'
    );

    return (
        <div className="relative h-[calc(100vh-70px)] bg-gray-900 overflow-hidden">
            <MapContainer
                center={LOCATIONS.USER}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
                attributionControl={false}
                className="z-0"
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; CARTO'
                />

                <MapController
                    zoomIn={zoomInTrigger}
                    zoomOut={zoomOutTrigger}
                    recenter={recenterTrigger}
                    focusRoute={focusRouteTrigger}
                    setMap={setMap}
                />

                {/* Markers */}
                <Marker position={LOCATIONS.USER} icon={userIcon}>
                    <Popup className="custom-popup">Active Unit: VOLUNTEERS01</Popup>
                </Marker>

                {layers.tasks && (
                    <Marker position={LOCATIONS.SECTOR_7} icon={destinationIcon}>
                        <Popup>
                            <div className="font-bold text-orange-400">TARGET: COLLAPSE</div>
                            <div className="text-xs">Priority: CRITICAL</div>
                        </Popup>
                    </Marker>
                )}

                {layers.hazards && (
                    <Marker position={LOCATIONS.GAS_LEAK} icon={hazardIcon} />
                )}

                {layers.safeZones && (
                    <Marker position={LOCATIONS.SHELTER_B} icon={shelterIcon} />
                )}

                {/* Glowing Route */}
                {showRoute && (
                    <Polyline
                        positions={[LOCATIONS.USER, LOCATIONS.SECTOR_7]}
                        pathOptions={{
                            color: '#00eeee',
                            weight: 5,
                            className: 'glowing-path',
                            lineCap: 'round',
                            dashArray: '1, 10'
                        }}
                    />
                )}
            </MapContainer>

            {/* Top Right: User Identity Card */}
            <div className="absolute top-4 right-4 z-[400] flex items-center gap-2">
                <div className="text-right">
                    <div className="text-xs font-bold text-white tracking-wider">VOLUNTEERS01</div>
                    <div className="text-[10px] text-cyan-400 font-bold uppercase">Volunteer</div>
                </div>
                <div className="w-10 h-10 rounded bg-cyan-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]">
                    <User size={20} />
                </div>
            </div>

            {/* Left: Map Layers */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-[400] flex flex-col gap-2">
                <div className="bg-black/80 backdrop-blur-md border-l-2 border-cyan-400 p-4 w-56 shadow-2xl">
                    <h3 className="text-sm font-bold text-white mb-3">Map Layers</h3>
                    <div className="space-y-3">
                        <LayerToggle label="My Tasks" active={layers.tasks} onClick={() => toggleLayer('tasks')} color="text-cyan-400" />
                        <LayerToggle label="Hazards" active={layers.hazards} onClick={() => toggleLayer('hazards')} color="text-red-500" />
                        <LayerToggle label="Safe Zones" active={layers.safeZones} onClick={() => toggleLayer('safeZones')} color="text-green-500" />
                        <LayerToggle label="Teams" active={layers.teams} onClick={() => toggleLayer('teams')} color="text-blue-400" />
                    </div>
                    {/* Inline Controls */}
                    <div className="flex gap-1 mt-4 pt-4 border-t border-gray-700">
                        <button onClick={handleZoomIn} className="p-1 hover:bg-gray-700 rounded text-gray-300"><Plus size={18} /></button>
                        <button onClick={handleZoomOut} className="p-1 hover:bg-gray-700 rounded text-gray-300"><Minus size={18} /></button>
                        <button onClick={handleRecenter} className="p-1 hover:bg-gray-700 rounded text-gray-300"><Crosshair size={18} /></button>
                    </div>
                </div>
            </div>

            {/* Bottom Left: Navigation HUD */}
            <div className="absolute bottom-16 left-6 z-[400] max-w-sm">
                <div className="mb-2 flex items-center gap-2">
                    <Navigation className="text-cyan-400 animate-pulse" size={20} />
                    <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">Active Navigation</span>
                </div>

                <h2 className="text-3xl font-mono font-bold text-white leading-none mb-1">
                    1.2 KM <span className="text-sm text-gray-400 font-sans font-normal">TO TARGET</span>
                </h2>

                <p className="text-gray-400 text-sm mb-4 leading-snug">
                    Straight line route. Terrain advisory: <span className="text-orange-400">Moderate Debris</span>.
                </p>

                <button
                    onClick={toggleGuidance}
                    className={`
                        px-6 py-2 rounded font-bold text-sm tracking-wide uppercase transition-all
                        ${showRoute
                            ? 'bg-[#f59e0b] text-black hover:bg-[#d97706] shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                            : 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_0_20px_rgba(8,145,178,0.4)]'
                        }
                    `}
                >
                    {showRoute ? 'Cancel Guidance' : 'Start Guidance'}
                </button>
            </div>

            {/* Status Indicator (Bottom-Left) */}
            <div className="absolute bottom-3 left-6 z-[400]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[rgba(0,50,30,0.8)] border border-green-500/30 backdrop-blur-sm">
                    <span className="text-green-400 font-bold text-[10px]">✓</span>
                    <span className="text-[#00FF88] font-mono text-[11px] font-bold tracking-wider">99% OPERATIONAL</span>
                </div>
            </div>

            {/* Custom Attribution (Bottom-Right) */}
            <div className="absolute bottom-2 right-2 z-[400] flex flex-row items-center gap-2 text-[10px] text-white/50 font-sans select-none pointer-events-none whitespace-nowrap bg-black/50 px-2 py-1 rounded">
                <span>Leaflet</span>
                <span>|</span>
                <span>&copy; OpenStreetMap contributors</span>
                <span>|</span>
                <span>&copy; CARTO</span>
            </div>

        </div>
    );
};

// Helper
const LayerToggle = ({ label, active, onClick, color }) => (
    <div className="flex items-center justify-between cursor-pointer group" onClick={onClick}>
        <span className={`text-sm transition ${active ? 'text-gray-200' : 'text-gray-500 group-hover:text-gray-400'}`}>{label}</span>
        {active && <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')} shadow-[0_0_8px_currentColor]`}></div>}
    </div>
);

export default VolunteerMap;
