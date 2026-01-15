import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Map, Users, BarChart3, Bell,
    ChevronRight, ArrowUp, Zap, Radio, Activity,
    Siren, Stethoscope, Building2, AlertTriangle,
    Menu, X
} from 'lucide-react';
import '../../index.css';
import './AgencyDashboard.css';

const AgencyDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Real-time clock effect
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const metrics = [
        { label: 'ACTIVE MISSIONS', value: '12', colorClass: 'text-blue' },
        { label: 'EVACUATED', value: '324', colorClass: 'text-green', icon: ArrowUp, change: true },
        { label: 'SYSTEM STATUS', value: '98%', colorClass: 'text-pink', dot: true },
        { label: 'CONNECTED', value: '253,962', colorClass: 'text-cyan', wifi: true }
    ];

    const tasks = [
        { id: 1, label: 'DEPLOY MED TEAM', icon: Stethoscope, color: 'blue', sub: 'Send medical teams to the incident site.' },
        { id: 2, label: 'ALERT HOSPITALS', icon: Building2, color: 'purple', sub: 'Notify local hospitals to prepare.' },
        { id: 3, label: 'EVACUATE AREA', icon: AlertTriangle, color: 'amber', sub: 'Coordinate evaluation of at-risk civilians.' }
    ];

    return (
        <div className="agency-container">
            {/* Background Ambience */}
            <div className="agency-bg-effects">
                <div className="bg-gradient-top" />
                <div className="bg-glow-right" />
            </div>

            {/* Header */}
            <nav className="agency-nav">
                <div className="nav-left">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    <div className="logo-box">
                        <Radio color="white" size={20} />
                    </div>
                    <span className="brand-text">
                        CRISIS COMMAND
                    </span>
                </div>

                {/* Metrics Bar - Desktop */}
                <div className="metrics-bar">
                    {metrics.map((m, i) => (
                        <div key={i} className="metric-item">
                            <div className={`metric-value ${m.colorClass}`}>
                                {m.value}
                                {m.icon && <m.icon size={14} />}
                                {m.dot && <div className="pulse-dot" />}
                                {m.wifi && <Zap size={14} />}
                            </div>
                            <div className="metric-label">{m.label}</div>
                        </div>
                    ))}
                </div>

                <div className="nav-right">
                    <div className="user-info">
                        <span className="user-role">Commander</span>
                        <span className="user-status">CRISIS LEVEL: ALPHA</span>
                    </div>
                    <button className="notif-btn">
                        <Bell size={20} />
                        <span className="ping-dot" />
                    </button>
                    <div className="avatar">C</div>
                </div>
            </nav>

            <div className="agency-layout">
                {/* Mobile Sidebar Overlay */}
                {mobileMenuOpen && (
                    <div className="mobile-overlay md:hidden">
                        <button onClick={() => navigate('/dashboard')} className="back-btn">
                            <ChevronRight className="rotate-180" size={16} /> BACK TO DASHBOARD
                        </button>
                        <NavButton active icon={LayoutDashboard} label="Dashboard" />
                        <NavButton icon={Map} label="Crisis Map" />
                        <NavButton icon={Users} label="Response Teams" />
                        <NavButton icon={BarChart3} label="Analytics" />
                    </div>
                )}

                {/* Left Sidebar - Desktop */}
                <aside className="sidebar-panel">
                    <button onClick={() => navigate('/dashboard')} className="back-btn">
                        <ChevronRight style={{ transform: 'rotate(180deg)' }} size={16} /> BACK TO DASHBOARD
                    </button>

                    <NavButton active icon={LayoutDashboard} label="Dashboard" />
                    <NavButton icon={Map} label="Crisis Map" />
                    <NavButton icon={Users} label="Response Teams" />
                    <NavButton icon={BarChart3} label="Analytics" />
                </aside>

                {/* Main Content Grid */}
                <main className="main-content-grid">

                    {/* Top Row: Alert & Incident (Left Column) */}
                    <div className="main-column left">

                        {/* High Priority Alert Card */}
                        <div className="alert-card">
                            <div className="alert-stripe" />

                            <div className="card-header">
                                <span className="tag-badge">
                                    <Activity size={16} className="text-pink animate-pulse" /> Medical Emergency
                                </span>
                                <span className="priority-badge">HIGH PRIORITY</span>
                            </div>

                            <h2 className="card-title">CRITICAL PATIENTS IN SECTOR 7</h2>
                            <p className="card-desc">
                                Multiple casualties requiring immediate evacuation. Medical teams on standby.
                                Structural instability detected in surrounding blocks.
                            </p>

                            <div className="card-meta">
                                <div className="meta-item">
                                    <Map size={16} className="text-blue" /> SECTOR 7, 1.2 KM AWAY
                                </div>
                                <div className="meta-item">
                                    <ArrowUp size={16} className="text-green" /> ETA: 8 MIN
                                </div>
                            </div>
                        </div>

                        {/* Middle Row: Summary & Updates */}
                        <div className="sub-grid">
                            {/* Incident Summary */}
                            <div className="glass-card">
                                <h3 className="panel-title">Incident Summary</h3>
                                <div className="flex items-center gap-3 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <AlertTriangle className="text-pink" />
                                    <span style={{ fontSize: '1.25rem', fontWeight: 700 }} className="text-pink">CRITICAL</span>
                                </div>

                                <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div className="stat-row">
                                        <span className="text-gray-400">AI Severity</span>
                                        <span className="text-green font-bold">+ 88%</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="text-gray-400">Casualties</span>
                                        <span className="text-white font-bold">23 Injured</span>
                                    </div>
                                </div>
                            </div>

                            {/* Live Updates Map Placeholder */}
                            <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                                <h3 className="panel-title">Live Updates</h3>
                                <div style={{ position: 'absolute', inset: 0, top: '40px', opacity: 0.3, backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                                <div style={{ position: 'relative', zIndex: 10, marginTop: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }} className="text-blue">
                                        <Siren /> 10 TEAMS EN ROUTE
                                    </div>
                                    <div style={{ height: '4px', width: '100%', background: 'rgba(30,58,138,0.3)', borderRadius: '99px' }}>
                                        <div style={{ height: '100%', width: '66%', background: '#3b82f6', boxShadow: '0 0 10px rgba(59,130,246,0.5)' }} />
                                    </div>
                                    <div style={{ marginTop: '2rem', fontSize: '0.75rem' }} className="text-blue">
                                        BREAKING NEWS: Major incident unfolding in Sector 7...
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scan Grid / Actions */}
                        <div className="glass-card" style={{ background: 'rgba(19,27,44,0.4)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 className="panel-title">Scan Grid</h3>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#475569' }} />
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#475569' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {tasks.map(task => (
                                    <div key={task.id} className="task-item">
                                        <div className="task-wrap">
                                            <div className={`icon-box ${task.color}`}>
                                                <task.icon size={20} />
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 700, color: '#dbeafe' }}>{task.label}</div>
                                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{task.sub}</div>
                                            </div>
                                        </div>
                                        <ChevronRight style={{ color: '#475569' }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Sidebar (Right Column) */}
                    <div className="main-column right">

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>TASKS</h3>
                            <ChevronRight style={{ color: '#64748b' }} />
                        </div>

                        {/* Quick Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <button className="action-btn btn-blue">
                                <Stethoscope size={18} /> DEPLOY MED TEAM
                            </button>
                            <button className="action-btn btn-purple">
                                <Building2 size={18} /> ALERT HOSPITALS
                            </button>
                            <button className="action-btn btn-amber">
                                <AlertTriangle size={18} /> EVACUATE AREA
                            </button>
                        </div>

                        {/* System Status Widget */}
                        <div className="glass-card">
                            <h3 className="panel-title">System Status</h3>
                            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Average Response Time:</p>
                            <div className="status-large">10m 42s</div>

                            <div className="status-grid">
                                <span className="text-green">+20% CRITICAL</span>
                                <span className="text-pink">-15% RESPONSE</span>
                            </div>
                        </div>

                        {/* Task Queue */}
                        <div className="glass-card" style={{ background: 'rgba(19,27,44,0.4)', flex: 1 }}>
                            <h3 className="panel-title">Task Queue</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(30,58,138,0.2)', borderLeft: '2px solid #3b82f6', borderRadius: '0 0.5rem 0.5rem 0' }}>
                                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Deploy Med Team</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sector 4 needs immediate assistance</div>
                                </div>
                                <div style={{ padding: '0.75rem', background: 'rgba(131,24,67,0.2)', borderLeft: '2px solid #ec4899', borderRadius: '0 0.5rem 0.5rem 0' }}>
                                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Alert Hospitals</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Prepare for incoming trauma patients</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>
            </div>
        </div>
    );
};

// Helper Component for Sidebar Navigation
const NavButton = ({ icon: Icon, label, active }) => (
    <button className={`nav-btn ${active ? 'active' : ''}`}>
        <Icon size={20} />
        <span>{label}</span>
    </button>
);

export default AgencyDashboard;
