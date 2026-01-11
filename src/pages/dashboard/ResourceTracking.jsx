import React from 'react';
import { ChevronLeft, Box, Shield, Zap, Truck, Database, Activity, AlertTriangle, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/dashboard.css';

const ResourceTracking = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container" style={{ padding: '0 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                    <ChevronLeft size={20} /> BACK TO DASHBOARD
                </button>
                <div className="page-tabs">
                    <button className="page-tab active">RESOURCE TRACKING</button>
                    <button className="page-tab">UPDATE INVENTORY</button>
                    <button className="page-tab">TRACK MOVEMENT</button>
                </div>
                <div></div>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h1 style={{ margin: 0 }}>RESOURCE TRACKING</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Monitor and manage resources for crisis response.</p>
            </div>

            <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
                <div className="panel-header">
                    <h3 style={{ color: 'var(--text-secondary)' }}>RESOURCE INVENTORY</h3>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        {[1, 2, 3, 4, 5].map(i => <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === 5 ? '#3b82f6' : '#334155' }}></div>)}
                    </div>
                </div>

                <div className="resource-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                    {/* Resource Item 1 */}
                    <div style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '10px', padding: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontWeight: 'bold', marginBottom: '10px' }}>
                            <Box size={18} /> MEDKITS
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>370 <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>units</span></span>
                            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}>+</div>
                        </div>
                        <button className="btn-outline" style={{ width: '100%', marginTop: '10px', fontSize: '0.8rem', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.3)' }}>TRANSFER</button>
                    </div>

                    {/* Resource Item 2 */}
                    <div style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '10px', padding: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fbbf24', fontWeight: 'bold', marginBottom: '10px' }}>
                            <Shield size={18} /> HAZMAT SUITS
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>145 <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>units</span></span>
                            <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}>+</div>
                        </div>
                        <button className="btn-outline" style={{ width: '100%', marginTop: '10px', fontSize: '0.8rem', color: '#fbbf24', borderColor: 'rgba(245, 158, 11, 0.3)' }}>TRANSFER</button>
                    </div>

                    {/* Resource Item 3 */}
                    <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', padding: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 'bold', marginBottom: '10px' }}>
                            <Box size={18} /> FOOD PACKS
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>580 <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>units</span></span>
                            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}>+</div>
                        </div>
                        <button className="btn-outline" style={{ width: '100%', marginTop: '10px', fontSize: '0.8rem', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.3)' }}>TRANSFER</button>
                    </div>

                    {/* Resource Item 4 */}
                    <div style={{ background: 'rgba(189, 0, 255, 0.05)', border: '1px solid rgba(189, 0, 255, 0.3)', borderRadius: '10px', padding: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d8b4fe', fontWeight: 'bold', marginBottom: '10px' }}>
                            <Zap size={18} /> POWER CELLS
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>260 <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>units</span></span>
                            <div style={{ background: 'rgba(189, 0, 255, 0.2)', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}>+</div>
                        </div>
                        <button className="btn-outline" style={{ width: '100%', marginTop: '10px', fontSize: '0.8rem', color: '#d8b4fe', borderColor: 'rgba(189, 0, 255, 0.3)' }}>TRANSFER</button>
                    </div>
                </div>
            </div>

            <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="panel-header" style={{ padding: '20px', borderBottom: '1px solid var(--border-color)', background: 'linear-gradient(90deg, rgba(15,17,26,0.9), rgba(23,25,35,0.8))' }}>
                    <h3 style={{ color: 'var(--text-secondary)' }}>REAL-TIME MOVEMENT</h3>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem' }}>
                        <span style={{ color: '#10b981' }}>DRONES 46 ACTIVE</span>
                        <span style={{ color: '#3b82f6' }}>SENSORS 379</span>
                    </div>
                </div>

                <div style={{ height: '350px', position: 'relative', background: "url('https://img.freepik.com/free-vector/dark-futuristic-city-background_23-2148043621.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,17,26,0.2) 0%, rgba(15,17,26,0.9) 100%)' }}></div>

                    {/* Map Nodes */}
                    <div className="sector-node" style={{ top: '30%', left: '25%', borderColor: '#ef4444', color: '#ef4444' }}>
                        <AlertTriangle size={12} color="#ef4444" />
                    </div>
                    <span style={{ position: 'absolute', top: '24%', left: '23%', fontSize: '0.8rem', fontWeight: 'bold', color: '#ef4444' }}>SECTOR 1 <br /><span style={{ fontSize: '0.6rem' }}>DISTRESS SIGNAL</span></span>

                    <div className="sector-node" style={{ top: '60%', left: '70%', borderColor: '#3b82f6', color: '#3b82f6' }}></div>
                    <span style={{ position: 'absolute', top: '65%', left: '70%', fontSize: '0.8rem', fontWeight: 'bold', color: '#3b82f6' }}>SECTOR 3</span>

                    <div className="sector-node" style={{ top: '40%', left: '55%', borderColor: '#10b981', color: '#10b981' }}>
                        <Box size={12} color="#10b981" />
                    </div>

                    {/* Flow Lines - Simplified for demo */}
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <path d="M 25% 30% Q 40% 10% 55% 40%" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        <path d="M 55% 40% Q 65% 50% 70% 60%" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        <path d="M 25% 30% Q 45% 70% 70% 60%" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.5" />
                    </svg>

                    {/* Bottom Legend */}
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: 'rgba(0,0,0,0.6)', borderRadius: '12px', border: '1px solid var(--border-color)', backdropFilter: 'blur(5px)' }}>
                        <div style={{ fontSize: '0.8rem', display: 'flex', gap: '20px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ color: '#3b82f6' }}>●</span> MEDKITS 370 units</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ color: '#f59e0b' }}>●</span> HAZMAT SUITS 145 units</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ color: '#10b981' }}>●</span> FOOD PACKS 580 units</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ color: '#bd00ff' }}>●</span> POWER CELLS 260 units</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                <button className="btn-primary" style={{ padding: '12px 30px', display: 'flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', border: '1px solid #8b5cf6' }}>
                    <ArrowUp size={18} /> UPDATE INVENTORY
                </button>
                <button className="btn-outline" style={{ padding: '12px 30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Database size={18} /> VIEW LOGS <ChevronLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                </button>
            </div>
        </div>
    );
};

export default ResourceTracking;
