import React, { useState } from 'react';
import { Search, Users, Truck, Activity, Shield, Filter, Plus, ChevronRight, MapPin, Clock } from 'lucide-react';
import '../../styles/dashboard.css';

const ResponseTeams = () => {
    const [activeTab, setActiveTab] = useState('All');

    const teams = [
        {
            id: 1,
            name: "ALPHA TEAM",
            type: "MEDICAL",
            sector: "SECTOR 7",
            status: "EN ROUTE",
            eta: "4 MIN",
            responders: 8,
            ambulances: 3,
            medkits: "FULL",
            commander: "Sarah Simmons",
            progress: 74,
            color: "red"
        },
        {
            id: 2,
            name: "BRAVO TEAM",
            type: "MEDICAL",
            sector: "SECTOR 3",
            status: "ON SITE",
            eta: "32 MIN",
            responders: 7,
            ambulances: 2,
            medkits: "14 MEDKITS",
            commander: "Alpha Team Commander",
            progress: 0,
            color: "blue"
        },
        {
            id: 3,
            name: "CHARLIE TEAM",
            type: "SEARCH & RESCUE",
            sector: "SECTOR 5",
            status: "DEPLOYED",
            eta: "9 MIN",
            responders: 12,
            ambulances: 2,
            medkits: "DRONES",
            commander: "Specialist Marcus Parker",
            progress: 0,
            color: "orange"
        }
    ];

    return (
        <div className="community-grid">
            <div className="left-panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Response Teams</h1>
                </div>

                {/* Filter Bar */}
                <div className="filter-bar">
                    <div className="search-container">
                        <Search size={18} color="var(--text-secondary)" />
                        <input type="text" placeholder="Search teams..." className="search-input" />
                    </div>
                    <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Filter size={16} /> Filter</button>
                    <div style={{ flex: 1 }}></div>
                </div>

                <div className="filter-bar" style={{ gap: '10px', marginTop: '-10px' }}>
                    {['Medical 8', 'Search and Rescue 4', 'Firefighting 5', 'Hazmat 3'].map((tab, idx) => (
                        <div key={idx} className={`filter-pill ${idx === 0 ? 'active' : ''}`} style={{
                            borderColor: idx === 0 ? '#3b82f6' : idx === 1 ? '#f59e0b' : idx === 2 ? '#ef4444' : '#10b981',
                            background: 'transparent',
                            color: 'white'
                        }}>
                            <div style={{
                                width: '8px', height: '8px', borderRadius: '50%',
                                background: idx === 0 ? '#3b82f6' : idx === 1 ? '#f59e0b' : idx === 2 ? '#ef4444' : '#10b981'
                            }}></div>
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Team Cards */}
                <div className="teams-list">
                    {teams.map(team => (
                        <div key={team.id} className="team-card" style={{
                            borderColor: team.id === 1 ? 'rgba(59, 130, 246, 0.5)' : 'var(--border-color)',
                            background: team.id === 1 ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 17, 26, 0.6) 100%)' : 'var(--bg-card)'
                        }}>
                            <div className="card-header-row">
                                <div>
                                    <div className="card-title">
                                        <div style={{
                                            background: team.color === 'red' ? '#ef4444' : team.color === 'blue' ? '#3b82f6' : '#f59e0b',
                                            padding: '8px', borderRadius: '6px'
                                        }}>
                                            <Shield size={16} color="white" />
                                        </div>
                                        {team.name}
                                        {team.id === 1 && <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>{team.type} - {team.sector}</span>}
                                    </div>
                                    <div className="info-row" style={{ marginTop: '5px' }}>
                                        <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>{team.status}</span>
                                        <span style={{ color: 'var(--text-secondary)' }}>: ETA: {team.eta}</span>
                                    </div>
                                </div>
                                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    ASSIGN <ChevronRight size={16} />
                                </button>
                            </div>

                            <div className="info-row">
                                <div className="info-item"><Users size={16} /> {team.responders} RESPONDERS</div>
                                <div className="info-item"><Truck size={16} /> {team.ambulances} AMBULANCES</div>
                                <div className="info-item"><Activity size={16} /> {team.medkits}</div>
                            </div>

                            {team.progress > 0 && (
                                <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '24px', height: '24px', background: '#333', borderRadius: '50%' }}></div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Commander <span style={{ color: 'white', fontWeight: 'bold' }}>{team.commander}</span></span>
                                    </div>
                                    <div className="progress-container" style={{ flex: 1 }}>
                                        <div className="progress-bar" style={{ width: `${team.progress}%` }}></div>
                                    </div>
                                    <span style={{ fontWeight: 'bold' }}>{team.progress}%</span>
                                </div>
                            )}

                            {team.progress === 0 && (
                                <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '24px', height: '24px', background: '#333', borderRadius: '50%' }}></div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Specialist <span style={{ color: 'white', fontWeight: 'bold' }}>{team.commander}</span></span>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel - Team Stats */}
            <div className="right-panel">
                <div className="glass-card">
                    <div className="panel-header">
                        <h3>TEAM STATS</h3>
                    </div>

                    <div style={{ margin: '20px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <Users size={20} color="#a855f7" />
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>13 TEAMS ACTIVE</span>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#3b82f6' }}>+2 Today</div>
                    </div>

                    <div style={{ margin: '20px 0', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <Activity size={20} color="#3b82f6" />
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+8 TEAMS DEPLOYED</span>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#3b82f6' }}>+6 Today</div>
                    </div>

                    <div style={{ margin: '20px 0', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <Truck size={20} color="#f59e0b" />
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+6 RESCUE VEHICLES</span>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#3b82f6' }}>+1 Today</div>
                    </div>
                </div>

                <div className="glass-card">
                    <div className="panel-header">
                        <h3>TEAM STATS</h3>
                        <div style={{ display: 'flex', gap: '3px' }}>
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></span>
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></span>
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></span>
                        </div>
                    </div>

                    {[
                        { label: 'MEDICAL', count: 8, color: '#3b82f6' },
                        { label: 'SEARCH & RESCUE', count: 4, color: '#f59e0b' },
                        { label: 'FIREFIGHTING', count: 5, color: '#ef4444' },
                        { label: 'HAZMAT', count: 3, color: '#10b981' },
                    ].map((stat, idx) => (
                        <div key={idx} style={{ marginBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.9rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Shield size={10} color="black" />
                                    </div>
                                    {stat.label}
                                </span>
                                <span>{stat.count}</span>
                            </div>
                            <div className="progress-container" style={{ height: '4px', marginTop: '0' }}>
                                <div className="progress-bar" style={{ width: '100%', background: stat.color }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResponseTeams;
