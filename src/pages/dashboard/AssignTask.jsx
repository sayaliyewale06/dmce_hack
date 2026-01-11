import React, { useState } from 'react';
import { ChevronLeft, Search, Filter, AlertTriangle, MapPin, Clock, Shield, Check, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/dashboard.css';

const AssignTask = () => {
    const navigate = useNavigate();
    const [selectedMembers, setSelectedMembers] = useState([1, 2, 4, 6, 7, 8]); // Dummy selected IDs

    const members = [
        { id: 1, name: 'Marcus', role: 'Paramedic', avatar: 'https://i.pravatar.cc/150?img=11' },
        { id: 2, name: 'Emma', role: 'Emergency Nurse', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: 3, name: 'Ethan', role: 'Field Medic', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: 4, name: 'Lt. Lisa Cho', role: 'Squad Leader', avatar: 'https://i.pravatar.cc/150?img=9' },
        { id: 5, name: 'Dr. Jason', role: 'Doctor', avatar: 'https://i.pravatar.cc/150?img=12' },
        { id: 6, name: 'Tyler', role: 'Firemedic', avatar: 'https://i.pravatar.cc/150?img=8' },
        { id: 7, name: 'Hazel', role: 'Paramedic', avatar: 'https://i.pravatar.cc/150?img=4' },
    ];

    const toggleMember = (id) => {
        if (selectedMembers.includes(id)) {
            setSelectedMembers(selectedMembers.filter(m => m !== id));
        } else {
            setSelectedMembers([...selectedMembers, id]);
        }
    };

    return (
        <div className="community-grid">
            <div className="left-panel">
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', marginBottom: '20px' }}>
                    <ChevronLeft size={20} /> BACK TO DASHBOARD
                </button>

                <div style={{ marginBottom: '20px' }}>
                    <h1 style={{ margin: 0 }}>ASSIGN TASK</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Monitoring real-time crisis incidents and response status.</p>
                </div>

                <div className="search-container" style={{ marginBottom: '20px' }}>
                    <Search size={18} color="var(--text-secondary)" />
                    <input type="text" placeholder="Search incidents..." className="search-input" />
                    <Filter size={18} color="var(--text-secondary)" />
                </div>

                <div className="glass-card" style={{ borderColor: 'rgba(239, 68, 68, 0.4)', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(15, 17, 26, 0.8) 100%)' }}>
                    <div className="card-header-row">
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px', background: '#ef4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <AlertTriangle size={20} color="white" />
                            </div>
                            <div>
                                <h3 style={{ margin: 0, color: '#ff8fa3', fontSize: '1rem' }}>MEDICAL EMERGENCY</h3>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Critical Patients in Sector 7</div>
                            </div>
                        </div>
                        <span className="badge-critical">CRITICAL</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>Multiple casualties requiring immediate evacuation. Medical teams en route.</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16} /> SECTOR 7 • 1.2 km away</div>
                        <div className="progress-container" style={{ width: '150px', margin: 0 }}>
                            <div className="progress-bar" style={{ width: '60%' }}></div>
                        </div>
                        <span>8/14 TEAMS DEPLOYED</span>
                    </div>

                    <div style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Shield size={18} color="#3b82f6" /> SELECT TASK DETAILS
                        </div>
                        <ChevronLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                    </div>
                </div>

                {/* Map Visual */}
                <div style={{
                    height: '250px', width: '100%',
                    borderRadius: '16px', marginTop: '20px',
                    background: "url('https://img.freepik.com/free-vector/dark-futuristic-city-background_23-2148043621.jpg')",
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    position: 'relative', overflow: 'hidden', border: '1px solid var(--border-color)'
                }}>
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(15, 17, 26, 0.8)', padding: '10px 20px', borderRadius: '30px', border: '1px solid var(--border-color)', backdropFilter: 'blur(5px)' }}>
                        <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>1.2 KM AWAY</span>
                    </div>
                    <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(15, 17, 26, 0.8)', padding: '10px 20px', borderRadius: '30px', border: '1px solid var(--border-color)', backdropFilter: 'blur(5px)' }}>
                        <span style={{ color: '#ef4444', fontWeight: 'bold' }}>ETA: 4 MIN</span>
                    </div>
                </div>
            </div>

            {/* Right Panel - Team Selection */}
            <div className="right-panel">
                <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="panel-header">
                        <h3>SELECT RESPONSE TEAM</h3>
                    </div>

                    <div style={{ background: 'rgba(255, 15, 67, 0.1)', border: '1px solid rgba(255, 15, 67, 0.3)', padding: '15px', borderRadius: '12px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px', background: '#ef4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1rem' }}>Alpha Team <span style={{ opacity: 0.7, fontSize: '0.8rem' }}>III</span></h3>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>MEDICAL - SECTOR 7</span>
                            </div>
                        </div>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Check size={14} color="white" />
                        </div>
                    </div>

                    <div className="member-list" style={{ flex: 1, overflowY: 'auto' }}>
                        {members.map(member => (
                            <div key={member.id} className={`member-item ${selectedMembers.includes(member.id) ? 'selected' : ''}`} onClick={() => toggleMember(member.id)}>
                                <div className="member-info">
                                    <div className="member-avatar" style={{ backgroundImage: `url(${member.avatar})` }}></div>
                                    <div>
                                        <div style={{ fontWeight: '600' }}>{member.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{member.role}</div>
                                    </div>
                                </div>
                                <div className="check-circle">
                                    {selectedMembers.includes(member.id) && <Check size={12} />}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                        <button className="btn-outline" style={{ flex: 1 }}>CANCEL</button>
                        <button className="btn-primary" style={{ flex: 1 }}>CONFIRM ASSIGNMENT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignTask;
