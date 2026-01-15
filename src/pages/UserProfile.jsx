import React from 'react';

const UserProfile = () => {
    return (
        <div style={{ padding: '2rem', color: 'white' }}>
            <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '2rem', marginBottom: '1rem' }}>User Profile</h1>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p>Profile settings and details will be displayed here.</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem' }}>Name</label>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Commander</div>
                    </div>
                    <div>
                        <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem' }}>Role</label>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#00f0ff' }}>Crisis Level: Alpha</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
