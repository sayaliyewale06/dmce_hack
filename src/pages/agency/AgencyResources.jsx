import React, { useState } from 'react';
import {
    Package, Activity, Users, Truck, Search, Filter,
    Truck as TruckIcon, User, Box, Shield, Zap
} from 'lucide-react';
import './AgencyResources.css';

const AgencyResources = () => {
    const [activeTab, setActiveTab] = useState('MED PLATFORMS');
    const [filter, setFilter] = useState('ALL');

    return (
        <div className="agency-resources-layout animate-fade-in">
            {/* Header */}
            <div className="res-header-row">
                <div className="res-title">
                    <h1>RESOURCES</h1>
                </div>
                <div className="res-actions">
                    <button className={`filter-group-btn ${filter === 'ALL' ? 'active' : ''}`} onClick={() => setFilter('ALL')}>ALL</button>
                    <button className={`filter-group-btn ${filter === 'AVAILABLE' ? 'active' : ''}`} onClick={() => setFilter('AVAILABLE')}>AVAILABLE</button>
                    <button className={`filter-group-btn ${filter === 'ACTIVE' ? 'active' : ''}`} onClick={() => setFilter('ACTIVE')}>ACTIVE</button>
                    <button className="filter-icon-btn"><Filter size={16} /></button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="res-stats-grid">
                <StatCard
                    label="MED PLATFORMS" value="62"
                    icon={Truck} color="pink"
                />
                <StatCard
                    label="HAZMAT UNITS" value="48"
                    icon={Activity} color="orange"
                />
                <StatCard
                    label="AVAILABLE OPERATIVES" value="114"
                    icon={Users} color="blue"
                />
                <StatCard
                    label="SUPPLY PACKS" value="220"
                    icon={Package} color="purple"
                />
            </div>

            {/* Toolbar: Tabs & Search */}
            <div className="res-toolbar">
                <div className="res-tabs">
                    <button className={`res-tab ${activeTab === 'MED PLATFORMS' ? 'active' : ''}`} onClick={() => setActiveTab('MED PLATFORMS')}>MED PLATFORMS</button>
                    <button className={`res-tab ${activeTab === 'HAZMAT UNITS' ? 'active' : ''}`} onClick={() => setActiveTab('HAZMAT UNITS')}>HAZMAT UNITS</button>
                    <button className={`res-tab ${activeTab === 'RESPONSE TEAMS' ? 'active' : ''}`} onClick={() => setActiveTab('RESPONSE TEAMS')}>RESPONSE TEAMS</button>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-white text-xs font-bold bg-transparent border border-gray-600 px-3 py-1 rounded hover:bg-white/5">ALL</button>
                    <button className="text-pink-500 text-xs font-bold bg-pink-500/10 border border-pink-500/40 px-3 py-1 rounded flex items-center gap-2 hover:bg-pink-500/20">
                        <Zap size={12} /> UPGRADE
                    </button>
                    <div className="res-search">
                        <Search className="search-ico" size={16} />
                        <input type="text" placeholder="Search resource..." />
                    </div>
                </div>
            </div>

            {/* Main Table */}
            <div className="res-table-card">
                <div className="table-header">
                    <span>TYPE</span>
                    <span>LOCATION</span>
                    <span>STATUS</span>
                    <span>ETA</span>
                    <span className="text-right">ACTION</span>
                </div>

                <div className="res-list custom-scrollbar">
                    <ResourceRow
                        icon={TruckIcon} iconColor="pink"
                        name="AMBULANCE 3" sub="Hazard Zone 7"
                        location="Hazard Zone 7"
                        status="DEPLOYED" eta="5 min"
                        action="RECALL"
                    />
                    <ResourceRow
                        icon={Shield} iconColor="blue"
                        name="MEDIC CHOPPER 6" sub="Residential"
                        location="Residential"
                        status="AVAILABLE" eta="8 min"
                        action="DISPATCH"
                    />
                    <ResourceRow
                        icon={TruckIcon} iconColor="pink"
                        name="AMBULANCE 12" sub="Shelter 5"
                        location="Shelter 5"
                        status="DEPLOYED" eta="10 min"
                        action="RECALL"
                    />
                    <ResourceRow
                        icon={TruckIcon} iconColor="blue"
                        name="MED RESPONSE VAN 2" sub="Industrial Zone"
                        location="Industrial Zone"
                        status="ACTIVE" percentage={67} eta="17 min"
                        action="RECALL"
                    />
                    <ResourceRow
                        icon={Box} iconColor="pink"
                        name="MED DROIDS 4" sub="Industrial Zone"
                        location="Industrial Zone"
                        status="DEPLOYING" percentage={43} eta="23 min"
                        action="RECALL"
                    />
                    <ResourceRow
                        icon={Shield} iconColor="blue"
                        name="MEDIC CHOPPER 1" sub="Sector B"
                        location="Sector B"
                        status="AVAILABLE" percentage={89} eta="31 min"
                        action="DISPATCH"
                    />
                    <ResourceRow
                        icon={TruckIcon} iconColor="pink"
                        name="AMBULANCE 12" sub="Shelter 5"
                        location="Shelter 5"
                        status="DEPLOYED" percentage={89} eta="31 min"
                        action="DISPATCH"
                    />
                </div>

                <div className="res-footer">
                    <div className="text-xs text-gray-500 font-bold tracking-wider">SHOWING 6 ENTRIES</div>
                    <div className="pagination">
                        <button className="page-btn active">1</button>
                        <button className="page-btn">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">4</button>
                        <div className="text-gray-600 px-2 flex items-center">..</div>
                        <button className="page-btn">4</button>
                        <button className="page-btn">4</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value, icon: Icon, color }) => (
    <div className={`res-stat-card ${color}`}>
        <div className="stat-icon-wrapper">
            <Icon size={24} />
        </div>
        <div>
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{label}</div>
        </div>
    </div>
);

