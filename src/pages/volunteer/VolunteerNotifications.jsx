import React, { useState } from 'react';
import {
    Bell, Siren, RefreshCw, AlertTriangle, MessageSquare,
    Check, X, ChevronRight
} from 'lucide-react';
import './VolunteerDashboard.css';

const VolunteerNotifications = () => {
    // Mock Data
    const [alerts, setAlerts] = useState([
        { id: 1, type: 'urgent', title: 'URGENT: CRITICAL MEDICAL EMERGENCY', desc: 'Sector 4 requires immediate support. Multiple casualties report.', time: '2 min ago', read: false },
        { id: 2, type: 'reassign', title: 'Task Reassigned', desc: 'Your supply run in Sector 6 has been transferred to Team Bravo.', time: '15 min ago', read: false },
        { id: 3, type: 'safety', title: 'Hazard Warning: Sector 9', desc: 'Chemical leak detected. Avoid the industrial zone until further notice.', time: '45 min ago', read: true },
        { id: 4, type: 'message', title: 'New Message from Coordinator', desc: 'Great work on the evacuation task! Return to base for resupply.', time: '1 hour ago', read: true },
    ]);

    const markAllRead = () => {
        setAlerts(alerts.map(a => ({ ...a, read: true })));
    };

    const deleteAlert = (id) => {
        setAlerts(alerts.filter(a => a.id !== id));
    };

    return (
        <div className="p-6 md:p-8 max-w-4xl mx-auto animate-slide-up">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white font-['Share_Tech_Mono'] mb-1 flex items-center gap-3">
                        <Bell className="text-cyan-400" /> NOTIFICATION CENTER
                    </h1>
                </div>
                <button
                    onClick={markAllRead}
                    className="text-xs text-cyan-400 hover:text-white transition font-bold uppercase tracking-wider"
                >
                    Mark All Read
                </button>
            </div>

            <div className="space-y-4">
                {alerts.map(alert => (
                    <AlertItem
                        key={alert.id}
                        alert={alert}
                        onDelete={() => deleteAlert(alert.id)}
                    />
                ))}

                {alerts.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        <Bell size={48} className="mx-auto mb-4 opacity-20" />
                        <p>No new notifications.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const AlertItem = ({ alert, onDelete }) => {
    const getTypeStyles = (type) => {
        switch (type) {
            case 'urgent': return { icon: Siren, color: 'text-red-500', border: 'border-red-500', bg: 'bg-red-900/10' };
            case 'reassign': return { icon: RefreshCw, color: 'text-yellow-400', border: 'border-yellow-500', bg: 'bg-yellow-900/10' };
            case 'safety': return { icon: AlertTriangle, color: 'text-orange-500', border: 'border-orange-500', bg: 'bg-orange-900/10' };
            case 'message': return { icon: MessageSquare, color: 'text-blue-400', border: 'border-blue-500', bg: 'bg-blue-900/10' };
            default: return { icon: Bell, color: 'text-gray-400', border: 'border-gray-600', bg: 'bg-gray-800' };
        }
    };

    const style = getTypeStyles(alert.type);
    const Icon = style.icon;

    return (
        <div className={`relative p-4 rounded-xl border ${alert.read ? 'border-gray-800 bg-[rgba(15,23,42,0.4)]' : `${style.border} ${style.bg}`} transition hover:translate-x-1`}>
            {!alert.read && <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${style.color.replace('text', 'bg')} animate-pulse`}></div>}

            <div className="flex gap-4">
                <div className={`p-3 rounded-lg bg-black/20 h-fit ${style.color}`}>
                    <Icon size={24} />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start pr-6">
                        <h3 className={`font-bold ${alert.read ? 'text-gray-300' : 'text-white'}`}>{alert.title}</h3>
                        <span className="text-xs font-mono text-gray-500 whitespace-nowrap ml-2">{alert.time}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">{alert.desc}</p>

                    {/* Actions */}
                    <div className="flex gap-3 mt-4">
                        {alert.type === 'urgent' && (
                            <button className="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded shadow-lg shadow-red-900/20 transition">
                                VIEW & ACCEPT
                            </button>
                        )}
                        {alert.type === 'message' && (
                            <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded transition">
                                REPLY
                            </button>
                        )}
                        <button
                            onClick={onDelete}
                            className="px-3 py-1.5 border border-gray-700 hover:bg-gray-800 text-gray-400 text-xs font-bold rounded transition ml-auto"
                        >
                            DISMISS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerNotifications;
