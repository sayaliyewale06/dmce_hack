import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Map, Users, BarChart2, ShieldAlert, Bell, LogOut, ChevronRight, AlertTriangle, User } from 'lucide-react';
import '../../styles/dashboard.css';

const DashboardLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear auth tokens/session
        localStorage.clear();
        sessionStorage.clear();
        navigate('/');
    };

    return (
        <div className="dashboard-container" style={{ display: 'flex', minHeight: '100vh', background: '#0f1419', fontFamily: "'Rajdhani', sans-serif" }}>
            {/* Sidebar */}
            <aside className="sidebar" style={{ width: '260px', background: 'rgba(15, 20, 25, 0.95)', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', zIndex: 100, backdropFilter: 'blur(10px)' }}>
                <div className="sidebar-header" style={{ height: '70px', display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <ShieldAlert className="text-cyan-400" size={24} style={{ color: '#00f0ff' }} />
                    <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '1.25rem', fontWeight: '700', color: '#fff', letterSpacing: '1px' }}>CRISIS COMMAND</span>
                </div>

                <nav className="sidebar-nav" style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                        { to: "/dashboard/community", icon: LayoutDashboard, label: "Dashboard" },
                        { to: "/dashboard/map", icon: Map, label: "Crisis Map" },
                        { to: "/dashboard/teams", icon: Users, label: "Response Teams" },
                        { to: "/dashboard/incidents", icon: ShieldAlert, label: "Incident Reports" },
                        { to: "/dashboard/community/report", icon: AlertTriangle, label: "Report Incident" },
                        { to: "/dashboard/analytics", icon: BarChart2, label: "Analytics" },
                        { to: "/dashboard/profile", icon: User, label: "Profile" }
                    ].map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            style={({ isActive }) => ({
                                display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1rem',
                                color: isActive ? '#00f0ff' : '#94a3b8',
                                background: isActive ? 'linear-gradient(90deg, rgba(0, 240, 255, 0.1), transparent)' : 'transparent',
                                borderLeft: isActive ? '3px solid #00f0ff' : '3px solid transparent',
                                borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600', transition: 'all 0.2s'
                            })}
                        >
                            <item.icon size={18} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Logout Button */}
                <div style={{ padding: '1.5rem' }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                            background: 'transparent', border: 'none',
                            color: '#ef4444', fontSize: '1rem', fontWeight: '600',
                            cursor: 'pointer', opacity: 0.8, transition: '0.2s'
                        }}
                    >
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content" style={{ flex: 1, marginLeft: '260px', display: 'flex', flexDirection: 'column' }}>
                {/* Top Header */}
                <header className="dashboard-header" style={{
                    height: '70px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
                    padding: '0 2rem', background: 'rgba(15, 20, 25, 0.8)', backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 90, gap: '2rem'
                }}>

                    {/* File/List Icon - Placeholder for consistency with Agency image */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                        <AlertTriangle size={18} color="white" />
                    </div>

                    <div style={{ fontFamily: "'Share Tech Mono', monospace", color: '#00ff88', fontWeight: '700', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff88', display: 'inline-block' }}></span>
                        98% OPERATIONAL
                    </div>

                    <button style={{ background: 'none', border: 'none', color: '#94a3b8', position: 'relative', cursor: 'pointer' }}>
                        <Bell size={20} />
                        <span style={{
                            position: 'absolute', top: -2, right: -2,
                            background: '#ef4444', borderRadius: '50%',
                            width: '14px', height: '14px', fontSize: '9px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'
                        }}>5</span>
                    </button>

                    <div className="user-profile-pill" style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'white' }}>Commander</div>
                            <div style={{ fontSize: '0.65rem', color: '#00f0ff', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.5px' }}>Crisis Level: Alpha</div>
                        </div>
                        <div style={{
                            width: '36px', height: '36px', background: 'linear-gradient(135deg, #00f0ff, #2563eb)',
                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 'bold', color: 'white', fontSize: '1.1rem'
                        }}>C</div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="page-content" style={{ padding: '2rem' }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
