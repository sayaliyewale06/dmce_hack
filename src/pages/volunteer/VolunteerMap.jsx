import React, { useState } from 'react';
import {
    Map as MapIcon, Navigation, Shield, AlertTriangle,
    Home, Plus, Minus, Layers, Crosshair
} from 'lucide-react';
import './VolunteerDashboard.css';

const VolunteerMap = () => {
    const [layers, setLayers] = useState({
        tasks: true,
        hazards: true,
        safeZones: true,
        teams: true
    });

    const toggleLayer = (layer) => {
        setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
    };

    return (
        <div className="relative h-[calc(100vh-70px)] bg-gray-900 overflow-hidden">
            {/* Map Placeholder Grid */}
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover opacity-20 filter grayscale"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            {/* Controls Overlay */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <div className="bg-black/80 backdrop-blur border border-gray-700 rounded-lg p-3 w-48">
                    <h3 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Map Layers</h3>
                    <div className="space-y-2">
                        <LayerToggle label="My Tasks" active={layers.tasks} onClick={() => toggleLayer('tasks')} color="text-cyan-400" />
                        <LayerToggle label="Hazards" active={layers.hazards} onClick={() => toggleLayer('hazards')} color="text-red-500" />
                        <LayerToggle label="Safe Zones" active={layers.safeZones} onClick={() => toggleLayer('safeZones')} color="text-green-500" />
                        <LayerToggle label="Teams" active={layers.teams} onClick={() => toggleLayer('teams')} color="text-blue-400" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-2">
                <button className="w-10 h-10 bg-black/80 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-cyan-900/50 transition">
                    <Plus size={20} />
                </button>
                <button className="w-10 h-10 bg-black/80 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-cyan-900/50 transition">
                    <Minus size={20} />
                </button>
                <button className="w-10 h-10 bg-cyan-600 border border-cyan-400 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <Crosshair size={20} />
                </button>
            </div>

            {/* Points of Interest (Mock) */}
            {/* User Location */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse z-20"></div>
                <div className="w-16 h-16 rounded-full border border-blue-500/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                <div className="mt-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded border border-blue-500/30 font-mono">YOU</div>
            </div>

            {/* Hazard */}
            {layers.hazards && (
                <div className="absolute top-[30%] left-[60%] flex flex-col items-center group cursor-pointer">
                    <AlertTriangle className="text-red-500 animate-bounce" size={24} />
                    <div className="bg-red-900/80 text-white text-xs px-2 py-1 rounded border border-red-500/50 mt-1 opacity-0 group-hover:opacity-100 transition">
                        GAS LEAK ZONE
                    </div>
                </div>
            )}

            {/* Safe Zone */}
            {layers.safeZones && (
                <div className="absolute top-[70%] left-[20%] flex flex-col items-center cursor-pointer">
                    <div className="p-1.5 bg-green-500/20 rounded-full border border-green-500/50 text-green-400">
                        <Home size={18} />
                    </div>
                    <div className="mt-1 text-[10px] text-green-400 font-bold bg-black/50 px-1 rounded">SHELTER B</div>
                </div>
            )}

            {/* Task Pin */}
            {layers.tasks && (
                <div className="absolute top-[40%] left-[45%] flex flex-col items-center cursor-pointer">
                    <div className="relative">
                        <MapIcon className="text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" size={28} />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 animate-pulse"></span>
                    </div>
                    <div className="bg-cyan-900/80 text-white text-xs px-2 py-1 rounded border border-cyan-500/50 mt-1 font-bold">
                        SECTOR 7: COLLAPSE
                    </div>
                </div>
            )}

            {/* HUD Overlay */}
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-gray-700 rounded-lg p-4 w-64">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Navigation size={16} className="text-cyan-400" /> ACTIVE NAVIGATION
                </h3>
                <div className="text-2xl font-mono text-white mb-1">1.2 KM <span className="text-xs text-gray-500 font-sans">TO TARGET</span></div>
                <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-cyan-400 h-full w-[65%]"></div>
                </div>
                <div className="text-xs text-gray-400">
                    Straight line route. Terrain advisory: Moderate Debris.
                </div>
                <button className="w-full mt-3 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded text-xs tracking-wider transition">
                    START GUIDANCE
                </button>
            </div>

        </div>
    );
};

const LayerToggle = ({ label, active, onClick, color }) => (
    <div className="flex items-center justify-between cursor-pointer" onClick={onClick}>
        <span className={`text-sm ${active ? 'text-white' : 'text-gray-500'}`}>{label}</span>
        <div className={`w-3 h-3 rounded-full border ${active ? `bg-current ${color} border-transparent shadow-[0_0_8px_currentColor]` : 'border-gray-600 bg-transparent'}`}></div>
    </div>
);

export default VolunteerMap;
