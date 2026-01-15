import React, { useState } from 'react';
import {
    Search, MapPin, Clock, Shield, AlertTriangle, ChevronRight,
    Users, Activity, MessageSquare, Briefcase, PlusCircle,
    MoreHorizontal, Radio
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AgencyTasks.css';

const AgencyTasks = () => {
    const navigate = useNavigate();
    return (
        <div className="agency-tasks-container">
            {/* Main Content Column */}
            <div className="main-content-col">
                {/* Header */}
                <div className="tasks-header-sec">
                    <div className="tasks-title">
                        <h1>TASK MANAGEMENT</h1>
                    </div>
                    <div className="tasks-subtitle">
                        Monitor and assign tasks to response teams. Track mission progress in real-time.
                    </div>

                    <div className="tasks-search-row">
                        <div className="search-wrapper">
                            <Search className="search-icon-inside" size={18} />
                            <input type="text" placeholder="Search tasks by ID, location, or type..." className="search-input" />
                        </div>
                        <div className="active-count-badge">
                            6 ACTIVE TASKS
                        </div>
                    </div>
                </div>

                {/* Active Task: Medical Emergency */}
                <div className="task-card-agency priority-high">
                    <div className="holo-map-container">
                        <div className="pulsing-pin" style={{ top: '40%', right: '40%', color: '#ec4899' }}></div>
                        <div style={{ position: 'absolute', bottom: '15px', right: '15px', fontSize: '0.75rem', color: '#ec4899', fontWeight: 'bold', textShadow: '0 0 10px black' }}>SECTOR 7 CAM</div>
                    </div>

                    <div className="card-top">
                        <div className="card-icon-area">
                            <div className="type-icon-box icon-pink">
                                <PlusCircle size={28} />
                            </div>
                            <div className="task-info">
                                <h3>MEDICAL EMERGENCY</h3>
                                <div className="task-sub">Aid Critical Patients in Sector 7</div>
                            </div>
                        </div>
                        <div className="status-badge badge-pink">HIGH PRIORITY</div>
                    </div>

                    <p className="task-desc">
                        Provide first aid to the injured. Assist in stabilizing critical patients.
                        Multiple casualties reported near the transport hub.
                    </p>

                    <div className="meta-grid">
                        <div className="meta-item">
                            <MapPin size={16} className="text-gray-400" />
                            <span className="text-gray-400">SECTOR 7</span> <span className="meta-val">1.4 km away</span>
                        </div>
                        <div className="meta-item">
                            <Clock size={16} className="text-pink-400" />
                            <span className="text-pink-400">ETA:</span> <span className="meta-val eta-val text-pink-400">4 min</span>
                        </div>
                    </div>

                    <div className="action-bar">
                        <div className="agency-btns">
                            <button className="btn-assign blue" onClick={() => navigate('/dashboard/agency/assign-task/1')}>
                                <Shield size={16} /> ASSIGN TEAM
                            </button>
                            <button className="btn-details">VIEW DETAILS</button>
                        </div>
                        <div className="deploy-stats">
                            <div className="progress-track">
                                <div className="progress-fill bg-blue-500" style={{ width: '57%' }}></div>
                            </div>
                            <span>8/14 TEAMS DEPLOYED</span>
                        </div>
                    </div>
                </div>

                {/* Active Task: Structural Collapse */}
                <div className="task-card-agency priority-urgent">
                    <div className="holo-map-container">
                        <div className="pulsing-pin" style={{ top: '60%', right: '30%', color: '#f59e0b' }}></div>
                    </div>

                    <div className="card-top">
                        <div className="card-icon-area">
                            <div className="type-icon-box icon-orange">
                                <AlertTriangle size={28} />
                            </div>
                            <div className="task-info">
                                <h3>STRUCTURAL COLLAPSE</h3>
                                <div className="task-sub">Search and Rescue Residents in Habitat Alpha</div>
                            </div>
                        </div>
                        <div className="status-badge badge-orange">HIGH URGENCY</div>
                    </div>

                    <p className="task-desc">
                        Locate and evacuate residents trapped in the collapsed building.
                        Structural integrity critical. Heavy lifting gear required.
                    </p>

                    <div className="meta-grid">
                        <div className="meta-item">
                            <MapPin size={16} className="text-gray-400" />
                            <span className="text-gray-400">Habitat Alpha</span> <span className="meta-val">0.9 km away</span>
                        </div>
                        <div className="meta-item">
                            <Clock size={16} className="text-orange-400" />
                            <span className="text-orange-400">ETA:</span> <span className="meta-val eta-val text-orange-400">6 min</span>
                        </div>
                    </div>

                    <div className="action-bar">
                        <div className="agency-btns">
                            <button className="btn-assign orange">
                                <Users size={16} /> ASSIGN TEAM
                            </button>
                            <button className="btn-details">VIEW DETAILS</button>
                        </div>
                        <div className="deploy-stats">
                            <div className="progress-track">
                                <div className="progress-fill bg-orange-500" style={{ width: '50%' }}></div>
                            </div>
                            <span>3/6 TEAMS DEPLOYED</span>
                        </div>
                    </div>
                </div>

                {/* Available Missions */}
                <div className="filters-section">
                    <div className="filter-header">
                        <span>AVAILABLE MISSIONS</span>
                        <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white' }}>VIEW ALL <ChevronRight size={14} /></span>
                    </div>
                    <div className="filter-pills">
                        <div className="filter-pill pill-blue"><PlusCircle size={14} /> MEDICAL 3</div>
                        <div className="filter-pill pill-orange"><Users size={14} /> SEARCH & RESCUE 2</div>
                        <div className="filter-pill pill-green"><Radio size={14} /> HAZMAT 1</div>
                    </div>
                </div>

                {/* News Ticker */}
                <div className="news-ticker">
                    <div className="ticker-label"><Activity size={14} style={{ display: 'inline', marginRight: '5px' }} /> BREAKING NEWS</div>
                    <div className="ticker-text">Major incident unfolding in Sector 7, multiple casualties reported. Stay Alert.  •  System update scheduled for 0300 HRS.</div>
                </div>

            </div>

            {/* Right Sidebar - Agency Command View */}
            <div className="right-sidebar-agency">

                {/* Command Overview */}
                <div className="sidebar-widget">
                    <div className="widget-title">
                        COMMAND OVERVIEW <MoreHorizontal size={16} />
                    </div>
                    <div className="command-profile">
                        <div className="cmd-avatar">JK</div>
                        <div className="cmd-info">
                            <h4>Jackson Kent</h4>
                            <span className="cmd-role">COORDINATOR</span>
                            <span className="cmd-id">CMD-2847-ALPHA</span>
                        </div>
                    </div>
                    <div className="stat-rows">
                        <div className="stat-row">
                            <span className="stat-label">STATUS</span>
                            <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ width: 8, height: 8, background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }}></span> COMMAND ACTIVE
                            </span>
                        </div>
                    </div>
                </div>

                {/* Operations Summary */}
                <div className="sidebar-widget">
                    <div className="widget-title">
                        OPERATIONS SUMMARY <MoreHorizontal size={16} />
                    </div>
                    <div className="stat-rows">
                        <div className="stat-row">
                            <span className="stat-label"><Activity size={16} color="#60a5fa" /> ACTIVE TASKS</span>
                            <span className="stat-val-badge">6</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label"><Briefcase size={16} color="#fbbf24" /> PENDING ASSIGNMENTS</span>
                            <span className="stat-val-badge" style={{ background: '#f59e0b' }}>8</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label"><MessageSquare size={16} color="#c084fc" /> URGENT ALERTS</span>
                            <span className="stat-val-badge" style={{ background: '#9333ea' }}>7</span>
                        </div>
                    </div>

                    <button className="btn-deploy-main">
                        <Shield size={18} /> DEPLOY ALL TEAMS
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AgencyTasks;
