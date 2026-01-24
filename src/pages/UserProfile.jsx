import React, { useState } from 'react';
import {
    Shield, Mail, Phone, Wifi, MoreHorizontal, Bell, Lock, ChevronRight,
    Camera, Power, CheckCircle, AlertOctagon, User
} from 'lucide-react';

const UserProfile = () => {
    // State for toggles
    const [networkToggles, setNetworkToggles] = useState({
        '192.168.1.101': true,
        '192.168.1.102': false,
        '192.168.1.104': false
    });
    const [notificationToggle, setNotificationToggle] = useState(true);

    const handleNetworkToggle = (ip) => {
        setNetworkToggles(prev => ({
            ...prev,
            [ip]: !prev[ip]
        }));
    };

    return (
        <div style={{ color: 'white', fontFamily: "'Rajdhani', sans-serif" }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '1px' }}>PROFILE</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>

                {/* Main Profile Info - Left Column (Approx 60% of width based on design) */}
                <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Top Profile Card */}
                    <div style={{
                        background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '2.5rem',
                        border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden'
                    }}>
                        {/* Background faint glow */}
                        <div style={{
                            position: 'absolute', top: '-50%', right: '-10%', width: '300px', height: '300px',
                            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%'
                        }} />

                        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                            {/* Avatar with glowing rings */}
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    width: '140px', height: '140px', borderRadius: '50%',
                                    border: '4px solid #00f0ff', padding: '4px',
                                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 10px rgba(0, 240, 255, 0.3)'
                                }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                        alt="Profile"
                                        style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{
                                    position: 'absolute', bottom: '0', right: '0',
                                    background: '#0f172a', padding: '8px', borderRadius: '50%',
                                    border: '2px solid #334155', cursor: 'pointer'
                                }}>
                                    <Camera size={16} color="#94a3b8" />
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Commander</h2>
                                    <span style={{
                                        background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa',
                                        padding: '4px 12px', borderRadius: '4px', border: '1px solid rgba(59, 130, 246, 0.4)',
                                        fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px'
                                    }}>
                                        <AlertOctagon size={12} /> CRISIS LEVEL: ALPHA
                                    </span>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                                    <div>
                                        <label style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Full Name</label>
                                        <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>John Callahan</div>
                                    </div>
                                    <div>
                                        {/* Mock Input Field styled as visual */}
                                        <div style={{
                                            background: 'rgba(15, 23, 42, 0.5)', border: '1px solid rgba(255,255,255,0.05)',
                                            borderRadius: '6px', padding: '0.5rem 1rem', fontSize: '0.8rem', color: '#94a3b8',
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                                        }}>
                                            CRISIS LEVEL : ALPHA
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Rank</label>
                                        <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Commander</div>
                                    </div>
                                    <div>
                                        <label style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>User Role</label>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>ALPHA</div>
                                            <span style={{
                                                background: '#1e3a8a', color: '#93c5fd', padding: '4px 12px', borderRadius: '4px',
                                                fontSize: '0.7rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px'
                                            }}>
                                                <Shield size={12} fill="#93c5fd" /> ALPHA
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem', letterSpacing: '1px' }}>CONTACT INFORMATION</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Card 1 */}
                            <div style={{
                                background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '1.25rem',
                                border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Shield size={24} color="#00f0ff" />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Sarah Miller</div>
                                        <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Deputy Commander</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={14} color="#94a3b8" /> s.miller@email.com</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={14} color="#94a3b8" /> +1 (555) 987-6543</div>
                                </div>
                                <div>
                                    <span style={{
                                        background: 'rgba(16, 185, 129, 0.2)', color: '#34d399',
                                        padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid rgba(16, 185, 129, 0.3)'
                                    }}>ACTIVE</span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div style={{
                                background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '1.25rem',
                                border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <User size={24} color="#00f0ff" />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Ben Reynolds</div>
                                        <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Chief of Operations</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={14} color="#94a3b8" /> b.reynolds@email.com</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={14} color="#94a3b8" /> +1 (555) 876-4321</div>
                                </div>
                                <div>
                                    <span style={{
                                        background: 'rgba(249, 115, 22, 0.2)', color: '#fb923c',
                                        padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid rgba(249, 115, 22, 0.3)'
                                    }}>PHONE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Login History / Notification Settings */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem', letterSpacing: '1px' }}>LOGIN HISTORY</h3>
                        <div style={{
                            background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '1.5rem',
                            border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px' }}>
                                    <Lock size={20} color="#94a3b8" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Receive Email Notifications</div>
                                    <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '4px' }}>Notify me about new incidents alerts and updates via email.</div>
                                </div>
                            </div>
                            {/* Toggle Switch */}
                            <div
                                onClick={() => setNotificationToggle(!notificationToggle)}
                                style={{
                                    width: '50px', height: '28px', background: notificationToggle ? '#3b82f6' : '#334155', borderRadius: '20px',
                                    position: 'relative', cursor: 'pointer', transition: '0.3s'
                                }}
                            >
                                <div style={{
                                    width: '22px', height: '22px', background: 'white', borderRadius: '50%',
                                    position: 'absolute', top: '3px', left: notificationToggle ? '25px' : '3px', transition: '0.3s',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                }} />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column - Status/Network */}
                <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Networks Panel */}
                    <div style={{
                        background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        {[
                            { ip: '192.168.1.101', status: 'Active', label: 'Private Network' },
                            { ip: '192.168.1.102', status: 'Yesterday', label: 'Private Network' },
                            { ip: '192.168.1.104', status: '2 days ago', label: 'Private Network' }
                        ].map((net, idx) => (
                            <div key={idx} style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0',
                                borderBottom: idx !== 2 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                            }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <Wifi size={20} color="white" />
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{net.ip}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>
                                            <CheckCircle size={10} color="#94a3b8" /> {net.label}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{net.status}</span>
                                    {idx === 0 ? (
                                        /* Active Toggle */
                                        <div
                                            onClick={() => handleNetworkToggle(net.ip)}
                                            style={{
                                                width: '44px', height: '24px', background: networkToggles[net.ip] ? '#3b82f6' : '#334155', borderRadius: '20px',
                                                position: 'relative', cursor: 'pointer', transition: '0.3s'
                                            }}
                                        >
                                            <div style={{
                                                width: '18px', height: '18px', background: 'white', borderRadius: '50%',
                                                position: 'absolute', top: '3px', left: networkToggles[net.ip] ? '23px' : '3px', transition: '0.3s'
                                            }} />
                                        </div>
                                    ) : (
                                        <ChevronRight size={18} color="#64748b" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
