import React, { useState } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';
import { Filter, Search, User, Zap, Activity, Clock, AlertTriangle } from 'lucide-react';
import './AgencyAnalytics.css';

const AgencyAnalytics = () => {
    const [timeRange, setTimeRange] = useState('WEEKLY');

    // MOCK DATA for Line Chart
    const activityData = [
        { name: 'Mon', dangerous: 20, severe: 40, resolved: 10 },
        { name: 'Tue', dangerous: 15, severe: 30, resolved: 15 },
        { name: 'Wed', dangerous: 25, severe: 45, resolved: 20 },
        { name: 'Thu', dangerous: 10, severe: 50, resolved: 25 },
        { name: 'Fri', dangerous: 30, severe: 35, resolved: 30 },
        { name: 'Sat', dangerous: 20, severe: 40, resolved: 25 },
        { name: 'Sun', dangerous: 15, severe: 55, resolved: 35 },
    ];

    // MOCK DATA for Pie Charts
    const crisisDistData = [
        { name: 'Dangerous', value: 21, color: '#f59e0b' },
        { name: 'Severe', value: 46, color: '#ef4444' },
        { name: 'Minor', value: 28, color: '#3b82f6' },
    ];

    const resourceAllocData = [
        { name: 'Medkits', value: 68, color: '#3b82f6' },
        { name: 'Hazmat', value: 12, color: '#ef4444' },
        { name: 'Food', value: 20, color: '#f59e0b' },
    ];

    return (
        <div className="analytics-layout animate-fade-in">
            {/* Header */}
            <div className="an-header">
                <div className="an-title">
                    <h1>ANALYTICS</h1>
                </div>
                <div className="an-filters">
                    <span className="top-filter-link">FILTERS</span>
                    <div className="filter-toggle-group">
                        <button className={`filter-toggle-btn ${timeRange === 'URGENT' ? 'active' : ''}`} onClick={() => setTimeRange('URGENT')}>URGENT</button>
                        <button className={`filter-toggle-btn ${timeRange === 'WEEKLY' ? 'active' : ''}`} onClick={() => setTimeRange('WEEKLY')}>WEEKLY</button>
                    </div>
                    <Search size={16} className="text-gray-400 cursor-pointer hover:text-white" />
                    <span className="top-filter-link">ALL</span>
                    <span className="top-filter-link">SAFE</span>
                    <span className="top-filter-link">HAZARD</span>
                    <Filter size={16} className="text-gray-400 cursor-pointer hover:text-white" />
                </div>
            </div>

            {/* Main Grid */}
            <div className="an-grid">

                {/* LEFT COLUMN */}
                <div className="an-left-col">
                    {/* Stats Row */}
                    <div className="stats-row-3">
                        <div className="an-stat-card red-glow">
                            <div className="stat-label flex justify-between">
                                TASKS COMPLETED <Activity size={12} />
                            </div>
                            <div className="stat-main-val">74</div>
                            <div className="text-xs font-bold text-green-400">+15%</div>
                        </div>
                        <div className="an-stat-card purple-glow">
                            <div className="stat-label flex justify-between">
                                TIME SAVED <Clock size={12} />
                            </div>
                            <div className="stat-main-val">163 <span className="text-sm font-normal text-gray-400">MINS</span></div>
                            <div className="flex justify-between items-end border-t border-white/10 pt-2 mt-2">
                                <span className="stat-sub-text">RESP. TIME</span>
                                <span className="text-lg font-bold text-white">13 <span className="text-xs text-gray-400">MINS</span></span>
                            </div>
                        </div>
                        <div className="an-stat-card orange-glow">
                            <div className="stat-label flex justify-between">
                                INCIDENTS RESOLVED <AlertTriangle size={12} />
                            </div>
                            <div className="stat-main-val">32</div>
                            <div className="flex gap-2 text-xs font-bold">
                                <span className="text-green-400">+15%</span>
                                <span className="text-green-400">+8%</span>
                            </div>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="chart-card">
                        <div className="chart-header">
                            <div className="chart-title">INCIDENT ACTIVITY</div>
                            <div className="flex gap-2">
                                <button className="text-[10px] bg-green-900/40 text-green-400 px-2 py-1 rounded border border-green-500/20">URGENT</button>
                                <button className="text-[10px] bg-gray-800 text-gray-400 px-2 py-1 rounded border border-gray-600">WEEKLY</button>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <LineChart data={activityData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '4px' }}
                                        labelStyle={{ color: '#94a3b8', fontSize: '10px' }}
                                        itemStyle={{ fontSize: '12px' }}
                                    />
                                    <Line type="monotone" dataKey="dangerous" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: '#3b82f6', strokeWidth: 0 }} activeDot={{ r: 5 }} />
                                    <Line type="monotone" dataKey="severe" stroke="#ef4444" strokeWidth={2} dot={{ r: 3, fill: '#ef4444', strokeWidth: 0 }} activeDot={{ r: 5 }} />
                                    <Line type="monotone" dataKey="resolved" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4, fill: '#f59e0b', strokeWidth: 0 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="chart-legend">
                            <div className="legend-item"><div className="dot bg-blue-500"></div> <span className="text-blue-400">55 Dangerous</span></div>
                            <div className="legend-item"><div className="dot bg-red-500"></div> <span className="text-red-400">98 Severe</span></div>
                            <div className="legend-item"><div className="dot bg-orange-500"></div> <span className="text-orange-400">32 Resolved</span></div>
                        </div>
                    </div>

                    {/* Donut Charts Row */}
                    <div className="donuts-row">
                        <div className="donut-card">
                            <div className="donut-wrapper">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={crisisDistData}
                                            innerRadius={30}
                                            outerRadius={40}
                                            paddingAngle={5}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {crisisDistData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-[8px] text-gray-500">TOTAL</div>
                                </div>
                            </div>
                            <div className="donut-info">
                                <div className="chart-title mb-1">CRISIS DISTRIBUTION</div>
                                {crisisDistData.map((d, i) => (
                                    <div key={i} className="donut-legend-item">
                                        <div className="dot" style={{ background: d.color }}></div>
                                        <span>{d.name} {d.value}%</span>
                                    </div>
                                ))}
                                <div className="text-[10px] text-gray-500 mt-2 flex items-center gap-1">
                                    Avg Response: <span className="text-pink-500">53%</span>
                                </div>
                            </div>
                        </div>

                        <div className="donut-card">
                            <div className="donut-wrapper">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={resourceAllocData}
                                            innerRadius={30}
                                            outerRadius={40}
                                            paddingAngle={5}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {resourceAllocData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="donut-info">
                                <div className="chart-title mb-1">RESOURCE ALLOCATION</div>
                                {resourceAllocData.map((d, i) => (
                                    <div key={i} className="donut-legend-item">
                                        <div className="dot" style={{ background: d.color }}></div>
                                        <span>{d.name} {d.value}%</span>
                                    </div>
                                ))}
                                <div className="text-[10px] text-gray-500 mt-2 flex items-center gap-1">
                                    Containment Rate: <span className="text-orange-400">80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="an-right-col">
                    {/* Mock Map Card */}
                    <div className="res-map-card group relative">
                        {/* Static image placeholder or empty div with style */}
                        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
                            {/* Mock Map Elements */}
                            <div className="absolute inset-0 opacity-30" style={{
                                backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}></div>
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-500/50 bg-red-500/10 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-orange-500/50 bg-orange-500/10 rounded-full"></div>

                            {/* Pins */}
                            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-red-500 flex flex-col items-center">
                                <AlertTriangle size={24} />
                                <span className="text-[10px] bg-black/50 px-1">HAZARD</span>
                            </div>
                            <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 text-orange-500 flex flex-col items-center">
                                <Activity size={24} />
                                <span className="text-[10px] bg-black/50 px-1">WARNING</span>
                            </div>
                        </div>

                        {/* Footer attribution */}
                        <div className="absolute bottom-1 right-2 text-[8px] text-gray-600">
                            Leaflet | OpenStreetMap contributors | CARTO
                        </div>
                    </div>

                    {/* Results / Zones Card */}
                    <div className="results-card">
                        <div className="chart-title mb-4">RESULTS MAP</div>

                        <div className="result-row">
                            <div className="result-label">
                                <span className="flex items-center gap-2"><Zap size={12} className="text-red-500" /> Hazard Zones</span>
                                <span>62%</span>
                            </div>
                            <div className="res-bar-bg">
                                <div className="res-bar-fill bg-gradient-to-r from-red-600 to-orange-500" style={{ width: '62%' }}></div>
                            </div>
                        </div>

                        <div className="result-row">
                            <div className="result-label">
                                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded bg-orange-500"></div> Safe Zones</span>
                                <span>21%</span>
                            </div>
                            <div className="res-bar-bg">
                                <div className="res-bar-fill bg-gradient-to-r from-orange-500 to-yellow-500" style={{ width: '21%' }}></div>
                            </div>
                        </div>

                        <div className="result-row">
                            <div className="result-label">
                                <span className="flex items-center gap-2"><Activity size={12} className="text-cyan-500" /> Affected Sectors</span>
                                <span>70%</span>
                            </div>
                            <div className="res-bar-bg">
                                <div className="res-bar-fill bg-gradient-to-r from-cyan-600 to-blue-500" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Active User Card (Bottom Right) */}
                    <div className="active-member-card">
                        <div className="member-avi">L</div>
                        <div className="flex-1">
                            <div className="text-sm font-bold text-white flex items-center gap-2">
                                Luke <span className="text-[9px] text-gray-500 font-normal">Volunteer Alpha</span>
                            </div>
                            <div className="text-xs text-cool-gray-400">GH007 MK72 HazCrom Cleanup</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] bg-gray-800 px-2 py-1 rounded border border-gray-600 font-mono">ID: 8851</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AgencyAnalytics;
