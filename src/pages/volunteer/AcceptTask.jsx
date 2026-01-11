import React, { useState } from 'react';
import { MapPin, Clock, Zap, ArrowRight, Shield, AlertTriangle, Battery, Navigation, CheckCircle } from 'lucide-react';
import '../../styles/dashboard.css';
import './volunteer.css';

const AcceptTask = ({ task, onBack, onTaskList }) => {
    // Determine urgency color
    const getUrgencyColor = (urgency) => {
        if (urgency === 'severe' || urgency === 'critical') return '#ef4444';
        if (urgency === 'high' || urgency === 'urgent') return '#f59e0b';
        return '#3b82f6';
    };

    const urgencyColor = getUrgencyColor(task?.urgency || 'urgent');

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: '16px' }}>
            {/* Background Map/Blur Effect */}
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
                    <h2 style={{ fontSize: '1.8rem', margin: 0, letterSpacing: '4px', color: '#fff' }}>ACCEPT TASK</h2>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '5px' }}>CONFIRMATION PROTOCOL INITIATED</div>
                </div>

                {/* Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', flex: 1, alignItems: 'center' }}>

                    {/* Left Side - Drone/Vehicle Visualization */}
                    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="drone-visual" style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            {/* Drone Icon Placeholder */}
                            <Navigation size={120} color="#3b82f6" style={{ filter: 'drop-shadow(0 0 20px #3b82f6)' }} />

                            {/* Holographic rings effect */}
                            <div style={{ position: 'absolute', width: '200px', height: '60px', borderRadius: '50%', border: '1px solid rgba(59, 130, 246, 0.3)', transform: 'rotateX(60deg)' }}></div>
                            <div style={{ position: 'absolute', width: '280px', height: '90px', borderRadius: '50%', border: '1px solid rgba(59, 130, 246, 0.1)', transform: 'rotateX(60deg)' }}></div>

                            {/* Scanning Line */}
                            <div style={{ position: 'absolute', width: '100%', height: '2px', background: 'rgba(59, 130, 246, 0.5)', top: '50%', boxShadow: '0 0 10px #3b82f6', animation: 'scan 2s linear infinite' }}></div>
                        </div>

                        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <div style={{ padding: '10px', background: 'rgba(59,130,246,0.2)', borderRadius: '8px' }}>
                                <MapPin size={24} color={urgencyColor} />
                            </div>
                            <div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>{task?.location || 'SECTOR 4'}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>TARGET COORDINATES ACQUIRED</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Task Details Card */}
                    <div className="holo-card" style={{ padding: '40px', background: 'rgba(30, 41, 59, 0.7)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <h3 style={{ fontSize: '1.4rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>YOU'VE ACCEPTED THE TASK</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontSize: '0.9rem', background: 'rgba(74, 222, 128, 0.1)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(74, 222, 128, 0.2)' }}>
                                <CheckCircle size={16} /> CONFIRMED!
                            </div>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>
                            You're now assigned to the task:<br />
                            <span style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700', marginTop: '10px', display: 'block' }}>{task?.title || 'DELIVER MEDICAL SUPPLIES'}</span>
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', marginBottom: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', padding: '20px' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>SECTOR 4</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '1.1rem' }}>
                                    <AlertTriangle size={18} color="#3b82f6" /> {task?.location || 'Sector 4'}
                                </div>
                            </div>
                            <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', padding: '20px' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>URGENCY</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', color: urgencyColor, fontSize: '1.1rem' }}>
                                    <AlertTriangle size={18} /> {task?.urgency?.toUpperCase() || 'URGENT'}
                                </div>
                            </div>
                            <div style={{ padding: '20px' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>DISTANCE</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: '600' }}>{task?.distance || '2 km'}</div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>TIME DUE</span>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f59e0b' }}>{task?.eta || '08 min'}</span>
                            </div>
                            <div className="progress-container" style={{ background: 'rgba(255,255,255,0.05)', height: '8px' }}>
                                <div className="progress-bar" style={{ width: '60%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', boxShadow: '0 0 10px rgba(245, 158, 11, 0.4)' }}></div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>RESOURCES</div>
                            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '8px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                                <div style={{ width: '20px', height: '20px', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', borderRadius: '4px' }}>+</div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>400</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                <Battery size={18} color="#3b82f6" /> POWER CELLS X
                            </div>
                        </div>

                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '24px' }}>
                            You can view the details of this task anytime in your tasks list.
                        </p>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button
                                className="btn-primary"
                                style={{ flex: 1.5, padding: '16px', borderRadius: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1rem', letterSpacing: '1px' }}
                                onClick={onBack}
                            >
                                VIEW TASK <ArrowRight size={18} />
                            </button>
                            <button
                                style={{ flex: 1, padding: '16px', borderRadius: '30px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '1px' }}
                                onClick={onTaskList}
                            >
                                SEE TASK LIST &gt;
                            </button>
                        </div>

                    </div>
                </div>

                {/* Footer Nav (Optional) */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: 'auto' }}>
                    <button className="btn-outline" style={{ borderRadius: '20px', padding: '8px 20px', fontSize: '0.8rem' }}>&lt; NEWER</button>
                    <button className="btn-outline" style={{ borderRadius: '20px', padding: '8px 20px', fontSize: '0.8rem' }}>SEE TASK LIST</button>
                </div>
            </div>
        </div>
    );
};

export default AcceptTask;
