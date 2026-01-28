import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, Map, CheckSquare, Box,
    Bell, Menu, Shield, User, BarChart2, ChevronLeft, LogOut
} from 'lucide-react';
import './VolunteerDashboard.css';

const VolunteerLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { path: '/volunteer/tasks', label: 'Assigned Task', icon: CheckSquare },
        { path: '/volunteer/dashboard', label: 'Task Action', icon: LayoutDashboard },
        { path: '/volunteer/map', label: 'Live Map', icon: Map },
        { path: '/volunteer/resources', label: 'Resource View', icon: Box },
        { path: '/volunteer/notifications', label: 'Alerts', icon: Bell },
        { path: '/volunteer/performance', label: 'Performance', icon: BarChart2 },
        { path: '/volunteer/profile', label: 'Profile', icon: User },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="vol-container relative">
            {/* Sidebar Overlay for Mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}



            {/* Sidebar */}
            <aside className={`vol-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="vol-logo-box">
                    <Shield className="text-cyan-400" size={24} />
                    <span className="vol-logo-text">CRISIS COMMAND</span>
                </div>

                <div className="mt-4">
                </div>

                <nav className="vol-nav">
                    {navItems.map((item) => (
                        <div
                            key={item.path}
                            className={`vol-nav-item ${isActive(item.path) ? 'active' : ''}`}
                            onClick={() => {
                                navigate(item.path);
                                setSidebarOpen(false);
                            }}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </div>
                    ))}
                </nav>

                <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <button
                        onClick={() => {
                            localStorage.clear();
                            sessionStorage.clear();
                            navigate('/');
                        }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            background: 'transparent', border: 'none',
                            color: '#ef4444', fontSize: '0.9rem', fontWeight: '600',
                            cursor: 'pointer', width: '100%', padding: '0.85rem 1rem',
                            transition: 'all 0.2s', borderRadius: '0.5rem'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>

                <div className="vol-sidebar-stats">
                    <div className="vol-stat-row">
                        <span>Active Tasks</span>
                        <span className="vol-stat-val text-cyan-400">4</span>
                    </div>
                    <div className="vol-stat-row">
                        <span>Completed</span>
                        <span className="vol-stat-val text-green-400">28</span>
                    </div>
                    <div className="vol-stat-row">
                        <span>Distance</span>
                        <span className="vol-stat-val text-orange-400">17.4 km</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="vol-main">
                {/* Header */}
                <header className="vol-header">
                    <div className="flex items-center gap-4">
                    </div>

                    <div className="vol-header-right">
                        <div className="sys-status hidden md:block">
                            <span className="sys-label">SYSTEM STATUS</span>
                            <span className="sys-val">98% OPERATIONAL</span>
                        </div>

                        <div className="relative cursor-pointer" onClick={() => navigate('/volunteer/notifications')}>
                            <Bell size={20} className="text-gray-400 hover:text-white transition" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </div>

                        <div className="vol-profile cursor-pointer">
                            <div className="text-right hidden md:block">
                                <div className="text-sm font-bold text-white">Luke</div>
                                <div className="text-xs text-cyan-400">Volunteer Alpha</div>
                            </div>
                            <div className="vol-avatar">
                                <User size={20} className="text-white" />
                            </div>
                        </div>
                    </div>
                </header>

                <Outlet />
            </main>
        </div>
    );
};

export default VolunteerLayout;
