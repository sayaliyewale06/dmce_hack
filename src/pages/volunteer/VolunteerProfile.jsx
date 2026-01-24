import React, { useState } from 'react';
import {
    User, Award, Clock, MapPin, Phone, Mail, Calendar,
    CheckCircle, Shield, Activity, GraduationCap
} from 'lucide-react';

const VolunteerProfile = () => {
    const [availability, setAvailability] = useState(true);

    return (
        <div style={{ padding: '2rem', color: 'white', fontFamily: "'Rajdhani', sans-serif" }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '1px' }}>VOLUNTEER PROFILE</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>

                {/* Left Column - ID Card Style */}
                <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{
                        background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '2rem',
                        border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '120px', height: '120px', borderRadius: '50%', background: '#0f172a', margin: '0 auto 1.5rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #06b6d4',
                            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                        }}>
                            <User size={60} color="#06b6d4" />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Luke Skywalker</h2>
                        <div style={{ color: '#06b6d4', fontWeight: 'bold', letterSpacing: '1px', marginTop: '0.5rem' }}>VOLUNTEER ALPHA</div>
                        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                            <span style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>EMT Certified</span>
                            <span style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#facc15', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>Driver</span>
                        </div>

                        {/* Status Toggle */}
                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Availability Status</span>
                            <div
                                onClick={() => setAvailability(!availability)}
                                style={{
                                    width: '48px', height: '26px', background: availability ? '#10b981' : '#334155', borderRadius: '20px',
                                    position: 'relative', cursor: 'pointer', transition: '0.3s'
                                }}
                            >
                                <div style={{
                                    width: '20px', height: '20px', background: 'white', borderRadius: '50%',
                                    position: 'absolute', top: '3px', left: availability ? '25px' : '3px', transition: '0.3s'
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Personal Info */}
                    <div style={{
                        background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <h3 style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem', fontWeight: 'bold' }}>CONTACT INFO</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Phone size={16} color="#06b6d4" /> +1 (555) 123-4567
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Mail size={16} color="#06b6d4" /> luke.s@volunteer.org
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <MapPin size={16} color="#06b6d4" /> Sector 7 Base
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Stats & Achievements */}
                <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Stats Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>TOTAL MISSIONS</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#06b6d4' }}>28</div>
                            <div style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Activity size={12} /> +2 this week
                            </div>
                        </div>
                        <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>VOLUNTEER HOURS</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b' }}>142</div>
                            <div style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Clock size={12} /> 12h pending approval
                            </div>
                        </div>
                        <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>RATING</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>4.9</div>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                Based on 25 reviews
                            </div>
                        </div>
                    </div>

                    {/* badges */}
                    <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Award size={18} /> CERTIFICATIONS & BADGES
                        </h3>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 1 }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #06b6d4' }}>
                                    <Shield size={32} color="#06b6d4" />
                                </div>
                                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Crisis Resp.</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 1 }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #10b981' }}>
                                    <Activity size={32} color="#10b981" />
                                </div>
                                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>First Aid</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 1 }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #f59e0b' }}>
                                    <MapPin size={32} color="#f59e0b" />
                                </div>
                                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Navigator</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.4 }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #94a3b8' }}>
                                    <GraduationCap size={32} color="#94a3b8" />
                                </div>
                                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Adv. Medical</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Calendar size={18} /> RECENT ACTIVITY
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { title: 'Supply Run - Sector 4', date: 'Today, 10:30 AM', status: 'Completed', color: '#10b981' },
                                { title: 'Medical Assist - Downtown', date: 'Yesterday, 2:15 PM', status: 'Completed', color: '#10b981' },
                                { title: 'Patrol Shift', date: 'Jan 22, 08:00 AM', status: 'Reported', color: '#3b82f6' }
                            ].map((activity, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: idx !== 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{activity.title}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{activity.date}</div>
                                    </div>
                                    <span style={{
                                        color: activity.color, background: `${activity.color}15`, padding: '4px 10px',
                                        borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px'
                                    }}>
                                        <CheckCircle size={12} /> {activity.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VolunteerProfile;
