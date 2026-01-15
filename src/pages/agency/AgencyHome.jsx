import React from 'react';
import {
    Activity, Clock, MapPin, AlertTriangle, Users,
    Zap, Siren, Building2, Flame, Heart, ArrowRight,
    TrendingUp, TrendingDown, ArrowUpRight, Monitor
} from 'lucide-react';
import './AgencyDashboard.css';

const AgencyHome = () => {
    return (
        <div className="animate-fade-in">
            {/* 1. PRIMARY FEATURED INCIDENT */}
            <div className="featured-card">
                <div className="badge-row">
                    <div className="feat-badge">
                        <Activity size={16} /> MEDICAL EMERGENCY
                    </div>
                    <div className="feat-tag">/// HIGH PRIORITY ///</div>
                </div>

                <h1 className="feat-title">CRITICAL PATIENTS IN SECTOR 7</h1>
                <p className="feat-desc">
                    Multiple casualties requiring immediate evacuation. Medical teams on standby.
                    Structural instability detected in the North Wing coordinates.
                </p>

                <div className="feat-stats">
                    <div className="feat-stat text-cyan">
                        <MapPin size={18} /> LOCATION: SECTOR 7, 1.2 KM
                    </div>
                    <div className="feat-stat text-green">
                        <Clock size={18} /> ETA: 8 MIN
                    </div>
                    <div className="feat-stat text-red">
                        <AlertTriangle size={18} /> THREAT: LEVEL 4 HAZARD
                    </div>
                    <div className="feat-stat text-orange">
                        <Users size={18} /> CASUALTIES: 23
                    </div>
                </div>
            </div>

            {/* 2. MAIN GRID LAYOUT */}
            <div className="main-grid">

                {/* --- LEFT COLUMN (60%) --- */}
                <div className="grid-left">

                    {/* A. Incident Summary */}
                    <div className="cmd-card">
                        <div className="card-header">
                            <span className="flex items-center gap-2">
                                <Heart size={18} className="text-red-500" /> INCIDENT SUMMARY
                            </span>
                            <span className="text-xs text-gray-500">ID: #8821X</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <div className="text-xs text-gray-400 mb-1">AI SEVERITY SCORE</div>
                                <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[88%]"></div>
                                </div>
                                <div className="text-xs text-green-400 font-bold mt-1 text-right w-48">88%</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-gray-400">COMMANDER</div>
                                <div className="font-bold">User123</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-white/5 rounded border border-white/5 flex items-center gap-3">
                                <AlertTriangle className="text-orange" size={20} />
                                <div>
                                    <div className="text-xs text-gray-400">Environment</div>
                                    <div className="font-bold text-sm">High • Collapse</div>
                                </div>
                            </div>
                            <div className="p-3 bg-white/5 rounded border border-white/5 flex items-center gap-3">
                                <Users className="text-red" size={20} />
                                <div>
                                    <div className="text-xs text-gray-400">Impact</div>
                                    <div className="font-bold text-sm">23 Injured</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* B. Live Feed */}
                    <div className="cmd-card p-0 overflow-hidden relative group">
                        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-start">
                            <div className="font-bold flex items-center gap-2">
                                <Monitor size={16} className="text-cyan" /> LIVE FEED
                            </div>
                            <div className="bg-red-600/80 text-white text-[10px] px-2 py-0.5 rounded animate-pulse">LIVE</div>
                        </div>

                        {/* Map Placeholder Graphic */}
                        <div className="h-64 bg-gray-900 relative">
                            {/* Grid */}
                            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,240,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                            {/* Mock Routes */}
                            <div className="absolute top-1/2 left-1/4 w-32 h-[2px] bg-cyan-500 rotate-12 shadow-[0_0_10px_#06b6d4]"></div>
                            <div className="absolute top-1/2 right-1/4 w-24 h-[2px] bg-cyan-500 -rotate-12 shadow-[0_0_10px_#06b6d4]"></div>

                            {/* Center Pulse */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute"></div>
                                <div className="w-4 h-4 bg-red-500 rounded-full relative z-10 border-2 border-white"></div>
                            </div>

                            {/* Labels */}
                            <div className="absolute bottom-12 left-4 text-xs font-mono text-cyan-400">
                                🚗 10 TEAMS EN ROUTE<br />ETA: 4 MIN
                            </div>
                        </div>

                        <div className="bg-black/60 p-2 text-xs text-white border-t border-white/10 flex items-center gap-2">
                            <span className="text-red-500 font-bold">BREAKING NEWS</span>
                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                            <span className="truncate">Major incident unfolding in Sector 7, evacuations in progress...</span>
                        </div>
                    </div>

                    {/* C. All Incidents List */}
                    <div className="cmd-card">
                        <div className="card-header">
                            ALL INCIDENTS
                            <div className="flex gap-2">
                                <button className="filter-btn active">All</button>
                                <button className="filter-btn">Critical</button>
                                <button className="filter-btn">High</button>
                            </div>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            <IncidentItem
                                icon={Activity} color="red" badge="CRITICAL"
                                title="Medical Emergency" desc="Critical patients in sector 7"
                                loc="SECTOR 7 • 1.2KM" status="ACTIVE"
                            />
                            <IncidentItem
                                icon={Flame} color="orange" badge="HIGH"
                                title="Fire Hazard" desc="Containment fire in industrial zone"
                                loc="SECTOR 3 • 3.5KM" status="EN ROUTE" action="VIEW"
                            />
                            <IncidentItem
                                icon={Building2} color="red" badge="CRITICAL"
                                title="Structural Collapse" desc="Building structural failure reported"
                                loc="SECTOR 7 • 1.3 KM" status="ACTIVE"
                            />
                            <IncidentItem
                                icon={AlertTriangle} color="orange" badge="HIGH"
                                title="Hazmat Situation" desc="Chemical spill in factory district"
                                loc="SECTOR 5 • 4.2 KM" status="ASSIGNED" action="MONITOR"
                            />
                            <IncidentItem
                                icon={Users} color="yellow" badge="MEDIUM"
                                title="Civil Unrest" desc="Crowd control needed at public square"
                                loc="SECTOR 2 • 2.8 KM" status="ACTIVE"
                            />
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN (40%) --- */}
                <div className="grid-right">

                    {/* A. Quick Actions */}
                    <div className="cmd-card">
                        <div className="card-header">
                            <Zap size={18} className="text-yellow-400 mr-2" /> QUICK ACTIONS
                        </div>
                        <button className="quick-action-btn btn-med">
                            <Activity size={20} className="text-blue-400" />
                            DEPLOY MED TEAM
                            <ArrowRight size={16} className="ml-auto opacity-50" />
                        </button>
                        <button className="quick-action-btn btn-hosp">
                            <Building2 size={20} className="text-purple-400" />
                            ALERT HOSPITALS
                            <ArrowRight size={16} className="ml-auto opacity-50" />
                        </button>
                        <button className="quick-action-btn btn-evac">
                            <Users size={20} className="text-orange-400" />
                            EVACUATE AREA
                            <ArrowRight size={16} className="ml-auto opacity-50" />
                        </button>
                    </div>

                    {/* B. System Status */}
                    <div className="cmd-card">
                        <div className="card-header">
                            📊 SYSTEM STATUS
                        </div>
                        <div className="text-sm text-gray-500 mb-1">Average Response Time</div>
                        <div className="text-4xl font-mono font-bold text-cyan mb-4 glow-text-cyan">10m 42s</div>

                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-red-400 flex items-center gap-1 font-bold"><TrendingUp size={14} /> +20%</span>
                                <span className="text-gray-400">CRITICAL ERRORS</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-green-400 flex items-center gap-1 font-bold"><TrendingDown size={14} /> -15%</span>
                                <span className="text-gray-400">RESPONSE TIME</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <a href="#" className="text-sm text-cyan-400 hover:text-white transition">View Analytics →</a>
                        </div>
                    </div>

                    {/* C. Task Queue */}
                    <div className="cmd-card flex-1">
                        <div className="card-header">
                            📋 TASK QUEUE
                        </div>
                        <div className="space-y-2">
                            <TaskItem
                                title="Deploy Med Team" desc="Send medical teams to the incident site"
                                team="Team Alpha" status="EN ROUTE" statusColor="route"
                                icon={Activity} color="text-blue-400"
                            />
                            <TaskItem
                                title="Alert Hospitals" desc="Notify local hospitals to prepare..."
                                team="Pending" status="PENDING" statusColor="pending"
                                icon={Building2} color="text-purple-400" time="2m ago"
                            />
                            <TaskItem
                                title="Evacuate Area" desc="Coordinate and assist in evacuating..."
                                team="Team Bravo" status="IN PROGRESS" statusColor="active"
                                icon={Users} color="text-orange-400"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

/* Sub-components */
const IncidentItem = ({ icon: Icon, color, badge, title, desc, loc, status, action = "ASSIGN TEAM" }) => {
    // Dynamic styles based on inputs
    const badgeColor = badge === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : badge === 'HIGH' ? 'bg-orange-500/20 text-orange-400' : 'bg-yellow-500/20 text-yellow-400';

    return (
        <div className="incident-card group">
            <div className="flex gap-4 items-center flex-1">
                <div className={`p-2 rounded bg-opacity-10 bg-${color}-500 text-${color}-500 border border-${color}-500/20`}>
                    <Icon size={20} />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${badgeColor}`}>{badge}</span>
                        <h4 className="font-bold text-white text-sm">{title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 truncate w-48">{desc}</p>
                    <div className="text-[10px] text-gray-500 mt-1 flex gap-2 font-mono uppercase">
                        <span>{loc}</span>
                        <span className="text-cyan-600">STATUS: {status}</span>
                    </div>
                </div>
            </div>
            <button className="text-[10px] font-bold border border-cyan-500/50 text-cyan-400 px-2 py-1 rounded hover:bg-cyan-500 hover:text-black transition">
                {action}
            </button>
        </div>
    );
};

const TaskItem = ({ icon: Icon, color, title, desc, team, status, statusColor, time }) => (
    <div className="queue-item flex gap-3">
        <div className={`mt-1 ${color}`}>
            <Icon size={16} />
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold text-white">{title}</h4>
                {time && <span className="text-[10px] text-gray-500">{time}</span>}
            </div>
            <p className="text-xs text-gray-400 mb-1 line-clamp-1">{desc}</p>
            <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500"> Assigned: {team}</span>
                <span className={`status-badge status-${statusColor}`}>{status}</span>
            </div>
        </div>
    </div>
);

export default AgencyHome;
