import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Activity, Shield, Users } from 'lucide-react'
import '../../index.css'
import { signInWithPopup } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, googleProvider, db } from '../../firebase'

// Import Hero Images
import HeroCommunity from '../../assets/hero-community.png'
import HeroAgency from '../../assets/hero-agency.png'
import HeroVolunteer from '../../assets/hero-volunteer.png'

function Login() {
    const [role, setRole] = useState('community') // 'community' | 'agency' | 'volunteer'
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        if (role === 'community') {
            navigate('/dashboard/community');
        } else if (role === 'agency') {
            navigate('/dashboard/agency');
        } else if (role === 'volunteer') {
            navigate('/volunteer/dashboard');
        } else {
            // Fallback for demo
            navigate('/dashboard/community');
        }
    }

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Check if user exists in Firestore
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (!userDocSnap.exists()) {
                // Create new user document
                await setDoc(userDocRef, {
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    role: role, // Use the selected role from the state
                    createdAt: new Date()
                });
            }

            // Navigate based on selected role
            if (role === 'community') {
                navigate('/dashboard/community');
            } else if (role === 'agency') {
                navigate('/dashboard/agency');
            } else if (role === 'volunteer') {
                navigate('/volunteer/dashboard');
            } else {
                navigate('/dashboard/community');
            }

        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    }

    // Configuration for each role
    const roleConfig = {
        community: {
            image: HeroCommunity,
            title: "Community Resilience",
            desc: "Connect with neighbors and stay safe during emergencies.",
            color: "#3b82f6" // Blue
        },
        agency: {
            image: HeroAgency,
            title: "Agency Command",
            desc: "Coordinate rapid response and manage critical assets.",
            color: "#ef4444" // Red
        },
        volunteer: {
            image: HeroVolunteer,
            title: "Volunteer Action",
            desc: "Join the boots on the ground to save lives.",
            color: "#10b981" // Green
        }
    }

    const currentRole = roleConfig[role];

    return (
        <div className="app-container">
            {/* Moving Stars Background */}
            <div className="stars"></div>

            <div className="split-card-wrapper">
                {/* Left Side: Dynamic Hero Image */}
                <div className="hero-panel">
                    <img
                        src={currentRole.image}
                        alt={role}
                        className="hero-image"
                        key={role} // Force re-render animation
                    />
                    <div className="hero-overlay">
                        <div className="hero-text">
                            <h3>{currentRole.title}</h3>
                            <p>{currentRole.desc}</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="form-panel">
                    <div className="brand">
                        <div className="logo-text">
                            <Shield size={24} />
                            Crisis Command
                        </div>
                        <h2>Welcome Back</h2>
                        <p className="subtext">Secure access for {role} members.</p>
                    </div>

                    <div className="role-tabs">
                        <button
                            className={`role-tab ${role === 'community' ? 'active' : ''}`}
                            onClick={() => setRole('community')}
                        >
                            <Users size={16} style={{ marginBottom: '-2px' }} /> Community
                        </button>
                        <button
                            className={`role-tab ${role === 'agency' ? 'active' : ''}`}
                            onClick={() => setRole('agency')}
                        >
                            <Shield size={16} style={{ marginBottom: '-2px' }} /> Agency
                        </button>
                        <button
                            className={`role-tab ${role === 'volunteer' ? 'active' : ''}`}
                            onClick={() => setRole('volunteer')}
                        >
                            <Activity size={16} style={{ marginBottom: '-2px' }} /> Volunteer
                        </button>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="you@email.com"
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="input-field"
                            />
                        </div>

                        <div className="form-actions">
                            <label style={{ display: 'flex', gap: '8px', cursor: 'pointer' }}>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#" className="forgot-link">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            style={{
                                background: currentRole.color,
                                boxShadow: `0 4px 14px ${currentRole.color}66`
                            }}
                        >
                            Sign In
                        </button>
                    </form>

                    <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        <span style={{ padding: '0 10px', color: '#888', fontSize: '12px' }}>OR</span>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="google-btn"
                        style={{
                            width: '100%',
                            height: '52px',
                            padding: '0 1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#fff',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.2s',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                    >
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
                        Sign in with Google
                    </button>

                    <div className="footer-text">
                        New here? <a href="#">Create an account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
