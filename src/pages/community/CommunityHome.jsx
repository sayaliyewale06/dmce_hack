import React, { useState, useEffect } from 'react';
import {
    AlertTriangle, MapPin, Activity, Shield, Car, Radio, Users,
    Flame, Zap, Droplets, HeartPulse, ShieldAlert, CheckCircle,
    Clock, Navigation, Camera, Edit2, Phone
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './CommunityHome.css';

const CommunityHome = () => {
    const navigate = useNavigate();

    // --- STATE ---

    // Quick Report Form
    const [reportForm, setReportForm] = useState({
        type: 'Medical',
        severity: 'HIGH',
        location: '',
        description: ''
    });

    const [submitting, setSubmitting] = useState(false);

    // My Reports Dummy Data
    const [myReports, setMyReports] = useState([
        { id: 101, type: 'Medical Emergency', time: '10 mins ago', status: 'help', location: 'Block C' },
        { id: 102, type: 'Power Outage', time: '2 days ago', status: 'resolved', location: 'Sector 4' },
    ]);

    // Alerts Dummy Data
    const [alerts, setAlerts] = useState([
        { id: 1, type: 'evac', priority: 'Critical', title: 'IMMEDIATE EVACUATION', desc: 'Sector 7 Residents must evacuate to North Shelter due to structural instability.', time: '2 mins ago', dist: '1.2 km' },
        { id: 2, type: 'fire', priority: 'High', title: 'Containment Fire', desc: 'Fire reported in Industrial Zone. Firefighters en route. Avoid the area.', time: '15 mins ago', dist: '3.5 km' },
        { id: 3, type: 'safe', priority: 'Safe', title: 'Sector 4 All Clear', desc: 'Gas leak resolved in Sector 4 residential block.', time: '1 hour ago', dist: '5.0 km' },
        { id: 4, type: 'info', priority: 'Medium', title: 'Water Supply Update', desc: 'Maintenance scheduled for Sector 2 tomorrow morning.', time: '3 hours ago', dist: 'N/A' },
        { id: 5, type: 'info', priority: 'Low', title: 'Volunteer Signups', desc: 'New volunteer slots open for weekend distribution.', time: '5 hours ago', dist: 'N/A' },
    ]);

    // --- HANDLERS ---

    const handleReportSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            // Add new report to list simulated
            const newRep = {
                id: Math.floor(Math.random() * 1000),
                type: reportForm.type,
                time: 'Just now',
                status: 'submitted',
                location: reportForm.location || 'Current Loc'
            };
            setMyReports([newRep, ...myReports]);
            toast.success("Report Submitted! Help is being coordinated.");
            setReportForm({ ...reportForm, description: '', location: '' });
        }, 1500);
    };

    // --- RENDER HELPERS ---

    const getSeverityColor = (sev) => {
        if (sev === 'LOW') return 'low';
        if (sev === 'MEDIUM') return 'med';
        if (sev === 'HIGH') return 'high';
        return 'crit';
    };

    const StatusBadge = ({ status }) => {
        let colorClass = 'gray';
        let text = 'PENDING';
        if (status === 'submitted') { colorClass = 'text-yellow-400 bg-yellow-400/10'; text = 'SUBMITTED'; }
        if (status === 'review') { colorClass = 'text-blue-400 bg-blue-400/10'; text = 'IN REVIEW'; }
        if (status === 'help') { colorClass = 'help'; text = 'HELP ON THE WAY'; }
        if (status === 'resolved') { colorClass = 'text-slate-400 bg-slate-400/10'; text = 'RESOLVED'; }

        return <span className={`status-badge ${colorClass} ${status === 'help' ? 'help' : ''}`}>{text}</span>;
    };

    return (
        <div className="community-dashboard-container">

            <div className="dashboard-grid">

                {/* --- LEG COLUMN: Quick Actions --- */}
                <div className="left-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* 1. Quick Report Panel */}
                    <div className="dashboard-card quick-report-panel">
                        <button className="report-header-btn" onClick={() => navigate('/dashboard/community/report')}>
                            REPORT INCIDENT
                        </button>

                        <div className="card-title"><Radio size={18} color="#f97316" /> QUICK FORM</div>

                        <form className="quick-form" onSubmit={handleReportSubmit}>
                            <select
                                className="q-input"
                                value={reportForm.type}
                                onChange={(e) => setReportForm({ ...reportForm, type: e.target.value })}
                            >
                                <option>Medical Emergency</option>
                                <option>Fire</option>
                                <option>Structural Damage</option>
                                <option>Flood</option>
                                <option>Crime</option>
                                <option>Other</option>
                            </select>

                            <div className="severity-row">
                                {['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].map(sev => (
                                    <button
                                        type="button"
                                        className={`sev-btn ${getSeverityColor(sev)} ${reportForm.severity === sev ? 'active' : ''}`}
                                        key={sev}
                                        onClick={() => setReportForm({ ...reportForm, severity: sev })}
                                    >
                                        {sev.substring(0, 3)}
                                    </button>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '5px' }}>
                                <input
                                    className="q-input"
                                    style={{ flex: 1 }}
                                    placeholder="Location..."
                                    value={reportForm.location}
                                    onChange={(e) => setReportForm({ ...reportForm, location: e.target.value })}
                                />
                                <button type="button" className="q-input" style={{ width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MapPin size={16} />
                                </button>
                            </div>

                            <textarea
                                className="q-input"
                                rows="2"
                                placeholder="Describe slightly..."
                                value={reportForm.description}
                                onChange={(e) => setReportForm({ ...reportForm, description: e.target.value })}
                            ></textarea>

                            <button type="submit" className="submit-quick-btn">
                                {submitting ? 'SENDING...' : 'SUBMIT NOW'}
                            </button>
                        </form>
                    </div>

                    {/* 2. My Reports */}
                    <div className="dashboard-card">
                        <div className="card-header">
                            <div className="card-title">
                                <Activity size={16} className="text-blue-400" /> MY REPORTS
                            </div>
                            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Last 7 Days</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {myReports.map(rep => (
                                <div key={rep.id} className={`report-item ${rep.status}`}>
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{rep.type}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{rep.time} • {rep.location}</div>
                                    </div>
                                    <StatusBadge status={rep.status} />
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#3b82f6', marginTop: '5px', cursor: 'pointer' }}>View All History</div>
                    </div>

                </div>

                {/* --- MIDDLE COLUMN: Alerts Feed --- */}
                <div className="middle-col">
                    <div className="dashboard-card" style={{ height: '100%', padding: '0', overflow: 'hidden', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <div style={{ paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="card-title" style={{ fontSize: '1.2rem' }}>
                                <ShieldAlert size={22} className="text-red-500" /> LIVE EMERGENCY ALERTS
                            </div>
                            <span className="text-xs text-slate-400 border border-slate-700 px-2 py-1 rounded">Real-time Feed</span>
                        </div>

                        <div className="alerts-feed">
                            {alerts.map(alert => (
                                <div key={alert.id} className={`alert-card ${alert.type === 'evac' ? 'critical' : alert.priority === 'High' ? 'high' : alert.type === 'safe' ? 'safe' : 'info'}`}>
                                    <div className="alert-header">
                                        <div className="alert-title">
                                            {alert.type === 'evac' && <AlertTriangle size={18} className="text-red-500" />}
                                            {alert.type === 'fire' && <Flame size={18} className="text-orange-500" />}
                                            {alert.type === 'safe' && <CheckCircle size={18} className="text-green-500" />}
                                            {alert.type === 'info' && <Radio size={18} className="text-blue-500" />}
                                            {alert.title}
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${alert.priority === 'Critical' ? 'bg-red-500/20 text-red-400' : 'bg-slate-700 text-slate-300'}`}>
                                            {alert.priority}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>{alert.desc}</p>
                                    <div className="alert-meta">
                                        <span><Clock size={12} style={{ marginRight: '4px' }} /> {alert.time}</span>
                                        <span><Navigation size={12} style={{ marginRight: '4px' }} /> {alert.dist}</span>
                                        {alert.priority === 'Critical' && <span style={{ color: '#f87171' }}>• AFFECTING SECTOR 7</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: Map & Profile --- */}
                <div className="right-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* 4. Crisis Map Widget */}
                    <div className="crisis-map-widget">
                        <div className="map-placeholder"></div>

                        {/* Static Pins */}
                        <div className="map-pin-static" style={{ top: '40%', left: '30%', color: '#ef4444' }}></div>
                        <div className="map-pin-static" style={{ top: '60%', left: '70%', color: '#ef4444' }}></div>
                        <div className="map-pin-static" style={{ top: '50%', left: '50%', color: '#3b82f6', border: '2px solid white', width: '16px', height: '16px' }}></div> {/* User */}
                        <div className="map-pin-static" style={{ top: '20%', left: '80%', color: '#10b981' }}></div>

                        <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.7rem', color: '#94a3b8' }}>
                            <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>YOU</span> are in Sector 4 (Safe)
                        </div>
                        <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', border: '1px solid #334155', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' }}>
                            Full Map
                        </button>
                    </div>

                    {/* 5. Profile Card */}
                    <div className="dashboard-card">
                        <div className="card-header">
                            <div className="card-title">
                                <Users size={16} /> PROFILE & CONTACTS
                            </div>
                            <Edit2 size={14} className="text-slate-400 cursor-pointer hover:text-white" />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>C</div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>Community Member</div>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ID: #8392-CM</div>
                            </div>
                        </div>

                        <div className="profile-stats">
                            <div className="p-stat">
                                <div className="p-val">12</div>
                                <div className="p-lbl">Reports</div>
                            </div>
                            <div className="p-stat">
                                <div className="p-val text-green-400">98%</div>
                                <div className="p-lbl">Safety Score</div>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>EMERGENCY CONTACTS</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                                    <div style={{ padding: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}><Phone size={14} color="#3b82f6" /></div>
                                    <span>Mom (+1 234...)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                                    <div style={{ padding: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}><Phone size={14} color="#3b82f6" /></div>
                                    <span>Local Police</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CommunityHome;
