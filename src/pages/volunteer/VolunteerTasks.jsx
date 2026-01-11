import React, { useState } from 'react';
import { Search, MapPin, Clock, ArrowRight, Shield, Zap, MessageSquare, Briefcase, Award, User, ChevronRight, Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import '../../styles/dashboard.css';
import './volunteer.css';
import AcceptTask from './AcceptTask';
import UpdateTaskStatus from './UpdateTaskStatus';

const VolunteerTasks = () => {
    // State to manage current view: 'dashboard', 'accept', 'status'
    const [currentView, setCurrentView] = useState('dashboard');
    const [selectedTask, setSelectedTask] = useState(null);

    // Mock Data
    const tasks = [
        {
            id: 1,
            title: "HAZMAT SPILL",
            subtitle: "Sector 8",
            description: "Chemical spill detected. Requires hazmat suit.",
            location: "SECTOR 8",
            distance: "3.2 km",
            eta: "5 min ago",
            evacuated: 17,
            urgency: "severe",
            color: "#bd00ff" // Purple/Severe
        },
        {
            id: 2,
            title: "SEVERE ACCIDENT",
            subtitle: "Urgent 6",
            description: "Traffic accident reported in Sector 6.",
            location: "SECTOR 6",
            distance: "1.2 km",
            eta: "Active Now",
            evacuated: null,
            urgency: "urgent",
            color: "#f59e0b" // Orange/Urgent
        }
    ];

    const activeTasks = [
        { id: 101, title: "DELIVER MEDICAL SUPPLIES", urgency: "URGENT", sector: "Sector 4", distance: "15 min", color: "#3b82f6" },
        { id: 102, title: "HAZMAT CLEANUP OPERATION", urgency: "HIGH PRIORITY", sector: "Sector 8", distance: "30 min", color: "#f59e0b" },
        { id: 103, title: "DISTRIBUTE FOOD PACKS", urgency: "STANDARD", sector: "Sector 3", distance: "50 min", color: "#10b981" }
    ];

    const handleAcceptTask = (task) => {
        setSelectedTask(task);
        setCurrentView('accept');
    };

    const handleViewDetails = (task) => {
        setSelectedTask(task);
        setCurrentView('status');
    };

    const handleBackToDashboard = () => {
        setCurrentView('dashboard');
        setSelectedTask(null);
    };

    const handleTaskUpdated = (status) => {
        console.log("Task Updated:", status);
        setCurrentView('dashboard');
        setSelectedTask(null);
    };

    // --- RENDER VIEWS ---

    if (currentView === 'accept') {
        return <AcceptTask task={selectedTask} onBack={handleBackToDashboard} onTaskList={handleBackToDashboard} />;
    }

    if (currentView === 'status') {
        return <UpdateTaskStatus task={selectedTask} onClose={handleBackToDashboard} onUpdate={handleTaskUpdated} />;
    }

    return (
        <div className="volunteer-grid"> {/* Used grid from CSS */}
            {/* LEFT PANEL */}
            <div className="left-panel">
                <div style={{ marginBottom: '20px' }}>
                    <h1 style={{ fontSize: '1.5rem', margin: '0 0 5px 0', letterSpacing: '1px', color: 'var(--text-secondary)' }}>
                        WELCOME BACK, <span style={{ color: '#fff' }}>VOLUNTEER501!</span>
                    </h1>
                </div>

                {/* Main Dashboard Card */}
                <div className="holo-card" style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 17, 26, 0.6) 100%)' }}>

                    {/* Header Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <button className="view-tasks-btn">
                            <span style={{ fontSize: '1rem', marginBottom: '2px' }}>^</span> VIEW TASKS
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                            <Briefcase size={16} /> ACTIVE TASKS <span style={{ color: '#fff', fontSize: '1.2rem', marginLeft: '5px' }}>12</span>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>NEW INCIDENT REPORTS</h3>

                    {/* Incidents List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
                        {/* Map visual background overlay for the incidents area */}
                        <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '60%', background: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png")', opacity: 0.05, pointerEvents: 'none', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center' }}></div>

                        {tasks.map(task => (
                            <div key={task.id}
                                className={`incident-item ${task.urgency}`}
                                onClick={() => handleAcceptTask(task)}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <AlertTriangle size={18} color={task.color} />
                                            <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fff' }}>{task.title}</span>
                                            <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{task.urgency}</span>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                            {task.subtitle}
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {task.eta}</span>
                                            {task.evacuated && <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Shield size={12} /> Evacuated: {task.evacuated}</span>}
                                        </div>
                                    </div>
                                    <ChevronRight size={20} color="var(--text-secondary)" />
                                </div>
                            </div>
                        ))}

                        <button style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            color: '#3b82f6',
                            padding: '12px',
                            borderRadius: '8px',
                            marginTop: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '10px',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            <AlertTriangle size={16} /> REPORT INCIDENT <span style={{ marginLeft: 'auto' }}><ChevronRight size={16} /></span>
                        </button>
                    </div>
                </div>

                <div style={{ margin: '20px 0 10px 0' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '1px' }}>TASK MANAGEMENT</h3>
                </div>

                {/* Active Tasks List */}
                <div className="tasks-list">
                    {activeTasks.map(task => (
                        <div key={task.id} className="holo-card" style={{ padding: '16px', marginBottom: '12px', background: 'rgba(30, 41, 59, 0.6)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <User size={20} color={task.color} />
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1rem', color: '#fff', textTransform: 'uppercase' }}>
                                            {task.title}
                                        </h4>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px', display: 'flex', gap: '10px' }}>
                                            <span style={{ color: task.color, fontWeight: 'bold' }}>{task.sector}</span>
                                            <span>{task.urgency}</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        {task.distance}
                                    </div>
                                    <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '4px', padding: '6px 12px', cursor: 'pointer', fontSize: '0.8rem' }} onClick={() => handleViewDetails(task)}>
                                        VIEW &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="right-panel">

                {/* Analytics Card */}
                <div className="holo-card" style={{ padding: '20px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '1px' }}>ANALYTICS</h3>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', opacity: 0.5 }}></div>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', opacity: 0.2 }}></div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>CRISIS STATS</div>
                    </div>

                    <div style={{ textAlign: 'center', padding: '10px 0', position: 'relative' }}>
                        {/* Circular Progress Placeholder */}
                        <div style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            border: '8px solid rgba(255,255,255,0.05)',
                            borderLeftColor: '#3b82f6',
                            borderTopColor: '#3b82f6',
                            margin: '0 auto 20px auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)'
                        }}>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>AVG RESPONSE</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1' }}>13</div>
                            <div style={{ fontSize: '0.8rem', color: '#fff' }}>min</div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.75rem', position: 'relative', zIndex: 2 }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#3b82f6' }}>93%</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.6rem', letterSpacing: '1px' }}>URGENT</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>23m</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.6rem', letterSpacing: '1px' }}>TIME SAVED</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>23m</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.6rem', letterSpacing: '1px' }}>INCIDENTS</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Task Stats Card */}
                <div className="holo-card" style={{ padding: '20px', height: 'fit-content' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '1px' }}>TASK STATS</h3>
                    </div>

                    {/* Bar Chart Mockup */}
                    <div style={{ height: '80px', display: 'flex', alignItems: 'flex-end', gap: '6px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '15px' }}>
                        {[40, 60, 30, 70, 50, 80, 40, 60, 90, 20, 50, 70, 60, 80, 50].map((h, i) => (
                            <div key={i} style={{ flex: 1, height: `${h}%`, background: i % 2 === 0 ? '#3b82f6' : 'rgba(59, 130, 246, 0.3)', borderRadius: '2px 2px 0 0' }}></div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: 'var(--text-secondary)', marginBottom: '20px', letterSpacing: '0.5px' }}>
                        <span>▲ SEVERE</span>
                        <span>▲ DANGEROUS</span>
                        <span>▼ MINORS</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3b82f6" /> Medkits</span>
                                <span style={{ fontWeight: 'bold' }}>65%</span>
                            </div>
                            <div className="progress-container" style={{ height: '6px', background: 'rgba(255,255,255,0.05)' }}>
                                <div className="progress-bar" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Briefcase size={14} color="#00f0ff" /> Hazmat Suits</span>
                                <span style={{ fontWeight: 'bold' }}>80%</span>
                            </div>
                            <div className="progress-container" style={{ height: '6px', background: 'rgba(255,255,255,0.05)' }}>
                                <div className="progress-bar" style={{ width: '80%', background: '#00f0ff' }}></div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Shield size={14} color="#3b82f6" /> Food Packs</span>
                                <span style={{ fontWeight: 'bold' }}>58%</span>
                            </div>
                            <div className="progress-container" style={{ height: '6px', background: 'rgba(255,255,255,0.05)' }}>
                                <div className="progress-bar" style={{ width: '58%' }}></div>
                            </div>
                        </div>
                    </div>

                    <button className="btn-primary" style={{ width: '100%', marginTop: '20px', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px' }}>
                        <TrendingUp size={16} /> VIEW ANALYTICS &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VolunteerTasks;
