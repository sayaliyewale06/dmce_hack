import React from 'react';
import {
    Search, Filter, Plus, ChevronDown, ChevronRight,
    MapPin, Clock, AlertTriangle, Zap, Activity,
    Shield, Briefcase
} from 'lucide-react';
import './IncidentReportsAgency.css';

const IncidentReportsAgency = () => {
    return (
        <div className="incident-reports-container">
            {/* Main Content */}
            <div className="main-feed-col">
                <div className="incidents-header">
                    <div className="incidents-title">
                        <h1>INCIDENT REPORTS</h1>
                    </div>
                    <div className="incidents-subtitle">
                        Monitoring real-time crisis incidents and response status.
                    </div>

                    <div className="search-sort-row">
                        <div className="search-box-lg">
                            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                            <input type="text" placeholder="Search incidents..." className="search-input-lg" />
                        </div>
                        <div className="sort-dropdown">
                            Sort By: <span className="text-white hover:text-blue-400">Priority</span> <ChevronDown size={14} />
                        </div>
                    </div>

                    <div className="filter-row">
                        <div className="filter-pill active"><Filter size={14} /> All</div>
                        <div className="filter-pill critical"><AlertTriangle size={14} /> Critical 5</div>
                        <div className="filter-pill"><Zap size={14} /> High 3</div>
                        <div className="filter-pill"><Plus size={14} /> Moderate 2</div>
                    </div>
                </div>

                <div className="incidents-list">
                    {/* Critical Incident */}
                    <div className="incident-card critical">
                        <div className="map-thumbnail">
                            <div className="map-marker-pulse" style={{ color: '#ec4899' }}></div>
                        </div>

                        <div className="card-header-row">
                            <div className="type-badge">
                                <div className="icon-circle pink">
                                    <Plus size={20} />
                                </div>
                                <div className="card-title">
                                    <h3>MEDICAL EMERGENCY</h3>
                                    <span className="sub">Critical Patients in Sector 7</span>
                                </div>
                            </div>
                            <div className="status-tag critical">IN PROGRESS</div>
                        </div>

                        <p className="incident-desc">
                            Multiple casualties requiring immediate evacuation. Medical teams en route.
                        </p>

                        <div className="meta-row">
                            <div className="meta-item"><MapPin size={16} /> 1.2 km away</div>
                            <div className="meta-item"><Clock size={16} /> ETA: 4 min</div>
                            <div className="progress-section">
                                <div className="prog-track">
                                    <div className="prog-fill fill-blue" style={{ width: '57%' }}></div>
                                </div>
                                <span className="text-xs text-blue-400">8/14 TEAMS DEPLOYED</span>
                            </div>
                        </div>
                    </div>

                    {/* High Incident Structural */}
                    <div className="incident-card high">
                        <div className="map-thumbnail">
                            <div className="map-marker-pulse" style={{ color: '#f59e0b', top: '40%', left: '60%' }}></div>
                        </div>

                        <div className="card-header-row">
                            <div className="type-badge">
                                <div className="icon-circle orange">
                                    <AlertTriangle size={20} />
                                </div>
                                <div className="card-title">
                                    <h3>STRUCTURAL COLLAPSE</h3>
                                    <span className="sub">Integrity Failure in Habitat Alpha</span>
                                </div>
                            </div>
                            <div className="status-tag high">IN PROGRESS</div>
                        </div>

                        <p className="incident-desc">
                            Building integrity compromised with residents trapped inside.
                        </p>

                        <div className="meta-row">
                            <div className="meta-item"><MapPin size={16} /> 0.9 km away</div>
                            <div className="meta-item text-orange-400 font-bold">IMMEDIATE</div>
                            <div className="progress-section">
                                <div className="prog-track">
                                    <div className="prog-fill bg-orange-500" style={{ width: '50%' }}></div>
                                </div>
                                <span className="text-xs text-gray-400">3/6 TEAMS DEPLOYED</span>
                            </div>
                        </div>
                    </div>

                    {/* High Incident Power */}
                    <div className="incident-card" style={{ borderColor: 'rgba(192, 132, 252, 0.4)' }}>
                        <div className="map-thumbnail">
                            <div className="map-marker-pulse" style={{ color: '#c084fc', top: '70%', left: '30%' }}></div>
                        </div>

                        <div className="card-header-row">
                            <div className="type-badge">
                                <div className="icon-circle" style={{ color: '#c084fc', background: 'rgba(192, 132, 252, 0.1)', borderColor: 'rgba(192, 132, 252, 0.3)' }}>
                                    <Zap size={20} />
                                </div>
                                <div className="card-title">
                                    <h3>POWER GRID FAILURE</h3>
                                    <span className="sub">Emergency Power Offline</span>
                                </div>
                            </div>
                            <div className="status-tag" style={{ color: '#c084fc', background: 'rgba(192, 132, 252, 0.1)', borderColor: 'rgba(192, 132, 252, 0.3)' }}>IN PROGRESS</div>
                        </div>

                        <p className="incident-desc">
                            Main reactor offline, emergency power at 30%.
                        </p>

                        <div className="meta-row">
                            <div className="meta-item"><MapPin size={16} /> 0.7 km away</div>
                            <div className="meta-item"><Clock size={16} /> ETA: 14 min</div>
                            <div className="progress-section">
                                <div className="prog-track">
                                    <div className="prog-fill bg-purple-500" style={{ width: '30%' }}></div>
                                </div>
                                <span className="text-xs text-gray-400">6/12 TEAMS DEPLOYED</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-right mt-2">
                        <span className="text-blue-500 cursor-pointer text-sm font-bold flex items-center justify-end gap-1 hover:text-blue-400">VIEW ALL <ChevronRight size={14} /></span>
                    </div>

                </div>
            </div>

            {/* Right Sidebar - Stats */}
            <div className="incident-sidebar">
                <div className="side-panel-box">
                    <div className="box-title">INCIDENT MAP</div>
                    <div className="mini-map-view">
                        {/* Simulation of 3D map */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%, transparent 75%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1))', backgroundSize: '10px 10px' }}></div>
                        <div className="map-marker-pulse" style={{ color: '#ec4899', top: '30%', left: '40%' }}></div>
                        <div className="map-marker-pulse" style={{ color: '#f59e0b', top: '60%', left: '70%' }}></div>
                    </div>
                </div>

                <div className="side-panel-box">
                    <div className="box-title">INCIDENT STATS</div>

                    <div className="stat-item-row purple">
                        <Activity size={20} className="text-purple-400" />
                        <div>
                            <div className="stat-val">14 <span className="text-xs font-normal text-purple-300 ml-2">INCIDENTS REPORTED</span></div>
                            <div className="text-xs text-slate-400 text-right">+1 Today</div>
                        </div>
                    </div>

                    <div className="stat-item-row pink">
                        <Plus size={20} className="text-pink-400" />
                        <div>
                            <div className="stat-val">+6 <span className="text-xs font-normal text-pink-300 ml-2">ACTIVE INCIDENTS</span></div>
                            <div className="text-xs text-slate-400 text-right">+1 Today</div>
                        </div>
                    </div>

                    <div className="stat-item-row red">
                        <AlertTriangle size={20} className="text-red-400" />
                        <div>
                            <div className="stat-val">10 <span className="text-xs font-normal text-red-300 ml-2">CRITICAL INCIDENTS</span></div>
                            <div className="text-xs text-slate-400 text-right">+2 Today</div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                        <div className="cat-row">
                            <div className="cat-icon bg-blue-500/20 text-blue-400"><Plus size={14} /></div>
                            <div className="text-sm font-bold text-gray-300 flex-1">MEDICAL</div>
                            <div className="cat-bar"><div className="cat-fill bg-blue-500" style={{ width: '60%' }}></div></div>
                            <div className="text-white font-bold">5</div>
                        </div>
                        <div className="cat-row">
                            <div className="cat-icon bg-orange-500/20 text-orange-400"><AlertTriangle size={14} /></div>
                            <div className="text-sm font-bold text-gray-300 flex-1">STRUCTURAL</div>
                            <div className="cat-bar"><div className="cat-fill bg-orange-500" style={{ width: '45%' }}></div></div>
                            <div className="text-white font-bold">4</div>
                        </div>
                        <div className="cat-row">
                            <div className="cat-icon bg-purple-500/20 text-purple-400"><Zap size={14} /></div>
                            <div className="text-sm font-bold text-gray-300 flex-1">POWER</div>
                            <div className="cat-bar"><div className="cat-fill bg-purple-500" style={{ width: '30%' }}></div></div>
                            <div className="text-white font-bold">3</div>
                        </div>
                        <div className="cat-row">
                            <div className="cat-icon bg-green-500/20 text-green-400"><Shield size={14} /></div>
                            <div className="text-sm font-bold text-gray-300 flex-1">HAZMAT</div>
                            <div className="cat-bar"><div className="cat-fill bg-green-500" style={{ width: '20%' }}></div></div>
                            <div className="text-white font-bold">2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncidentReportsAgency;
