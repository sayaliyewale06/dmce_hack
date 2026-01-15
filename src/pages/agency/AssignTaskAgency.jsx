import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ChevronLeft, Search, PlusCircle, Check, MapPin, Clock,
    LayoutDashboard, Users, Radio, Bell, ArrowUp, Zap, HelpCircle
} from 'lucide-react';
import './AssignTaskAgency.css';

const AssignTaskAgency = () => {
    const navigate = useNavigate();
    const [selectedMembers, setSelectedMembers] = useState([1, 2, 3, 4, 5, 6, 7, 8]); // All pre-selected Mock

    const teamMembers = [
        { id: 1, name: 'Marcus', role: 'Paramedic' },
        { id: 2, name: 'Emma', role: 'Emergency Nurse' },
        { id: 3, name: 'Ethan', role: 'Field Medic' },
        { id: 4, name: 'Lt. Lisa Cho', role: 'Squad Leader' },
        { id: 5, name: 'Dr. Jason', role: 'Doctor' },
        { id: 6, name: 'Tyler', role: 'Firemedic' },
        { id: 7, name: 'Hazel', role: 'Paramedic' },
        { id: 8, name: 'Sarah', role: 'Logistics' },
    ];

    const toggleMember = (id) => {
        if (selectedMembers.includes(id)) {
            setSelectedMembers(selectedMembers.filter(m => m !== id));
        } else {
            setSelectedMembers([...selectedMembers, id]);
        }
    };

    return (
        <div className="assign-task-container">
            {/* Top Header */}
            <header className="assign-header">
                <div className="assign-brand">
                    <Radio className="text-blue-500" /> CRISIS COMMAND
                </div>

                <div className="assign-metrics hidden md:flex">
                    <div className="metric-box">
                        <span className="metric-val-lg">12</span>
                        <span>ACTIVE MISSIONS</span>
                    </div>
                    <div className="metric-box">
                        <span className="metric-val-lg text-green-400 flex items-center gap-1">324 <ArrowUp size={12} /></span>
                        <span>EVACUATED</span>
                    </div>
                    <div className="metric-box">
                        <span className="metric-val-lg text-pink-500 flex items-center gap-1">98% <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" /></span>
                        <span>SYSTEM STATUS</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <div className="text-white font-bold text-sm">Commander</div>
                        <div className="text-xs text-blue-400 font-mono">CRISIS LEVEL: ALPHA</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold border-2 border-blue-400">C</div>
                    <button className="relative p-2 text-gray-400 hover:text-white">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
                    </button>
                </div>
            </header>

            <div className="assign-grid">
                {/* Left Sidebar (Focus Mode) */}
                <nav className="focus-sidebar">
                    <button className="back-btn-lg" onClick={() => navigate('/dashboard/agency/tasks')}>
                        <ChevronLeft size={18} /> BACK
                    </button>

                    <div className="flex flex-col gap-2">
                        <div className="focus-nav-item">
                            <LayoutDashboard size={20} /> Dashboard
                        </div>
                        <div className="focus-nav-item active">
                            <Users size={20} /> View Incidents
                        </div>
                    </div>
                </nav>

                {/* Center Content */}
                <main className="center-panel">
                    <div className="page-title-sec">
                        <h2>ASSIGN TASK</h2>
                        <div className="page-sub">Monitoring real-time crisis incidents and response status.</div>
                    </div>

                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-3.5 text-gray-500" size={18} />
                        <input type="text" placeholder="Search incidents..." className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-12 text-white focus:outline-none focus:border-blue-500" />
                    </div>

                    {/* Incident Card */}
                    <div className="incident-detail-card">
                        <div className="incident-header">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-500 border border-pink-500/30">
                                    <PlusCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">MEDICAL EMERGENCY</h3>
                                    <div className="text-gray-400">Critical Patients in Sector 7</div>
                                </div>
                            </div>
                            <div className="incident-badge"><Zap size={12} fill="currentColor" /> CRITICAL</div>
                        </div>

                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            Multiple casualties requiring immediate evacuation. Medical teams en route. Air support requested for localized extraction.
                        </p>

                        <div className="incident-loc-row">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <MapPin size={16} className="text-blue-400" /> SECTOR 7
                            </div>
                            <span className="text-gray-500 text-sm">1.2 km away</span>

                            <div className="deploy-bar-lg">
                                <div className="deploy-fill-lg"></div>
                            </div>
                            <span className="text-xs font-mono text-blue-400">8/14 TEAMS DEPLOYED</span>
                        </div>
                    </div>

                    {/* 3D Map Visualization */}
                    <div className="holo-map-main">
                        <div className="map-grid-plane"></div>

                        {/* Incident Marker */}
                        <div className="incident-marker-lg"></div>
                        <div className="map-label">ETA: 4 MIN</div>

                        {/* Connection Lines (CSS Art) */}
                        <div style={{ position: 'absolute', top: '42%', left: '42%', width: '150px', height: '2px', background: 'linear-gradient(90deg, #ec4899, transparent)', transform: 'rotate(25deg)', transformOrigin: 'left' }}></div>

                        {/* Floating Distance Text */}
                        <div className="absolute bottom-6 left-6 flex gap-6 text-sm font-bold font-mono">
                            <span className="text-blue-400 bg-slate-900/80 px-2 py-1 rounded border border-blue-500/30">1.2 KM AWAY</span>
                            <span className="text-pink-400 bg-slate-900/80 px-2 py-1 rounded border border-pink-500/30">ETA: 4 MIN</span>
                        </div>

                        {/* Bottom Left Team Card Overlay */}
                        <div className="selected-team-overlay">
                            <div className="team-avatar-lg text-white">A</div>
                            <div>
                                <div className="text-white font-bold flex items-center gap-2">Alpha Team III <span className="text-xs bg-gray-700 px-1 rounded text-gray-300">LEVEL II</span></div>
                                <div className="text-xs text-gray-400 mb-1">MEDICAL - SECTOR 7</div>
                                <div className="text-xs text-blue-400 flex items-center gap-4">
                                    <span>ETA: 4 MIN</span>
                                    <span className="flex items-center gap-1"><MapPin size={10} /> 1.2 km</span>
                                </div>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm ml-auto shadow-lg shadow-blue-600/20">
                                ASSIGN
                            </button>
                        </div>
                    </div>
                </main>

                {/* Right Panel: Team Selection */}
                <aside className="team-select-panel">
                    <div className="panel-header">
                        <span>SELECT RESPONSE TEAM</span>
                        <MoreHorizontal size={20} />
                    </div>

                    <div className="team-group-card h-full">
                        <div className="team-header-row">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-pink-600 flex items-center justify-center font-bold text-white">A</div>
                                <div className="leading-tight">
                                    <div className="text-white font-bold">Alpha Team III</div>
                                    <div className="text-xs text-pink-300/70">MEDICAL - SECTOR 7</div>
                                </div>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                <Check size={14} color="white" />
                            </div>
                        </div>

                        <div className="member-list pr-2 custom-scrollbar">
                            {teamMembers.map(member => (
                                <div
                                    key={member.id}
                                    className={`member-item ${selectedMembers.includes(member.id) ? 'selected' : ''}`}
                                    onClick={() => toggleMember(member.id)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden border border-slate-600">
                                            {/* Avatar Placeholder */}
                                            <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800"></div>
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-semibold">{member.name}</div>
                                            <div className="text-xs text-gray-500">{member.role}</div>
                                        </div>
                                    </div>
                                    <div className="member-check">
                                        {selectedMembers.includes(member.id) && <Check size={12} />}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="assign-actions">
                            <button className="btn-cancel" onClick={() => navigate('/dashboard/agency/tasks')}>CANCEL</button>
                            <button className="btn-confirm" onClick={() => navigate('/dashboard/agency/tasks')}>
                                CONFIRM ASSIGNMENT &gt;
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

const MoreHorizontal = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
    </svg>
);

export default AssignTaskAgency;
