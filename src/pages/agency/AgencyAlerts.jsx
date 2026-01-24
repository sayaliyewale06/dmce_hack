import React, { useState } from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import {
    Bell, AlertTriangle, ChevronDown, MoreHorizontal, Shield,
    Flame, PlusSquare, Zap, MapPin, Activity
} from 'lucide-react';
import './AgencyAlerts.css';

const AgencyAlerts = () => {
    const [activeTab, setActiveTab] = useState('Urgent');

    // MOCK DATA for small charts
    const resolvedData = [
        { name: '01', val: 20 }, { name: '05', val: 18 }, { name: '10', val: 25 },
        { name: '15', val: 15 }, { name: '20', val: 30 }, { name: '25', val: 45 },
    ];

    const managedData = [
        { name: '01', val: 10 }, { name: '05', val: 12 }, { name: '10', val: 15 },
        { name: '15', val: 14 }, { name: '20', val: 20 }, { name: '25', val: 18 },
    ];

    return (
        <div className="alerts-layout animate-fade-in">
            {/* Header */}
            <div className="alt-header-row">
                <div className="alt-title">
                    <h1>ALERTS</h1>
                </div>
                <button className="btn-new-alert">NEW ALERT</button>
            </div>

            <div className="alt-grid">

                {/* LEFT: ALERTS LIST & CHARTS */}
                <div className="alt-left-col">

                    {/* Tabs */}
                    <div className="alert-tabs">
                        <button
                            className={`alert-tab ${activeTab === 'Urgent' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Urgent')}
                        >
                            Urgent <span className="bg-red-500/20 text-red-500 text-[10px] px-1.5 rounded">0</span>
                        </button>
                        <button
                            className={`alert-tab ${activeTab === 'High' ? 'active' : ''}`}
                            onClick={() => setActiveTab('High')}
                        >
                            High <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        </button>
                        <button
                            className={`alert-tab ${activeTab === 'Standard' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Standard')}
                        >
                            Standard <span className="bg-gray-700 text-gray-400 text-[10px] px-1.5 rounded">12</span>
                        </button>
                    </div>

                    {/* Alert List */}
                    <div className="alert-list custom-scrollbar">
                        {/* 1 */}
                        <AlertCard
                            icon={PlusSquare} color="orange"
                            title="Collapse" sub="Hazard Zone 780"
                            desc="rated 0 OVACUMTION"
                            action="MENAGE"
                            border="orange"
                        />
                        {/* 2 */}
                        <AlertCard
                            icon={AlertTriangle} color="red"
                            title="Immediate Evacuation" sub="Shelter Summer 71"
                            desc="Critical structural instability detected in sector 71"
                            action="RESOLVE" resourceCount={9}
                            border="red"
                        />
                        {/* 3 */}
                        <AlertCard
                            icon={Flame} color="orange"
                            title="Containment Fire" sub="Industrial Zone 7"
                            desc="Fire outbreak reported near chemical storage"
                            action="RESOLVE" tag="HIGH"
                            border="orange"
                        />
                        {/* 4 */}
                        <AlertCard
                            icon={AlertTriangle} color="orange"
                            title="Severe Accident" sub="Residential Sector 6"
                            desc="Multiple vehicle collision, blockage reported"
                            action="RESOLVE" resourceCount={9} tag="HIGH"
                            border="orange"
                        />
                    </div>

                    {/* Charts Section */}
                    <div>
                        <h4 className="text-gray-400 text-xs font-bold mb-2 uppercase">CRISIS ANALYTICS</h4>
                        <div className="charts-grid-2">
                            {/* Chart 1 */}
                            <div className="mini-chart-card">
                                <div className="mini-chart-header">
                                    <span className="chart-label-sm text-red-400">RESOLVED</span>
                                    <MoreHorizontal size={14} className="text-gray-500" />
                                </div>
                                <div style={{ width: '100%', height: 100 }}>
                                    <ResponsiveContainer>
                                        <LineChart data={resolvedData}>
                                            <Line type="monotone" dataKey="val" stroke="#ef4444" strokeWidth={2} dot={false} />
                                            <XAxis hide /> <YAxis hide />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="mt-2 text-xs flex justify-between items-center text-gray-400">
                                    <span>Incident Rate</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-white">88%</span>
                                        <div className="w-16 h-1 bg-gray-700 rounded"><div className="w-[88%] h-full bg-red-500 rounded"></div></div>
                                    </div>
                                </div>
                            </div>

                            {/* Chart 2 */}
                            <div className="mini-chart-card">
                                <div className="mini-chart-header">
                                    <span className="chart-label-sm text-orange-400">MANAGED</span>
                                    <MoreHorizontal size={14} className="text-gray-500" />
                                </div>
                                <div style={{ width: '100%', height: 100 }}>
                                    <ResponsiveContainer>
                                        <LineChart data={managedData}>
                                            <Line type="monotone" dataKey="val" stroke="#f97316" strokeWidth={2} dot={false} />
                                            <XAxis hide /> <YAxis hide />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="mt-2 text-xs flex justify-between items-center text-gray-400">
                                    <span>Containment</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-white">45%</span>
                                        <div className="w-16 h-1 bg-gray-700 rounded"><div className="w-[45%] h-full bg-orange-500 rounded"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT: DETAIL PANEL */}
                <div className="alt-right-col">
                    <div className="detail-panel">
                        <div className="panel-header-row">
                            <span className="panel-title">IMMEDIATE EVACUATION</span>
                            <span className="tag-critical-lg">CRITICAL</span>
                        </div>

                        {/* Radar Viz */}
                        <div className="radar-viz-container">
                            <div className="radar-circle radar-1"></div>
                            <div className="radar-circle radar-2"></div>
                            <div className="radar-circle radar-3"></div>
                            <div className="radar-circle radar-4"></div>
                            <div className="radar-sweep"></div>
                            <div className="center-icon">
                                <AlertTriangle fill="#ef4444" color="#fff" size={24} />
                            </div>

                            <div className="map-marker-label">
                                <div className="w-2 h-2 rounded-full bg-white mb-1"></div>
                                <div>North Shelter</div>
                            </div>
                            <div className="absolute font-mono text-red-500/50 text-[10px] top-4 left-4">SECTOR 7</div>
                            <div className="absolute text-white/70 text-[10px] bottom-10 right-10 flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full border border-red-500 animate-ping"></div> AFFECTING SHELTER
                            </div>
                        </div>

                        {/* Text Info */}
                        <div className="info-block">
                            <h3 className="info-title">INCIDENT #8821X</h3>
                            <div className="info-sub">SECTOR 7 • COLLAPSE</div>

                            <div className="info-grid">
                                <div className="info-item">
                                    <label>AI SEVERITY SCORE</label>
                                    <div className="text-red-500 text-lg font-mono">888 MAX</div>
                                </div>
                                <div className="info-item">
                                    <label>IMPACT ESTIMATE</label>
                                    <span>22 EVACUATED</span>
                                </div>
                            </div>
                            <div className="mt-3 info-item">
                                <label>COMMANDER NOTE</label>
                                <span className="text-sm font-normal text-gray-300">High structural instability detected. Immediate evacuation ordered.</span>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div>
                            <h4 className="text-xs font-bold text-gray-500 mb-2 uppercase">QUICK ACTIONS</h4>
                            <div className="qa-grid">
                                <button className="qa-btn">
                                    <PlusSquare size={16} className="text-blue-400" /> DEPLOY MED TEAM
                                </button>
                                <button className="qa-btn critical">
                                    <AlertTriangle size={16} /> ALERT HOSPITALS
                                </button>
                                <button className="qa-btn">
                                    <Flame size={16} className="text-orange-400" /> EVACUATE AREA
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="text-[10px] text-gray-600 font-mono mt-4 text-center w-full">
                SHOWING 1-4 of 12 ENTRIES
            </div>
        </div>
    );
};

const AlertCard = ({ icon: Icon, color, title, sub, desc, action, resourceCount, tag, border }) => {
    return (
        <div className={`alert-card-row border-${border}`}>
            <div className="alert-main-content">
                <div className={`alert-icon-box ${color}`}>
                    <Icon size={20} />
                </div>
                <div className="alert-details">
                    <div className="flex items-center">
                        <h3>{title}</h3>
                        {tag && <span className={`alert-tag tag-${color}`}>{tag}</span>}
                    </div>
                    <div className="text-xs text-gray-500 font-bold mb-1 uppercase">{sub}</div>
                    <div className="alert-sub line-clamp-1">{desc}</div>
                </div>
            </div>
            <div className="alert-actions">
                {resourceCount && (
                    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded border border-gray-700 text-xs text-gray-400">
                        <Shield size={10} /> {resourceCount}
                    </div>
                )}
                <button className={action === 'RESOLVE' ? 'btn-resolve' : 'btn-manage'}>
                    {action}
                </button>
            </div>
        </div>
    );
}

export default AgencyAlerts;
