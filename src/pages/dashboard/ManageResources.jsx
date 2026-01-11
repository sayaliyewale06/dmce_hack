import React from 'react';
import { ChevronRight, Box, Zap, Truck, Database, Settings } from 'lucide-react';
import '../../styles/dashboard.css';

const ManageResources = () => {
    return (
        <div className="community-grid">
            <div className="left-panel">
                <div style={{ marginBottom: '20px' }}>
                    <h1 style={{ margin: 0 }}>MANAGE RESOURCES</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Monitor and allocate resources for crisis response.</p>
                </div>

                <div className="panel-header">
                    <h3 style={{ color: 'var(--text-secondary)' }}>RESOURCE INVENTORY</h3>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>Sensors: 379</div>
                </div>

                <div className="resource-grid">
                    <div className="resource-card active" style={{ '--primary-blue': '#3b82f6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontWeight: '600' }}>
                            <Box size={18} /> Medkits
                        </div>
                        <div className="resource-value">370 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>units</span></div>
                        <button className="btn-outline" style={{ width: '100%', fontSize: '0.8rem' }}>TRANSFER</button>
                    </div>

                    <div className="resource-card" style={{ '--primary-blue': '#f59e0b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fbbf24', fontWeight: '600' }}>
                            <Shield size={18} /> Hazmat Suits
                        </div>
                        <div className="resource-value">145 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>units</span></div>
                        <button className="btn-outline" style={{ width: '100%', fontSize: '0.8rem' }}>TRANSFER</button>
                    </div>

                    <div className="resource-card" style={{ '--primary-blue': '#10b981' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: '600' }}>
                            <Box size={18} /> Food Packs
                        </div>
                        <div className="resource-value">580 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>units</span></div>
                        <button className="btn-outline" style={{ width: '100%', fontSize: '0.8rem' }}>TRANSFER</button>
                    </div>

                    <div className="resource-card" style={{ '--primary-blue': '#bd00ff' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d8b4fe', fontWeight: '600' }}>
                            <Zap size={18} /> Power Cells
                        </div>
                        <div className="resource-value">260 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>units</span></div>
                        <button className="btn-outline" style={{ width: '100%', fontSize: '0.8rem' }}>TRANSFER</button>
                    </div>
                </div>

                <div className="panel-header" style={{ marginTop: '30px' }}>
                    <h3 style={{ color: 'var(--text-secondary)' }}>DRONES</h3>
                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>Drones: 42</div>
                </div>

                <div className="drone-section">
                    <div className="drone-info">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Box size={24} color="#3b82f6" />
                                <div>
                                    <div style={{ fontWeight: '700' }}>Aerial Medical Drone</div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>LEVEL III</div>
                                </div>
                            </div>
                            <Settings size={18} color="var(--text-secondary)" />
                        </div>

                        <div style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>Aerial transfer</span> <span>20 deployment</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>Range</span> <span>8 km</span>
                            </div>
                        </div>

                        <div className="progress-container" style={{ marginBottom: '20px', height: '8px' }}>
                            <div className="progress-bar" style={{ width: '70%', background: 'linear-gradient(90deg, #3b82f6, #bd00ff)' }}></div>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="btn-outline" style={{ flex: 1 }}>MO-DATA</button>
                            <button className="btn-primary" style={{ flex: 2, background: 'rgba(189, 0, 255, 0.2)', border: '1px solid #bd00ff' }}>ASSIGN RESOURCES</button>
                        </div>
                    </div>
                    <div className="drone-visual">
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '4px' }}>
                                <Zap size={14} color="#3b82f6" /> 500
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '4px' }}>
                                <Truck size={14} color="#3b82f6" /> 8 km
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-panel">
                <div className="glass-card" style={{ height: '100%' }}>
                    <div className="panel-header">
                        <h3>STORAGE LOCATIONS</h3>
                    </div>

                    <table className="storage-table">
                        <tbody>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <tr key={i}>
                                    <td>SECTOR {i}</td>
                                    <td><span style={{ color: '#3b82f6' }}>●</span> {70 - i * 5}</td>
                                    <td><span style={{ color: '#f59e0b' }}>●</span> {80 + i * 2}</td>
                                    <td><span className="val-box">{671 - i * 40}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 'bold' }}>
                            <span>TOTAL RESOURCES</span>
                            <span>370 / 685</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.8rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#3b82f6' }}>● MEDKITS</span> <span>750</span></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#10b981' }}>● FOOD</span> <span>670</span></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#f59e0b' }}>● HAZMAT</span> <span>1350</span></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#bd00ff' }}>● POWER</span> <span>470</span></div>
                        </div>

                        <button className="btn-primary" style={{ width: '100%', marginTop: '20px', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <Database size={16} /> DEPLOY RESOURCES <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageResources;
