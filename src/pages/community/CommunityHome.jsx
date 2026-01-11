import React from 'react';
import { AlertTriangle, MapPin, Activity, Shield, Car, Cross, Radio, Users, ChevronRight, Clock, Droplets } from 'lucide-react';
import '../../styles/dashboard.css';

const CommunityHome = () => {
    return (
        <div className="community-grid">
            {/* LEFT Panel (Main) */}
            <div className="left-panel">

                {/* Emergency Hero Card */}
                <div className="glass-card emergency-card">
                    <div className="emergency-header">
                        <div className="emergency-label">
                            <Activity size={18} />
                            <span>MEDICAL EMERGENCY</span>
                        </div>
                        <span className="priority-badge">HIGH PRIORITY</span>
                    </div>
                    <h1>CRITICAL PATIENTS IN SECTOR 7</h1>
                    <p>Multiple casualties requiring immediate evacuation. Medical teams on standby.</p>

                    <div className="emergency-meta">
                        <div className="meta-item">
                            <MapPin size={16} />
                            SECTOR 7, 1.2 KM AWAY
                        </div>
                        <div className="meta-item">
                            <Clock size={16} />
                            ETA: 8 MIN
                        </div>
                    </div>
                </div>

                {/* Sub Grid: Summary & Live Updates */}
                <div className="sub-grid">
                    {/* Incident Summary */}
                    <div className="glass-card incident-summary">
                        <div className="panel-header">
                            <h3>Incident Summary</h3>
                        </div>

                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', display: 'inline-block', marginBottom: '10px' }}>
                            CRITICAL
                        </div>

                        <div className="severity-score">
                            <div className="score-row">
                                <span style={{ color: 'var(--text-secondary)' }}>AI Severity</span>
                                <span className="score-val critical">+ 88%</span>
                            </div>
                            <div className="score-row">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <Users size={16} /> User123
                                </div>
                                <span className="score-val high">HIGH</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Clock size={14} /> High
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Shield size={14} /> Building Collapse
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', marginTop: '5px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Users size={14} /> 23 Injured
                            </div>
                        </div>
                    </div>

                    {/* Live Updates */}
                    <div className="glass-card live-updates">
                        <div className="panel-header">
                            <h3>Live Updates</h3>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                                <Car size={16} /> 10 TEAMS EN ROUTE
                            </div>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ETA: 4 min</span>
                        </div>

                        <div className="map-visual">
                            <div className="map-overlay">
                                SECTOR 7
                            </div>
                        </div>
                        <div style={{ marginTop: '10px', fontSize: '0.8rem' }}>
                            <span style={{ color: 'var(--neon-blue)', fontWeight: 'bold' }}>BREAKING NEWS</span> <span style={{ color: 'var(--text-secondary)' }}>Major incident unfolding in Sector 7, evacuations underway.</span>
                        </div>
                    </div>
                </div>

                {/* Scan Grid (Actions List) */}
                <div className="glass-card scan-grid">
                    <div className="panel-header">
                        <h3>SCAN GRID</h3>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <div style={{ width: '8px', height: '8px', background: 'var(--text-secondary)', borderRadius: '50%' }}></div>
                            <div style={{ width: '8px', height: '8px', background: 'var(--text-secondary)', borderRadius: '50%' }}></div>
                            <div style={{ width: '8px', height: '8px', background: 'var(--text-secondary)', borderRadius: '50%' }}></div>
                        </div>
                    </div>

                    <div className="action-row">
                        <div className="row-left">
                            <Cross className="row-icon" />
                            <div>
                                <span className="row-title">DEPLOY MED TEAM</span>
                                <span className="row-desc">Send medical teams to the incident site.</span>
                            </div>
                        </div>
                        <ChevronRight className="row-icon" size={20} />
                    </div>

                    <div className="action-row" style={{ borderColor: 'rgba(255, 15, 67, 0.3)', background: 'linear-gradient(90deg, rgba(255, 15, 67, 0.05) 0%, transparent 100%)' }}>
                        <div className="row-left">
                            <Shield className="row-icon" style={{ color: 'var(--neon-red)' }} />
                            <div>
                                <span className="row-title" style={{ color: 'var(--neon-red)' }}>ALERT HOSPITALS</span>
                                <span className="row-desc">Notify local hospitals to prepare for incoming casualties.</span>
                            </div>
                        </div>
                        <ChevronRight className="row-icon" size={20} style={{ color: 'var(--neon-red)' }} />
                    </div>

                    <div className="action-row" style={{ borderColor: 'rgba(251, 191, 36, 0.3)', background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.05) 0%, transparent 100%)' }}>
                        <div className="row-left">
                            <Users className="row-icon" style={{ color: '#fbbf24' }} />
                            <div>
                                <span className="row-title" style={{ color: '#fbbf24' }}>EVACUATE AREA</span>
                                <span className="row-desc">Coordinate and assist in evacuating at-risk civilians.</span>
                            </div>
                        </div>
                        <ChevronRight className="row-icon" size={20} style={{ color: '#fbbf24' }} />
                    </div>
                </div>
            </div>

            {/* RIGHT Panel (Tasks & Status) */}
            <div className="right-panel">

                {/* Tasks Header*/}
                <div className="panel-header" style={{ marginTop: '0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Radio size={20} color="var(--neon-blue)" />
                        <h3>TASKS</h3>
                    </div>
                    <ChevronRight size={20} color="var(--text-secondary)" />
                </div>

                {/* Big Action Buttons */}
                <div>
                    <button className="action-btn primary">
                        <Cross size={20} /> DEPLOY MED TEAM
                    </button>
                    <button className="action-btn secondary">
                        <Shield size={20} /> ALERT HOSPITALS
                    </button>
                    <button className="action-btn danger">
                        <Users size={20} /> EVACUATE AREA
                    </button>
                </div>

                {/* System Status Card */}
                <div className="glass-card status-card">
                    <div className="panel-header">
                        <h3>SYSTEM STATUS</h3>
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Average Response Time:</div>
                    <span className="response-time">10m 42s</span>

                    <div className="stats-row">
                        <div>
                            <span className="stat-up">↑ +20%</span>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>CRITIAL ERRORS</div>
                        </div>
                        <div>
                            <span className="stat-down">↓ -15%</span>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>RESPONSE TIME</div>
                        </div>
                    </div>
                </div>

                {/* Task Queue */}
                <div className="glass-card task-queue" style={{ flex: 1 }}>
                    <div className="panel-header">
                        <h3>TASK QUEUE</h3>
                    </div>

                    <div className="action-row" style={{ padding: '10px' }}>
                        <div className="row-left" style={{ gap: '10px' }}>
                            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '8px', borderRadius: '6px' }}>
                                <Cross size={16} color="var(--primary-blue)" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Deploy Med Team</span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Send medical teams to site</span>
                            </div>
                        </div>
                    </div>

                    <div className="action-row" style={{ padding: '10px' }}>
                        <div className="row-left" style={{ gap: '10px' }}>
                            <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '8px', borderRadius: '6px' }}>
                                <Shield size={16} color="var(--neon-red)" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Alert Hospitals</span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Local hospitals notified</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CommunityHome;
