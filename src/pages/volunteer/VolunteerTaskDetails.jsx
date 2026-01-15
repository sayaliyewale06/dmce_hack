import React from 'react';
import {
    X, MapPin, Clock, Shield, AlertTriangle,
    CheckCircle, Navigation, Phone, FileText
} from 'lucide-react';
import './VolunteerDashboard.css';

const VolunteerTaskDetails = ({ task, onClose, onAccept }) => {
    if (!task) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className={`vol-modal-card w-full max-w-2xl bg-[#050b14] border border-${task.priority === 'high' ? 'red-500' : 'cyan-500'} rounded-xl overflow-hidden shadow-2xl`}>

                {/* Header */}
                <div className={`p-6 border-b border-gray-800 ${task.priority === 'high' ? 'bg-red-500/10' : 'bg-cyan-500/10'}`}>
                    <div className="flex justify-between items-start">
                        <div>
                            <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${task.priority === 'high' ? 'text-red-500' : 'text-cyan-400'}`}>
                                {task.priority} PRIORITY MISSION
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-1 font-['Share_Tech_Mono']">{task.title}</h2>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <MapPin size={14} /> {task.location} • {task.distance} Away
                            </div>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Left Col: Details */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-widest font-bold block mb-2">Situation Report</label>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {task.desc} Reports indicate structural instability.
                                Immediate assistance required for civilian extraction and first aid support.
                            </p>
                        </div>

                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-widest font-bold block mb-2">Mission Parameters</label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                    <Clock size={16} className="text-cyan-400 mb-1" />
                                    <div className="text-xs text-gray-500">Est. Duration</div>
                                    <div className="font-bold text-white">45 Mins</div>
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                    <Shield size={16} className="text-orange-400 mb-1" />
                                    <div className="text-xs text-gray-500">Hazard Level</div>
                                    <div className="font-bold text-white">Moderate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Tactical Info */}
                    <div className="space-y-4">
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                            <h4 className="text-blue-400 font-bold text-sm mb-3 flex items-center gap-2">
                                <FileText size={14} /> REQUIRED EQUIPMENT
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> First Aid Kit (Level 2)</li>
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Flashlight / Headlamp</li>
                                <li className="flex items-center gap-2"><AlertTriangle size={14} className="text-yellow-500" /> Helmet Required</li>
                            </ul>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-32 bg-gray-900 rounded-lg border border-gray-700 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover"></div>
                            <span className="text-xs text-gray-500 font-mono">TACTICAL MAP UNAVAILABLE</span>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-800 bg-gray-900/50 flex gap-4">
                    <button onClick={onClose} className="flex-1 py-3 px-4 rounded-lg border border-gray-600 text-gray-300 font-bold hover:bg-gray-800 transition">
                        DECLINE
                    </button>
                    <button onClick={onAccept} className={`flex-1 py-3 px-4 rounded-lg font-bold text-white shadow-lg transition transform hover:-translate-y-1 ${task.priority === 'high' ? 'bg-gradient-to-r from-red-600 to-red-500 shadow-red-900/20' : 'bg-gradient-to-r from-cyan-600 to-cyan-500 shadow-cyan-900/20'}`}>
                        CONFIRM ACCEPTANCE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VolunteerTaskDetails;
