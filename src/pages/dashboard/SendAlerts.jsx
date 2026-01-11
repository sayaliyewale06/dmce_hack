import React, { useState } from 'react';
import { ChevronLeft, AlertTriangle, Send, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/dashboard.css';

const SendAlerts = () => {
    const navigate = useNavigate();
    const [droneSupport, setDroneSupport] = useState(4);

    return (
        <div className="dashboard-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
            <div style={{ position: 'absolute', top: '100px', left: '40px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', padding: '10px 20px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                    <ChevronLeft size={16} /> BACK TO RESOURCES
                </button>
            </div>

            <div className="alert-form-container">
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ margin: 0, textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>SEND ALERTS</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Issue alerts to inform and mobilize response teams.</p>
                </div>

                <div className="glass-card" style={{ background: 'rgba(0,0,0,0.2)', padding: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>

                    <div className="form-group">
                        <label className="form-label">ALERT TYPE</label>
                        <div style={{ position: 'relative' }}>
                            <AlertTriangle size={18} color="#ef4444" style={{ position: 'absolute', top: '14px', left: '12px' }} />
                            <select className="form-select" style={{ paddingLeft: '40px', borderColor: 'rgba(239, 68, 68, 0.5)', background: 'rgba(239, 68, 68, 0.1)' }}>
                                <option>Hazardous Materials Spill</option>
                                <option>Medical Emergency</option>
                                <option>Structural Collapse</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div className="form-group" style={{ flex: 2 }}>
                            <label className="form-label">LOCATION</label>
                            <input type="text" className="form-input" placeholder="- Enter Location -" />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label">PRIORITY</label>
                            <div style={{ position: 'relative' }}>

                                <select className="form-select" style={{ background: 'rgba(255, 15, 67, 0.1)' }}>
                                    <option>High</option>
                                    <option>Critical</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">MESSAGE <span style={{ float: 'right', color: 'var(--text-secondary)' }}>0 / 300</span></label>
                        <textarea className="form-textarea" placeholder="Enter message details..."></textarea>
                    </div>

                    <div className="form-group" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <label className="form-label">DRONE SUPPORT</label>
                            <span style={{ fontSize: '0.8rem', color: '#10b981' }}>Drones: 42 <Zap size={10} /></span>
                        </div>

                        <div style={{ padding: '0 10px' }}>
                            <input
                                type="range"
                                min="0" max="20"
                                value={droneSupport}
                                onChange={(e) => setDroneSupport(e.target.value)}
                                style={{ width: '100%', accentColor: '#3b82f6' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '5px' }}>
                                <span>-</span><span>12</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>20+</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '0.9rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Zap size={16} /> UNITS 600</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>ETA 25 min</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <button className="btn-primary" style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '1.1rem',
                            background: 'linear-gradient(90deg, #be123c, #fb7185)',
                            border: '1px solid #be123c',
                            boxShadow: '0 0 15px rgba(190, 18, 60, 0.4)',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'
                        }}>
                            <Send size={20} /> DISPATCH ALERT
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SendAlerts;
