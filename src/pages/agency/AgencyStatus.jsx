import React from 'react';
import {
    Activity, Shield, AlertTriangle, Flame, Truck, Users,
    Search, Filter, ChevronDown, CheckCircle, AlertOctagon,
    Server, Zap, FileText, Folder, Settings
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Assuming installed
import 'leaflet/dist/leaflet.css';
import './AgencyStatus.css';

// Fix for default Leaflet marker icons if needed (standard React-Leaflet issue)
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


const AgencyStatus = () => {
    return (
        <div className="status-layout animate-fade-in">
            {/* Header */}
            <div className="status-header-row">
                <div className="status-title">
                    <h1>STATUS</h1>
                </div>
                <div className="status-filters">
                    <button className="btn-filter-status">STORMETES</button>
                    <button className="btn-filter-status"><Search size={14} /> ALL</button>
                    <button className="btn-filter-status text-green-400 border-green-500/30 bg-green-500/10">1E SAFE</button>
                    <button className="btn-filter-status text-blue-400 border-blue-500/30 bg-blue-500/10 flex items-center gap-1">
                        <Filter size={14} /> HAZARD
                    </button>
                </div>
            </div>

            <div className="status-grid">

                {/* LEFT COLUMN */}
                <div className="status-left-col">

                    {/* SYSTEM ALERTS & OVERVIEW TOP */}
                    <div className="top-split-row">
                        <div className="sys-alerts-card">
                            <div className="sec-label mb-0">SYSTEM ALERTS</div>

                            {/* Alert 1 */}
                            <div className="alert-item-box yellow">
                                <div className="sys-icon">
                                    <AlertTriangle size={20} />
                                </div>
                                <div className="sys-info flex-1">
                                    <h4>NETWORK DEGRADATION</h4>
                                    <p>Under Stress, struggled with communication device if communication.</p>
                                </div>
                            </div>

                            {/* Alert 2 */}
                            <div className="alert-item-box orange">
                                <div className="sys-icon">
                                    <Flame size={20} />
                                </div>
                                <div className="sys-info flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4>FIRE RESOURCES IN USE</h4>
                                        <span className="badge-st-alert badge-orange">ST ALERT</span>
                                    </div>
                                    <p>Most available units engaged in firefighting response.</p>
                                </div>
                            </div>
                        </div>

                        <div className="top-overview-card">
                            <div className="sec-label mb-0">CRISIS OVERVIEW</div>

                            {/* Purple Box */}
                            <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3 flex justify-between items-center">
                                <div>
                                    <div className="text-2xl font-bold text-white">4</div>
                                    <div className="text-[10px] text-purple-300 font-bold uppercase">HAZARD CONSTIEN. CONTIES</div>
                                </div>
                                <span className="badge-st-alert badge-purple">ST ALERT</span>
                            </div>

                            {/* Util Box */}
                            <div className="flex gap-3 mt-1">
                                <div className="p-2 bg-orange-600/20 rounded text-orange-500"><Flame size={20} /></div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-300">FIRE RESOURCES IN USE</h4>
                                    <div className="text-lg font-bold text-white">88% <span className="text-xs font-normal text-gray-500">Utilized</span></div>
                                    <div className="text-[10px] text-gray-500 leading-tight">Most available units engaged in firefighting response.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CRISIS OVERVIEW MAIN */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="sec-label">CRISIS OVERVIEW</div>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                            </div>
                        </div>

                        <div className="crisis-cats-grid">
                            <div className="cat-card cat-urgent">
                                <div className="cat-bg"><AlertOctagon size={60} /></div>
                                <h4>URGENT<br />CRISES</h4>
                            </div>
                            <div className="cat-card cat-regional">
                                <div className="cat-bg"><Settings size={60} /></div>
                                <h4>REGIONAL<br />EMERGENCIES</h4>
                            </div>
                            <div className="cat-card cat-severe">
                                <div className="cat-bg"><Folder size={60} /></div>
                                <h4>SEVERE<br />HAZARDS</h4>
                            </div>
                            <div className="cat-card cat-inc">
                                <div className="cat-bg"><Users size={60} /></div>
                                <h4>INCIDENT<br />PERSONNEL</h4>
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="progress-row-status">
                            <div className="prog-item">
                                <div className="prog-label"><span>TEAM READINESS</span> <span>78%</span></div>
                                <div className="prog-track"><div className="prog-fill fill-blue" style={{ width: '78%' }}></div></div>
                            </div>
                            <div className="prog-item">
                                <div className="prog-label"><span>COMMENT STATUS</span> <span>68%</span></div>
                                <div className="prog-track"><div className="prog-fill fill-orange" style={{ width: '68%' }}></div></div>
                            </div>
                            <div className="w-24 text-right">
                                <div className="prog-label justify-end"><span>EQUIPMENT</span></div>
                                <div className="text-xs font-bold text-pink-500">INTAL 68%</div>
                            </div>
                        </div>
                    </div>

                    {/* SYSTEM LOGS */}
                    <div className="logs-card">
                        <div className="logs-header">SYSTEM LOGS</div>

                        {/* Log 1 */}
                        <div className="log-row">
                            <div className="log-main">
                                <div className="log-icon-box red"><AlertTriangle size={16} /></div>
                                <div className="log-info">
                                    <h5 className="flex items-center">Immediate Evacuation <span className="tag-crit-text">Critical</span></h5>
                                    <p>Drain monitor in mainstream below Zone</p>
                                </div>
                            </div>
                            <div>
                                <span className="log-badge badge-red">Critical</span>
                            </div>
                            <div className="log-time">
                                <div className="time-dot dot-org"></div> 2 mins ago
                            </div>
                            <div className="log-time text-gray-500">
                                1 mins ago
                            </div>
                            <div className="flex gap-2">
                                <div className="w-full h-1 bg-gray-800 rounded mt-1 overflow-hidden">
                                    <div className="h-full bg-red-900 w-1/4"></div>
                                </div>
                                <button className="btn-log-action action-recall">RE CALL</button>
                            </div>
                        </div>

                        {/* Log 2 */}
                        <div className="log-row">
                            <div className="log-main">
                                <div className="log-icon-box blue"><Flame size={16} /></div>
                                <div className="log-info">
                                    <h5>Fire Under Control</h5>
                                    <p>Firefighters containing blaze in Industrial Zone</p>
                                </div>
                            </div>
                            <div>
                                <span className="log-badge badge-yellow">TET MAONA</span>
                            </div>
                            <div className="log-time">
                                <div className="time-dot dot-blu"></div> 2 mins ago
                            </div>
                            <div className="log-time text-gray-500">
                                1 mins ago
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-16 h-1 bg-gray-800 rounded overflow-hidden">
                                    <div className="h-full bg-blue-500 w-3/4"></div>
                                </div>
                                <button className="btn-log-action action-dispatch">DISPATCH</button>
                            </div>
                        </div>

                        {/* Log 3 */}
                        <div className="log-row">
                            <div className="log-main">
                                <div className="log-icon-box blue"><CheckCircle size={16} /></div>
                                <div className="log-info">
                                    <h5>All Under in Sector 4</h5>
                                    <p>Residents allowed back into Shelter A</p>
                                </div>
                            </div>
                            <div>
                                <span className="log-badge badge-yellow">TET IMFARA</span>
                            </div>
                            <div className="log-time">
                                <div className="time-dot dot-blu"></div> 5 mins ago
                            </div>
                            <div className="log-time text-gray-500">
                                1 hours ago
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-16 h-1 bg-gray-800 rounded overflow-hidden">
                                    <div className="h-full bg-blue-500 w-full"></div>
                                </div>
                                <button className="btn-log-action action-dispatch">DISPATCH</button>
                            </div>
                        </div>

                    </div>


                </div>

                {/* RIGHT COLUMN - MAP */}
                <div className="status-right-col">
                    <div className="status-map-container">
                        <MapContainer
                            center={[19.0760, 72.8777]} // Mumbai approx
                            zoom={13}
                            style={{ width: '100%', height: '100%', background: '#0f172a' }}
                            zoomControl={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            />
                            {/* Mock Markers */}
                            <Marker position={[19.0800, 72.8800]}></Marker>
                            <Marker position={[19.0700, 72.8700]}></Marker>
                            <Marker position={[19.0750, 72.8900]}></Marker>
                        </MapContainer>

                        {/* Map Overlays */}
                        <div className="absolute top-4 right-4 z-[500] bg-black/60 backdrop-blur p-2 rounded border border-red-500/30">
                            <div className="flex items-center gap-2 text-red-400 font-bold text-xs">
                                <AlertTriangle size={14} /> LAZARED 3.97%
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AgencyStatus;
