import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, Map, FileText, CheckSquare, Box,
    Activity, BarChart2, Bell, LogOut, Menu, Shield
} from 'lucide-react';
import './AgencyDashboard.css';

const AgencyLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (path) => {
        // Simple exact match or subpath match
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    const navItems = [
        { path: '/dashboard/agency/home', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/dashboard/agency/map', label: 'Crisis Map', icon: Map },
        { path: '/dashboard/agency/incidents', label: 'View Incidents', icon: FileText },
        { path: '/dashboard/agency/assign', label: 'Assign Task', icon: CheckSquare },
        { path: '/dashboard/agency/resources', label: 'Resources', icon: Box },
        { path: '/dashboard/agency/status', label: 'Status', icon: Activity },
        { path: '/dashboard/agency/analytics', label: 'Analytics', icon: BarChart2 },
        { path: '/dashboard/agency/alerts', label: 'Alert', icon: Bell },
    ];

    return (
        <div className="agency-container">
            {/* Sidebar Overlay for Mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`agency-sidebar ${sidebarOpen ? 'w-[240px]' : 'w-0 lg:w-[240px]'}`}>
                <div className="brand-box">
                    <Shield className="text-cyan-400" size={24} />
                    <span className="brand-text">CRISIS COMMAND</span>
                </div>

                <nav className="nav-menu">
                    {navItems.map((item) => (
                        <div
                            key={item.path}
                            className={`nav-item cursor-pointer ${isActive(item.path) ? 'active' : ''}`}
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

                <button
                    className="logout-btn"
                    onClick={() => navigate('/')}
                >
                    <LogOut size={18} /> Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="agency-main">
                {/* Header */}
                <header className="agency-header">
                    <button
                        className="text-gray-400 lg:hidden mr-auto"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="sys-status">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        98% OPERATIONAL
                    </div>

                    <div className="relative cursor-pointer">
                        <Bell size={20} className="text-gray-400 hover:text-white transition" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold text-white">5</span>
                    </div>

                    <div className="header-profile">
                        <div className="text-right hidden md:block">
                            <div className="text-sm font-bold text-white">Commander</div>
                            <div className="text-[10px] text-cyan-400 uppercase tracking-wider font-bold">Crisis Level: Alpha</div>
                        </div>
                        <div className="profile-avatar">C</div>
                    </div>
                </header>

                <div className="dashboard-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AgencyLayout;
