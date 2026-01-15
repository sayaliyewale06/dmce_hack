import React, { useState } from 'react';
import {
    Search, Filter, Plus, ChevronRight,
    Cross, Siren, Flame, Droplets, // Icons for categories
    Users, Truck, Briefcase, Activity, // Resource icons
    ArrowUp, Play, MapPin
} from 'lucide-react';
import './ResponseTeams.css';

const ResponseTeams = () => {
    const [activeFilter, setActiveFilter] = useState('Medical');

    const filters = [
        { label: 'Medical', count: 8, icon: Cross, color: 'blue' },
        { label: 'Search and Rescue', count: 4, icon: Siren, color: 'orange' },
        { label: 'Firefighting', count: 5, icon: Flame, color: 'red' },
        { label: 'Hazmat', count: 3, icon: Droplets, color: 'green' }
    ];

    return (
        <main className="main-content-grid">
            {/* Left Column (Teams List) */}
            <div className="main-column left">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Response Teams</h2>
                </div>

                {/* Search & Filter */}
                <div className="search-container">
                    <Search className="search-icon" size={20} />
                    <input type="text" placeholder="Search teams..." className="search-input" />
                    <Filter className="filter-icon" size={20} />
                </div>

                {/* Filter Pills */}
                <div className="filter-pills">
                    {filters.map((f) => (
                        <button
                            key={f.label}
                            className={`pill-btn ${activeFilter === f.label ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f.label)}
                        >
                            <f.icon size={16} />
                            {f.label}
                            <span className="pill-count">{f.count}</span>
                        </button>
                    ))}
                </div>

                {/* Featured Card - Alpha Team */}
                <div className="featured-team-card">
                    <div className="card-top">
                        <div className="team-identity">
                            <div className="team-icon-large">
                                <Cross size={24} />
                            </div>
                            <div className="team-details">
                                <h3 className="text-white">ALPHA TEAM</h3>
                                <div className="team-subtitle">MEDICAL - SECTOR 7</div>
                            </div>
                        </div>
                        <button className="assign-btn">
                            ASSIGN <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className="team-status-row">
                        <span className="status-text">EN ROUTE</span>
                        <span style={{ color: '#fff' }}>: ETA: 4 MIN</span>
                    </div>

                    {/* Resources */}
                    <div className="resources-row">
                        <div className="resource-item">
                            <Users size={16} className="text-blue" />
                            <span>8 RESPONDERS</span>
                        </div>
                        <div className="resource-item">
                            <Truck size={16} className="text-blue" />
                            <span>3 AMBULANCES</span>
                        </div>
                        <div className="resource-item">
                            <Briefcase size={16} className="text-blue" />
                            <span>MEDKITS</span>
                        </div>
                        <div className="resource-item">
                            <Activity size={16} className="text-blue" />
                            <span>STRETCHERS 3</span>
                        </div>
                    </div>

                    <div className="commander-row">
                        <div className="commander-info">
                            <div style={{ width: 32, height: 32, background: '#ccc', borderRadius: '50%' }}></div> {/* Placeholder for Avatar */}
                            <div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Commander</div>
                                <div style={{ fontWeight: 600 }}>Sarah Simmons</div>
                            </div>
                        </div>
                        <div className="progress-container">
                            <div className="progress-bar-bg">
                                <div className="progress-fill" style={{ width: '74%' }}></div>
                            </div>
                            <span style={{ fontWeight: 700 }}>74%</span>
                        </div>
                    </div>
                </div>

                {/* Grid for Other Teams */}
                <div className="team-grid">
                    {/* Bravo Team */}
                    <div className="standard-card on-site">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <div style={{ padding: '0.5rem', background: 'rgba(37,99,235,0.2)', borderRadius: '0.5rem', color: '#60a5fa' }}>
                                    <Cross size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem' }}>BRAVO TEAM</h4>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>MEDICAL - SECTOR 3</div>
                                </div>
                            </div>
                            <span className="card-badge badge-green">ON SITE</span>
                        </div>

                        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', fontSize: '0.875rem', color: '#cbd5e1' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Users size={16} /> 7</div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Truck size={16} /> 2 AMBULANCES</div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Briefcase size={16} /> 14 MEDKITS</div>
                        </div>
                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <div style={{ width: 24, height: 24, background: '#ccc', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Alpha Team Commander</span>
                            </div>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>32 min</span>
                        </div>
                    </div>

                    {/* Charlie Team */}
                    <div className="standard-card deployed">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <div style={{ padding: '0.5rem', background: 'rgba(245,158,11,0.2)', borderRadius: '0.5rem', color: '#fbbf24' }}>
                                    <Siren size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem' }}>CHARLIE TEAM</h4>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>SEARCH & RESCUE - SECTOR 5</div>
                                </div>
                            </div>
                            <span className="card-badge badge-orange">DEPLOYED</span>
                        </div>

                        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', fontSize: '0.875rem', color: '#cbd5e1' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}> 2 RESCUE VEHICLES</div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}> DRONES</div>
                        </div>

                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <div style={{ width: 24, height: 24, background: '#ccc', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Specialist Marcus Parker</span>
                            </div>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>ETA: 9 min</span>
                        </div>
                    </div>
                </div>

                <div className="deployments-overview">
                    <h4 style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Deployments Overview</h4>
                    <div className="overview-pills">
                        <div className="overview-pill" style={{ color: '#60a5fa', background: 'rgba(37,99,235,0.1)' }}>
                            <Cross size={14} /> MEDICAL 8
                        </div>
                        <div className="overview-pill" style={{ color: '#fbbf24', background: 'rgba(245,158,11,0.1)' }}>
                            <Siren size={14} /> SEARCH & RESCUE 4
                        </div>
                        <div className="overview-pill" style={{ color: '#ef4444', background: 'rgba(239,68,68,0.1)' }}>
                            <Flame size={14} /> FIREFIGHTING 5
                        </div>
                        <div className="overview-pill" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>
                            <Droplets size={14} /> HAZMAT 3
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column (Stats) */}
            <div className="main-column right">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>TEAM STATS</h3>

                {/* Stats Cards */}
                <div className="stats-box">
                    <div className="stat-highlight-row">
                        <div className="stat-icon bg-purple-alpha">
                            <Users />
                        </div>
                        <div className="stat-content">
                            <h4>13 TEAMS ACTIVE</h4>
                            <span className="stat-sub">+2 Today</span>
                        </div>
                    </div>
                    <div className="stat-highlight-row">
                        <div className="stat-icon bg-blue-alpha">
                            <ArrowUp />
                        </div>
                        <div className="stat-content">
                            <h4>+8 TEAMS DEPLOYED</h4>
                            <span className="stat-sub">+6 Today</span>
                        </div>
                    </div>
                    <div className="stat-highlight-row">
                        <div className="stat-icon bg-orange-alpha">
                            <Truck />
                        </div>
                        <div className="stat-content">
                            <h4>+6 RESCUE VEHICLES</h4>
                            <span className="stat-sub">+1 Today</span>
                        </div>
                    </div>
                    <div className="stat-highlight-row" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                        <div className="stat-icon bg-teal-alpha">
                            {/* Drone Icon Placeholder since not in basic lucide set used */}
                            <Activity />
                        </div>
                        <div className="stat-content">
                            <h4>+6 DRONES</h4>
                            <span className="stat-sub">+2 Today</span>
                        </div>
                    </div>
                </div>

                {/* Category Breakdown */}
                <div className="stats-box">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#94a3b8' }}>TEAM STATS</h4>
                        <div style={{ display: 'flex', gap: '3px' }}>
                            <div style={{ width: 3, height: 3, background: '#94a3b8', borderRadius: '50%' }}></div>
                            <div style={{ width: 3, height: 3, background: '#94a3b8', borderRadius: '50%' }}></div>
                            <div style={{ width: 3, height: 3, background: '#94a3b8', borderRadius: '50%' }}></div>
                        </div>
                    </div>

                    <div className="category-bar-row">
                        <div className="cat-label-row">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60a5fa' }}><div style={{ width: 8, height: 8, background: '#60a5fa', transform: 'rotate(45deg)' }}></div> MEDICAL</div>
                            <span>8</span>
                        </div>
                        <div className="cat-progress"><div className="cat-fill fill-blue" style={{ width: '80%' }}></div></div>
                    </div>

                    <div className="category-bar-row">
                        <div className="cat-label-row">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b' }}><div style={{ width: 8, height: 8, background: '#f59e0b', transform: 'rotate(45deg)' }}></div> SEARCH & RESCUE</div>
                            <span>4</span>
                        </div>
                        <div className="cat-progress"><div className="cat-fill fill-orange" style={{ width: '40%' }}></div></div>
                    </div>

                    <div className="category-bar-row">
                        <div className="cat-label-row">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444' }}><div style={{ width: 8, height: 8, background: '#ef4444', transform: 'rotate(45deg)' }}></div> FIREFIGHTING</div>
                            <span>5</span>
                        </div>
                        <div className="cat-progress"><div className="cat-fill fill-red" style={{ width: '50%' }}></div></div>
                    </div>

                    <div className="category-bar-row">
                        <div className="cat-label-row">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981' }}><div style={{ width: 8, height: 8, background: '#10b981', transform: 'rotate(45deg)' }}></div> HAZMAT</div>
                            <span>3</span>
                        </div>
                        <div className="cat-progress"><div className="cat-fill fill-green" style={{ width: '30%' }}></div></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ResponseTeams;
