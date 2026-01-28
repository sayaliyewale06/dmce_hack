import React, { useState } from 'react';
import {
    Flame, Truck, Activity, Clock, MapPin, Settings,
    AlertTriangle, Box, Syringe, Map as MapIcon, Loader
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './VolunteerResources.css';

// Fix for default Leaflet markers
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom icons based on team type
const getCustomIcon = (color) => {
    return L.divIcon({
        className: 'custom-map-marker',
        html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 10px ${color}, 0 0 20px ${color}; border: 2px solid white;"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
};

const VolunteerResources = () => {
    const [activeTab, setActiveTab] = useState('RESPONDERS');

    // Mock Data based on Request
    const teams = [
        {
            id: 1,
            name: "Rescue Team 3",
            icon: Flame,
            priorityLabel: "Critical 3",
            priorityColor: "#DC143C", // Red
            status: "RESPONDING",
            statusBadgeColor: "#FF6B35", // Orange
            stats: { time: "40m", sector: "Sector 8", dist: "0.4 km" },
            coords: [51.505, -0.09], // Mock Coords
            bars: [
                { val: 71, color: "#10b981" }, // Green
                { val: 69, color: "#f97316" }, // Orange
                { val: 2, color: "#3b82f6" }   // Blue
            ]
        },
        {
            id: 2,
            name: "Hazmat Team 4",
            icon: AlertTriangle,
            priorityLabel: "RE ROUTE",
            priorityColor: "#3b82f6", // Blue text per requirement? Or Re Route is usually blue/info 
            status: "HIGH LEVEL",
            statusBadgeColor: "#eab308", // Yellow/Gold
            borderColor: "#f97316", // Orange border
            iconBg: "rgba(249, 115, 22, 0.1)",
            iconColor: "#f97316",
            coords: [51.51, -0.1], // Mock Coords
            stats: { time: "1h", sector: "Sector 11", dist: "0.2 km" },
            bars: [
                { val: 71, color: "#10b981" },
                { val: 25, color: "#f97316" },
                { val: 4, color: "#3b82f6" }
            ]
        },
        {
            id: 3,
            name: "Med Team 6",
            icon: Activity,
            priorityLabel: "Urgent 1",
            priorityColor: "#ef4444", // Red
            status: "AVAILABLE",
            statusBadgeColor: "#10b981", // Green
            borderColor: "#3b82f6", // Blue border
            iconBg: "rgba(59, 130, 246, 0.1)",
            iconColor: "#3b82f6",
            coords: [51.515, -0.08], // Mock Coords
            stats: { time: "Available", sector: "Sector 6", dist: "0.4 km" },
            bars: [
                { val: 95, color: "#10b981" },
                { val: 80, color: "#10b981" },
                { val: 50, color: "#3b82f6" }
            ]
        }
    ];

    return (
        <div className="resources-page-container">
            {/* Header */}
            <header className="res-header">
                <h1 className="res-title">RESOURCE VIEW</h1>

                <div className="res-tabs">
                    <button
                        className={`res-tab ${activeTab === 'RESPONDERS' ? 'active' : 'inactive'}`}
                        onClick={() => setActiveTab('RESPONDERS')}
                    >
                        RESPONDERS
                    </button>
                    <button
                        className={`res-tab ${activeTab === 'VEHICLES' ? 'active' : 'inactive'}`}
                        onClick={() => setActiveTab('VEHICLES')}
                    >
                        VEHICLES
                    </button>
                    <div className="p-2 text-gray-400 cursor-pointer hover:text-white">
                        <Settings size={20} />
                    </div>
                </div>

                <div className="font-bold text-white tracking-wider">
                    ACTIVE RESPONDERS: <span className="text-cyan-400 text-xl">24</span>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="res-main-content">

                {/* Left Panel: Responders List */}
                <div className="left-panel">
                    <div className="left-panel-header">RESPONDER TEAMS</div>

                    <div className="team-cards-list">
                        {teams.map(team => (
                            <div
                                key={team.id}
                                className="team-card"
                                style={{ borderLeft: `4px solid ${team.borderColor || team.priorityColor}` }}
                            >
                                <div className="team-main-content flex-1 flex gap-4 items-center">
                                    <div className="team-card-icon" style={{ color: team.iconColor || team.priorityColor, background: team.iconBg }}>
                                        <team.icon size={24} />
                                    </div>

                                    <div className="team-details">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="team-name text-lg font-bold">{team.name}</div>
                                            <div
                                                className="team-status-badge text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider"
                                                style={{ background: team.statusBadgeColor, color: team.status === 'AVAILABLE' ? '#000' : '#fff' }}
                                            >
                                                {team.status}
                                            </div>
                                        </div>
                                        <div className="team-priority text-sm font-semibold mb-2" style={{ color: team.priorityColor }}>{team.priorityLabel}</div>

                                        <div className="team-stats-row flex gap-4 text-xs text-gray-400">
                                            <div className="stat-item flex items-center gap-1"><Clock size={12} /> {team.stats.time}</div>
                                            <div className="stat-item flex items-center gap-1"><MapIcon size={12} /> {team.stats.sector}</div>
                                            <div className="stat-item flex items-center gap-1"><MapPin size={12} /> {team.stats.dist}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bars Section - Moved to right side */}
                                <div className="progress-section w-48 flex flex-col justify-center gap-2 pl-6 border-l border-white/5">
                                    {team.bars.map((bar, i) => (
                                        <div key={i} className="progress-row flex items-center gap-3">
                                            <div className="progress-bar-bg flex-1 h-1.5 bg-gray-700/30 rounded-full overflow-hidden">
                                                <div className="progress-fill h-full rounded-full" style={{ width: `${bar.val}%`, background: bar.color }}></div>
                                            </div>
                                            <span className="progress-label text-xs font-bold text-gray-400 w-8 text-right">{bar.val}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Stats - Visual Only since layout fixed it at bottom */}
                    <div className="mt-8 p-4 bg-white/5 rounded-lg flex justify-between text-sm text-gray-400">
                        <span>Active Tasks: <span className="text-white font-bold">4</span></span>
                        <span>Completed: <span className="text-green-400 font-bold">28</span></span>
                        <span>Distance: <span className="text-white font-bold">17.4 km</span></span>
                    </div>
                </div>

                {/* Right Panel: Supply & Map */}
                <div className="right-panel">
                    <div className="right-panel-header" style={{ marginTop: 0 }}>SUPPLY STATUS</div>

                    <div className="supply-grid">
                        <div className="supply-card">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Box size={24} />
                                </div>
                                <div className="supply-info">
                                    <h4>Medical Kits</h4>
                                    <p>60 Units Available</p>
                                </div>
                            </div>
                            <div className="supply-count">50 UNITS</div>
                        </div>

                        <div className="supply-card">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Syringe size={24} />
                                </div>
                                <div className="supply-info">
                                    <h4>Antidote Packs</h4>
                                    <p>88 Units Available</p>
                                </div>
                            </div>
                            <div className="supply-count">18 UNITS</div>
                        </div>
                    </div>

                    <div className="right-panel-header">SECTOR MAP VIEW</div>
                    <div className="sector-map-container">
                        <MapContainer
                            center={[51.51, -0.09]}
                            zoom={13}
                            zoomControl={false}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <TileLayer
                                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                attribution='&copy; CARTO'
                            />
                            {teams.map(team => (
                                <Marker
                                    key={team.id}
                                    position={team.coords}
                                    icon={getCustomIcon(team.borderColor || team.priorityColor)}
                                >
                                    <Popup className="custom-popup-dark">
                                        <div className="p-1">
                                            <strong style={{ color: team.priorityColor }}>{team.name}</strong><br />
                                            {team.status}
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>

                        {/* Overlay scan effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-full w-full animate-scan pointer-events-none z-[1000]"></div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default VolunteerResources;
