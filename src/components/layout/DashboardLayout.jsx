import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Map, Users, BarChart2, ShieldAlert, Bell, LogOut, ChevronRight } from 'lucide-react';
import '../../styles/dashboard.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-icon" style={{ background: '#3b82f6', padding: '8px', borderRadius: '8px', marginRight: '10px' }}>
                        <ShieldAlert color="white" size={24} />
                    </div>
                    <h2>Crisis Command</h2>
                </div>

                <div style={{ padding: '0 1.5rem', marginBottom: '1rem' }}>
                    <button style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        width: '100%',
                        padding: '10px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                    }}>
                        <ChevronRight size={16} /> Back to Dashboard
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <NavLink to="/dashboard/community" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/dashboard/map" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Map size={20} />
                        <span>Crisis Map</span>
                    </NavLink>
                    <NavLink to="/dashboard/teams" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Users size={20} />
                        <span>Response Teams</span>
                    </NavLink>
                    <NavLink to="/dashboard/incidents" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <ShieldAlert size={20} />
                        <span>Incident Reports</span>
                    </NavLink>
                    <NavLink to="/dashboard/volunteer" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <LayoutDashboard size={20} />
                        <span>Volunteer Tasks</span>
                    </NavLink>
                    <NavLink to="/dashboard/analytics" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <BarChart2 size={20} />
                        <span>Analytics</span>
                    </NavLink>
                </nav>

                {/* Stats in Sidebar Bottom */}
                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Active Missions</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>12</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Evacuated</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>324</div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Top Header */}
                <header className="dashboard-header">
                    <div className="header-actions">
                        <div style={{ marginRight: '20px', textAlign: 'right' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>SYSTEM STATUS</div>
                            <div style={{ color: '#4ade80', fontWeight: 'bold' }}>98% OPERATIONAL</div>
                        </div>

                        <button style={{ background: 'none', border: 'none', color: 'white', position: 'relative', cursor: 'pointer', marginRight: '20px' }}>
                            <Bell size={24} />
                            <span style={{
                                position: 'absolute', top: -5, right: -5,
                                background: 'var(--neon-red)', borderRadius: '50%',
                                width: '18px', height: '18px', fontSize: '10px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>5</span>
                        </button>

                        <div className="user-profile-pill">
                            <div style={{ width: '32px', height: '32px', background: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>C</div>
                            <div className="user-text">
                                <span className="user-name">Commander</span>
                                <span className="user-rank">Crisis Level: Alpha</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="page-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