const ResourceRow = ({ icon: Icon, iconColor, name, sub, location, status, percentage, eta, action }) => {
    // Determine status rendering
    let statusContent;

    if (status === 'DEPLOYED') {
        statusContent = <span className="status-badge badge-deployed">{status}</span>;
    } else if (status === 'AVAILABLE') {
        statusContent = <span className="status-badge badge-available">{status}</span>;
    } else if (status === 'ACTIVE') {
        statusContent = (
            <div className="status-active-group">
                <span className="status-text text-cyan-400">{status}</span>
                <div className="progress-bar-sm"><div className="progress-fill-sm bg-cyan-400" style={{ width: `${percentage}%` }}></div></div>
                <span className="text-xs text-cyan-400 font-mono">{percentage}%</span>
            </div>
        );
    } else if (status === 'DEPLOYING') {
        statusContent = (
            <div className="status-active-group">
                <span className="status-text text-red-400">{status}</span>
                <div className="progress-bar-sm"><div className="progress-fill-sm bg-red-400" style={{ width: `${percentage}%` }}></div></div>
                <span className="text-xs text-gray-400 font-mono">{percentage}%</span>
            </div>
        );
    }

    const iconBg = iconColor === 'pink' ? 'bg-pink-500/20 text-pink-500' : 'bg-blue-500/20 text-blue-500';

    return (
        <div className="res-row cursor-pointer">
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded flex items-center justify-center ${iconBg}`}>
                    <Icon size={20} />
                </div>
                <div>
                    <div className="text-sm font-bold text-white">{name}</div>
                    <div className="text-xs text-gray-500">{sub}</div>
                </div>
            </div>

            <div className="text-sm text-gray-400">{location}</div>

            <div>{statusContent}</div>

            <div className="text-sm text-gray-300 font-mono">{eta}</div>

            <div className="text-right">
                <button className={`btn-action ${action === 'RECALL' ? 'btn-recall' : 'btn-dispatch'}`}>
                    {action}
                </button>
            </div>
        </div>
    );
};

export default AgencyResources;
