import React, { useState } from 'react';
import {
    Flame, Truck, Activity, Clock, MapPin, Settings,
    Bell, User, ChevronDown, Battery, Shield, AlertTriangle,
    Database, Box
} from 'lucide-react';

const VolunteerResources = () => {
    const [activeTab, setActiveTab] = useState('responders');
    const [activeRespondersCount, setActiveRespondersCount] = useState(24);

    const responderTeams = [
        {
            id: 1,
            name: "Rescue Team 3",
            icon: Flame,
            status: "RESPONDING",
            statusColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
            priority: "Critical 3",
            time: "Active 40m",
            location: "Sector 8",
            distance: "0.4 km",
            borderLeft: "border-l-4 border-l-red-500",
            stats: [
                { value: 71, color: "bg-green-500" },
                { value: 69, color: "bg-orange-500" },
                { value: 2, color: "bg-blue-500" }
            ]
        },
        {
            id: 2,
            name: "Hazmat Team 4",
            icon: AlertTriangle, // Best match for Hazmat
            status: "HIGH LEVEL",
            statusColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
            subStatus: "EN ROUTE",
            priority: "RE ROUTE", // Text from screenshot "RE DUTE" likely "RE ROUTE" or similar
            time: "Active 1h",
            location: "Sector 11",
            distance: "0.2 km",
            borderLeft: "border-l-4 border-l-orange-500",
            stats: [
                { value: 71, color: "bg-green-500" },
                { value: 25, color: "bg-orange-500" },
                { value: 4, color: "bg-blue-500" }
            ]
        },
        {
            id: 3,
            name: "Med Team 6",
            icon: Activity,
            status: "AVAILABLE",
            statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
            priority: "Urgent 1",
            time: "Available",
            location: "Sector 6",
            distance: "0.4 km",
            borderLeft: "border-l-4 border-l-blue-500",
            stats: null // No stats shown in screenshot or implied full
        }
    ];

    const supplies = [
        { name: "Medical Kits", sub: "60 Units Available", count: "50 UNITS", icon: Box },
        { name: "Antidote Packs", sub: "58 Units Available", count: "18 UNITS", icon: Database } // Database as generic container icon
    ];

    return (
        <div className="p-6 md:p-8 space-y-6 font-['Rajdhani'] text-white">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold mb-1 uppercase tracking-wider">RESOURCE VIEW</h1>
                {/* System status passed via layout, but we can add local header elements if needed */}
            </div>

            {/* Main Content Box */}
            <div className="bg-[#1e293b]/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 min-h-[600px]">

                {/* Toolbar */}
                <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setActiveTab('responders')}
                            className={`px-6 py-2 rounded-lg font-bold text-sm tracking-wide transition-all ${activeTab === 'responders'
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                                    : 'text-gray-400 hover:text-white border border-transparent hover:border-gray-700'
                                }`}
                        >
                            RESPONDERS
                        </button>
                        <button
                            onClick={() => setActiveTab('vehicles')}
                            className={`px-6 py-2 rounded-lg font-bold text-sm tracking-wide transition-all flex items-center gap-2 ${activeTab === 'vehicles'
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                                    : 'text-gray-400 hover:text-white border border-transparent hover:border-gray-700'
                                }`}
                        >
                            <Truck size={16} /> VEHICLES
                        </button>
                        <button className="text-gray-500 hover:text-white transition">
                            <Settings size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer group">
                        <span className="text-gray-400 text-sm font-bold uppercase">Active Responders</span>
                        <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition">{activeRespondersCount}</span>
                        <ChevronDown size={16} className="text-gray-500" />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6">

                    {/* Responders List (Left Side - 8 cols) */}
                    <div className="col-span-12 lg:col-span-8 space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Responder Teams</h3>

                        {responderTeams.map((team) => (
                            <div key={team.id} className={`bg-[#0f172a]/60 border border-white/5 rounded-xl p-4 flex flex-col md:flex-row gap-6 relative overflow-hidden group hover:border-white/10 transition ${team.borderLeft}`}>
                                {/* Background gradient hint */}
                                <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none" />

                                {/* Team Info */}
                                <div className="flex-1 min-w-[200px]">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-orange-500">
                                                <team.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg leading-tight">{team.name}</h4>
                                                <div className="text-xs text-blue-400 font-bold">{team.priority}</div>
                                            </div>
                                        </div>
                                        <div className={`px-2 py-1 rounded text-[10px] font-bold border uppercase ${team.statusColor}`}>
                                            {team.status}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-4">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={12} className="text-gray-500" /> {team.time}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Activity size={12} className="text-gray-500" /> {team.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={12} className="text-gray-500" /> {team.distance}
                                        </div>
                                    </div>
                                </div>

                                {/* Stats/Progress (Right side of card) */}
                                {team.stats && (
                                    <div className="w-full md:w-48 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                                        {team.stats.map((stat, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="flex-1 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${stat.color}`} style={{ width: `${stat.value}%` }} />
                                                </div>
                                                <span className="text-xs font-bold text-gray-300 w-8 text-right">{stat.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Report/Supply Panel (Right Side - 4 cols) */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

                        {/* Supply Status */}
                        <div className="bg-[#0f172a]/40 border border-white/5 rounded-xl p-5">
                            <h3 className="text-xs font-bold text-gray-500 uppercase mb-4">Supply Status</h3>

                            <div className="space-y-3">
                                {supplies.map((supply, idx) => (
                                    <div key={idx} className="bg-[#1e293b]/40 rounded-lg p-3 flex items-center justify-between border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                <supply.icon size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm">{supply.name}</div>
                                                <div className="text-[10px] text-gray-400">{supply.sub}</div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs font-bold border border-blue-500/20">
                                            {supply.count}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Preview or Additional Info placeholder based on screenshot dark area */}
                        <div className="flex-1 bg-[#0f172a]/40 border border-white/5 rounded-xl p-5 min-h-[200px] flex items-center justify-center text-gray-600 font-bold text-sm uppercase tracking-widest">
                            Sector Map View
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default VolunteerResources;
