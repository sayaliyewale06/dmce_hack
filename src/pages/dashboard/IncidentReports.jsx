import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, AlertTriangle, Shield, Zap, Flame, User, Camera, CheckCircle, Activity, Box } from 'lucide-react';
import '../../styles/dashboard.css';
import './incident.css';

const IncidentReports = () => {
    const [view, setView] = useState('list'); // 'list' or 'report'
    const [selectedSeverity, setSelectedSeverity] = useState('low');

    const incidents = [
        {
            id: 1,
            title: "MEDICAL EMERGENCY",
            subtitle: "Critical Patients in Sector 7",
            desc: "Multiple casualties requiring immediate evacuation. Medical teams en route.",
            location: "1.2 km away",
            eta: "4 min",
            status: "IN PROGRESS",
            severity: "critical",
            deployed: "8/14",
            icon: <AlertTriangle size={24} color="white" />,
            color: "#ef4444"
        },
        {
            id: 2,
            title: "STRUCTURAL COLLAPSE",
            subtitle: "Integrity Failure in Habitat Alpha",
            desc: "Building integrity compromised with residents trapped inside.",
            location: "0.9 km away",
            eta: "immediate",
            status: "IN PROGRESS",
            severity: "high",
            deployed: "3/6",
            icon: <Shield size={24} color="white" />,
            color: "#f59e0b"
        },
        {
            id: 3,
            title: "POWER GRID FAILURE",
            subtitle: "Emergency Power Offline",
            desc: "Main reactor offline, emergency power at 30%.",
            location: "0.7 km away",
            eta: "14 min",
            status: "IN PROGRESS",
            severity: "critical",
            deployed: "6/12",
            icon: <Zap size={24} color="white" />,
            color: "#ef4444"
        }
    ];

    if (view === 'report') {
        return (
            <div className="incident-form-container">
                {/* Header / Breadcrumbs */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="breadcrumbs">
                        DASHBOARD <span>&gt;</span> COMMUNITY MEMBER <span>&gt;</span> REPORT INCIDENT <span>&gt;</span> <span style={{ color: '#fff' }}>FILL REPORT FORM</span>
                    </div>
                    <button
                        onClick={() => setView('list')}
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                    >
                        EXIT
                    </button>
                </div>

                <div className="report-frame">
                    <div style={{ padding: '15px 30px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                        <h2 style={{ fontSize: '1.2rem', margin: 0, letterSpacing: '1px', color: 'var(--text-secondary)' }}>FILL INCIDENT REPORT</h2>
                    </div>

                    <div className="report-content">
                        {/* LEFT COLUMN - FORM */}
                        <div>
                            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase' }}>INCIDENT DETAILS:</h4>

                            <div className="form-group">
                                <label className="form-label">Incident Type: *</label>
                                <select className="holo-select">
                                    <option>Select Incident Type</option>
                                    <option>Medical Emergency</option>
                                    <option>Fire Hazard</option>
                                    <option>Structural Damage</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Location: *</label>
                                <select className="holo-select">
                                    <option>Enter Location</option>
                                    <option>Sector 1</option>
                                    <option>Sector 2</option>
                                    <option>Habitat Alpha</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Severity Level: *</label>
                                <div className="severity-selector">
                                    <div className={`severity-option ${selectedSeverity === 'low' ? 'active low' : ''}`} onClick={() => setSelectedSeverity('low')}>LOW</div>
                                    <div className={`severity-option ${selectedSeverity === 'moderate' ? 'active moderate' : ''}`} onClick={() => setSelectedSeverity('moderate')}>MODERATE</div>
                                    <div className={`severity-option ${selectedSeverity === 'urgent' ? 'active urgent' : ''}`} onClick={() => setSelectedSeverity('urgent')}>URGENT</div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Description:</label>
                                <textarea className="holo-textarea" placeholder="Describe the incident..."></textarea>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <button className="upload-btn">
                                    <Camera size={16} /> UPLOAD PHOTOS / VIDEOS
                                </button>
                            </div>

                            <div style={{ display: 'flex', gap: '15px' }}>
                                <button className="submit-btn" onClick={() => setView('list')}>SUBMIT REPORT</button>
                                <button className="cancel-btn" onClick={() => setView('list')}>CANCEL</button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - VISUAL */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* 3D Visual Placeholder */}
                            <div className="visual-area">
                                {/* Overlay Grid */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px',
                                    transform: 'perspective(500px) rotateX(60deg) translateY(100px) translateZ(-100px)',
                                    pointerEvents: 'none'
                                }}></div>

                                {/* Glowing Nodes Mockup */}
                                <div style={{ position: 'absolute', top: '40%', left: '30%', width: '10px', height: '10px', background: '#f59e0b', borderRadius: '50%', boxShadow: '0 0 15px #f59e0b' }}></div>
                                <div style={{ position: 'absolute', top: '50%', left: '60%', width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 15px #ef4444' }}></div>
                                <div style={{ position: 'absolute', top: '30%', left: '50%', width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', boxShadow: '0 0 15px #3b82f6' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM ROW - STATUS CARDS */}
                    <div style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '20px' }}>
                        <div className="status-cards-row">
                            <div className="status-card">
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                                    <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                                        <Activity size={20} color="#3b82f6" />
                                    </div>
                                </div>
                                <h4>AI SEVERITY ASSESSMENT</h4>
                                <div className="status-value">Severity Predicted</div>
                            </div>
                            <div className="status-card">
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                                    <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                                        <CheckCircle size={20} color="#10b981" />
                                    </div>
                                </div>
                                <h4>TASK TRACKING</h4>
                                <div className="status-value">Incident Logged</div>
                            </div>
                            <div className="status-card">
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                                    <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                                        <Box size={20} color="#8b5cf6" />
                                    </div>
                                </div>
                                <h4>RESOURCE MANAGEMENT</h4>
                                <div className="status-value">Resources Allocated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="community-grid">
            <div className="left-panel">
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px' }}>INCIDENT REPORTS</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Monitoring real-time crisis incidents and response status.</p>
                    </div>
                    <button
                        onClick={() => setView('report')}
                        style={{
                            background: '#ef4444',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex', alignItems: 'center', gap: '8px',
                            fontWeight: '600',
                            boxShadow: '0 4px 10px rgba(239, 68, 68, 0.3)'
                        }}
                    >
                        <AlertTriangle size={16} /> REPORT INCIDENT
                    </button>
                </div>

                <div className="filter-bar">
                    <div className="search-container">
                        <Search size={18} color="var(--text-secondary)" />
                        <input type="text" placeholder="Search incidents..." className="search-input" />
                    </div>

                    <div className="filter-pill active" style={{ background: '#3b82f6', borderColor: '#3b82f6', color: 'white' }}>All</div>
                    <div className="filter-pill"><AlertTriangle size={14} color="#ef4444" /> Critical 5</div>
                    <div className="filter-pill"><Flame size={14} color="#f59e0b" /> High 3</div>
                    <div className="filter-pill"><Shield size={14} color="#10b981" /> Moderate 2</div>
                </div>

                <div className="incidents-list">
                    {incidents.map(incident => (
                        <div key={incident.id} className="incident-card" style={{ borderLeft: `4px solid ${incident.color}` }}>
                            <div className="card-header-row">
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '8px',
                                        background: incident.color === '#ef4444' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {incident.icon}
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <h3 style={{ margin: 0, fontSize: '1.1rem', color: incident.color === '#ef4444' ? '#ff8fa3' : '#fcd34d' }}>{incident.title}</h3>
                                            <span style={{ fontSize: '0.7rem', padding: '2px 6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>IN PROGRESS</span>
                                        </div>
                                        <div style={{ fontWeight: '600', fontSize: '1rem', marginTop: '2px' }}>{incident.subtitle}</div>
                                    </div>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{incident.desc}</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <div className="info-row" style={{ margin: 0 }}>
                                    <div className="info-item"><MapPin size={16} /> {incident.location}</div>
                                    <div className="info-item"><Clock size={16} /> ETA: {incident.eta}</div>
                                </div>
                                <div style={{ width: '200px', textAlign: 'right' }}>
                                    <div className="progress-container" style={{ height: '6px', background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="progress-bar" style={{ width: '60%', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }}></div>
                                    </div>
                                    <div style={{ fontSize: '0.75rem', marginTop: '5px', color: 'var(--text-secondary)' }}>{incident.deployed} TEAMS DEPLOYED</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-panel">
                <div className="glass-card" style={{ padding: '0', overflow: 'hidden', height: '250px' }}>
                    <div style={{ padding: '15px', borderBottom: '1px solid var(--border-color)' }}>
                        <h3 style={{ margin: 0, fontSize: '0.9rem' }}>INCIDENT MAP</h3>
                    </div>
                    <div style={{
                        width: '100%', height: '100%',
                        background: "url('https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/13/2344/3160.png')",
                        backgroundSize: 'cover',
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', top: '40%', left: '40%', padding: '5px', background: 'rgba(239, 68, 68, 0.5)', borderRadius: '50%' }}>
                            <AlertTriangle size={16} color="white" />
                        </div>
                        <div style={{ position: 'absolute', top: '60%', left: '70%', padding: '5px', background: 'rgba(245, 158, 11, 0.5)', borderRadius: '50%' }}>
                            <Shield size={16} color="white" />
                        </div>
                    </div>
                </div>

                <div className="glass-card">
                    <div className="panel-header">
                        <h3>INCIDENT STATS</h3>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Zap size={20} color="#bd00ff" />
                            <span style={{ fontWeight: 'bold' }}>14 INCIDENTS REPORTED</span>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#3b82f6' }}>+1 Today</div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <AlertTriangle size={20} color="#ef4444" />
                            <span style={{ fontWeight: 'bold' }}>10 CRITICAL INCIDENTS</span>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#3b82f6' }}>+2 Today</div>
                    </div>

                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                        {[
                            { label: 'MEDICAL', count: 5, color: '#3b82f6' },
                            { label: 'STRUCTURAL', count: 4, color: '#f59e0b' },
                            { label: 'POWER', count: 3, color: '#bd00ff' },
                            { label: 'HAZMAT', count: 2, color: '#10b981' },
                        ].map((item, i) => (
                            <div key={i} style={{ marginBottom: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '2px' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {i === 0 ? <AlertTriangle size={10} /> : <Zap size={10} />}
                                        </div>
                                        {item.label}
                                    </span>
                                    <span>{item.count}</span>
                                </div>
                                <div className="progress-container" style={{ height: '4px', marginTop: '0' }}>
                                    <div className="progress-bar" style={{ width: '70%', background: item.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncidentReports;
