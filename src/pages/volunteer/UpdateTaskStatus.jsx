import React, { useState } from 'react';
import { Shield, ChevronRight, Navigation, Check, Triangle, CheckCircle, X } from 'lucide-react';
import '../../styles/dashboard.css';
import './volunteer.css';

const UpdateTaskStatus = ({ task, onClose, onUpdate }) => {
    const [selectedStatus, setSelectedStatus] = useState('on-route');

    // Status Options
    const statuses = [
        { id: 'on-route', label: 'ON ROUTE', icon: <Navigation size={18} /> },
        { id: 'arrived', label: 'ARRIVED', icon: <Check size={18} /> },
        { id: 'assisting', label: 'ASSISTING', icon: <Shield size={18} /> },
        { id: 'extra-help', label: 'EXTRA HELP NEEDED', icon: <Triangle size={18} />, color: '#f59e0b' },
        { id: 'completed', label: 'TASK COMPLETED', icon: <CheckCircle size={18} /> },
    ];

    const handleSubmit = () => {
        onUpdate(selectedStatus);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: '16px' }}>
            {/* Background Map/Blur Effect - Consistent with AcceptTask */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'url(\'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/13/2344/3160.png\')',
                backgroundSize: 'cover',
                opacity: 0.6,
                zIndex: 0
            }}></div>

            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.9) 100%)',
                backdropFilter: 'blur(3px)',
                zIndex: 1
            }}></div>

            <div style={{ position: 'relative', zIndex: 10, padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' }}>

                {/* Header */}
                <div style={{ marginBottom: '30px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h2 style={{ fontSize: '1.8rem', margin: 0, letterSpacing: '4px', color: '#fff' }}>UPDATE STATUS</h2>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '8px 0 0 0', letterSpacing: '1px' }}>Update and report the current status of your task in real-time.</p>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', flex: 1, alignItems: 'center' }}>

                    {/* Left Side - Contextual Visual */}
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {/* Using similar visual as AcceptTask for consistency */}
                        <div className="drone-visual" style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
                        }}>
                            <Navigation size={100} color="#3b82f6" style={{ filter: 'drop-shadow(0 0 20px #3b82f6)', transform: 'rotate(45deg)' }} />

                            {/* Map indicators */}
                            <div style={{ position: 'absolute', bottom: '20%', right: '20%' }}>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>SECTOR 4</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>SECTOR 4</div>
                                <div style={{ borderTop: '2px solid white', width: '20px', marginTop: '5px' }}></div>
                            </div>
                        </div>

                        {/* Mini Task Card */}
                        <div className="holo-card" style={{
                            padding: '24px',
                            marginTop: '20px',
                            background: 'rgba(30, 41, 59, 0.5)'
                        }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                                    <Shield size={24} color="#3b82f6" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '4px' }}>{task?.title || 'DELIVER MEDICAL SUPPLIES'}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                        {task?.location || 'Sector 4'} • <span style={{ color: '#f59e0b' }}>{task?.urgency?.toUpperCase() || 'URGENT'}</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#3b82f6' }}>Active</span>
                                <span>06 min</span>
                            </div>
                            <div className="progress-container" style={{ marginTop: '10px', height: '6px' }}>
                                <div className="progress-bar" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Status Selection Card */}
                    <div className="holo-card" style={{ padding: '40px', background: 'rgba(30, 41, 59, 0.7)' }}>
                        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px', color: '#fff', fontSize: '0.9rem', opacity: 0.8 }}>
                                <Check size={16} /> CONFIRMED!
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
                            {statuses.map((status) => (
                                <div
                                    key={status.id}
                                    className={`status-option ${selectedStatus === status.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedStatus(status.id)}
                                >
                                    <div className="icon-box">
                                        {selectedStatus === status.id && <div className="dot"></div>}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        fontWeight: '600',
                                        color: selectedStatus === status.id ? '#fff' : (status.color || 'var(--text-secondary)'),
                                        fontSize: '1rem',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {status.icon} {status.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '30px', textAlign: 'center', padding: '0 20px' }}>
                            Select the status that accurately reflects the progress of your task, and submit the update to inform the team.
                        </p>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button
                                className="btn-primary"
                                style={{ flex: 1.5, padding: '16px', borderRadius: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', letterSpacing: '1px' }}
                                onClick={handleSubmit}
                            >
                                SUBMIT UPDATE
                            </button>
                            <button
                                style={{ flex: 1, padding: '16px', borderRadius: '30px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '1px' }}
                                onClick={onClose}
                            >
                                CANCEL
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTaskStatus;
