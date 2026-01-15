import React, { useState } from 'react';
import {
    AlertTriangle, CheckCircle, MapPin, Clock, ArrowRight,
    Activity, Shield, Radio, Navigation
} from 'lucide-react';
import './VolunteerDashboard.css';

const VolunteerDashboard = () => {
    const [isOnDuty, setIsOnDuty] = useState(true);

    // Mock Data
    const tasks = [
        {
            id: 1,
            title: "Medical Evacuation Support",
            priority: "HIGH",
            location: "Sector 7, North Wing",
            distance: "1.2 km",
            eta: "8 min",
            type: "medical",
            desc: "Assist medical team with patient transport from collapse site."
        },
        {
            id: 2,
            title: "Supply Drop: Water & Food",
            priority: "MED",
            location: "Shelter B, Central Park",
            distance: "3.5 km",
            eta: "15 min",
            type: "logistics",
            desc: "Deliver emergency rations to displaced civilians."
        },
        {
            id: 3,
            title: "Perimeter Check",
            priority: "LOW",
            location: "Sector 4",
            distance: "0.8 km",
            eta: "5 min",
            type: "patrol",
            desc: "Routine safety patrol of residential block perimeter."
        }
    ];

    return (
        <div className="vol-dashboard-content animate-fade-in">
            {/* Left Column (Main Feed) */}
            <div className="vol-col-left">

                {/* Alerts / Status Section */}
                <div className="alerts-card">
                    <div className="alert-status-row">
                        <div className="status-indicator">
                            <div className="status-icon-box">
                                <Radio size={18} className="animate-pulse" />
                            </div>
                            <div className="status-text">
                                <h3>STATUS: <span className={isOnDuty ? "text-green-400" : "text-gray-500"}>{isOnDuty ? 'ON DUTY' : 'OFFLINE'}</span></h3>
                                <span className="status-sub">Connected to Command Grid</span>
                            </div>
                        </div>
                        <button
                            className={`btn-offline ${!isOnDuty ? 'text-red-400 border-red-900 bg-red-900/20' : ''}`}
                            onClick={() => setIsOnDuty(!isOnDuty)}
                        >
                            {isOnDuty ? 'GO OFFLINE' : 'GO ONLINE'}
                        </button>
                    </div>

                    <div className="quick-actions-grid">
                        <button className="action-btn-lg btn-report">
                            <AlertTriangle size={20} /> Report Incident
                        </button>
                        <button className="action-btn-lg btn-checkin">
                            <Shield size={20} /> Safety Check-In
                        </button>
                        <button className="action-btn-lg btn-accept-main">
                            <CheckCircle size={20} /> Accept Next Task
                        </button>
                    </div>
                </div>

                {/* Task List */}
                <div>
                    <div className="vol-section-header">
                        <h2>ASSIGNED MISSIONS <span className="header-dot"></span></h2>
                        <span className="text-sm font-mono text-cyan-400">3 ACTIVE</span>
                    </div>

                    {tasks.map(task => (
                        <div key={task.id} className={`task-card ${task.priority === 'HIGH' ? 'task-card-high' : task.priority === 'MED' ? 'task-card-med' : 'task-card-low'}`}>
                            <div className="card-header-row">
                                <span className={`priority-badge ${task.priority === 'HIGH' ? 'prio-high' : task.priority === 'MED' ? 'prio-med' : 'prio-low'}`}>
                                    /// {task.priority} PRIORITY
                                </span>
                                <span className="eta-text">ETA: {task.eta}</span>
                            </div>

                            <h3 className="task-title">{task.title}</h3>
                            <p className="task-desc">{task.desc}</p>

                            <div className="task-meta-row">
                                <div className="meta-location">
                                    <MapPin size={16} className="text-cyan-500" />
                                    {task.location} <span className="text-gray-600 mx-2">|</span> {task.distance}
                                </div>
                                <button className="btn-task-action btn-accept">
                                    VIEW DETAILS
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Right Column (Widgets) */}
            <div className="vol-col-right">

                {/* Radar/Map Widget */}
                <div>
                    <div className="vol-section-header">
                        <h2>NEARBY INCIDENTS <span className="header-dot"></span></h2>
                    </div>
                    <div className="radar-widget-container">
                        <div className="radar-grid"></div>
                        <div className="radar-scan"></div>

                        {/* Mock Map Points */}
                        <div className="user-point"></div>
                        <div className="map-point" style={{ top: '30%', left: '70%', animationDelay: '0.2s' }}></div>
                        <div className="map-point" style={{ top: '60%', left: '40%', animationDelay: '0.8s' }}></div>
                        <div className="map-point" style={{ top: '80%', left: '80%', animationDelay: '1.2s' }}></div>

                        <div className="map-text-overlay">
                            <span className="flex items-center gap-2"><Navigation size={14} className="text-cyan-400" /> SECTOR 7</span>
                            <span className="font-mono text-xs text-gray-400">SCANNING...</span>
                        </div>
                    </div>
                </div>

                {/* Performance Stats */}
                <div>
                    <div className="vol-section-header">
                        <h2>PERFORMANCE <span className="header-dot"></span></h2>
                    </div>
                    <div className="perf-card">
                        <div className="perf-grid">
                            <div className="perf-item">
                                <label>AVG RESPONSE</label>
                                <div className="perf-val glow-cyan">08:24</div>
                                <div className="perf-trend">
                                    <Activity size={12} /> -12s vs avg
                                </div>
                            </div>
                            <div className="perf-item">
                                <label>TASKS COMPLETED</label>
                                <div className="perf-val glow-white">28</div>
                                <div className="perf-trend">
                                    <Activity size={12} /> +4 today
                                </div>
                            </div>
                        </div>
                        <div className="perf-details-row">
                            <span>Distance Covered</span>
                            <span className="font-mono text-cyan-400">17.4 KM</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VolunteerDashboard;
