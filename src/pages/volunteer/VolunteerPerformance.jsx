import React, { useState } from 'react';
import './VolunteerPerformance.css';

const VolunteerPerformance = () => {
    const [timeFilter, setTimeFilter] = useState('14sets');

    return (
        <div className="performance-container">
            {/* Page Header */}
            <div className="perf-header-row">
                <h1 className="perf-title">PERFORMANCE</h1>
            </div>

            <div className="perf-grid">
                {/* Left Column */}
                <div className="left-col">

                    {/* Task Overview Cards */}
                    <section className="overview-row">
                        <div className="stat-box">
                            <span className="stat-label">TOTAL TASKS</span>
                            <div className="flex items-baseline mt-2">
                                <span className="big-number">32</span>
                                <span className="text-sm text-cyan-400">Completed</span>
                            </div>
                        </div>

                        <div className="stat-box success">
                            <span className="stat-label">SUCCESS RATE</span>
                            <div className="flex items-baseline mt-2">
                                <span className="big-number" style={{ color: '#10b981' }}>87%</span>
                                <span className="text-sm text-green-400">Resolved Successfully</span>
                            </div>
                        </div>
                    </section>

                    {/* Task Completion Chart */}
                    <section className="perf-card chart-container">
                        <div className="chart-header">
                            <h3 className="stat-label">TASK COMPLETION</h3>
                            <div className="time-filters">
                                {['6e/7Day', '7&15s', 'Hour', '10 Hours', '14sets', '24 Hours'].map(tf => (
                                    <button
                                        key={tf}
                                        className={`time-btn ${timeFilter === tf ? 'active' : ''}`}
                                        onClick={() => setTimeFilter(tf)}
                                    >
                                        {tf}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="chart-area">
                            {/* Y-Axis */}
                            <div className="y-axis">
                                <span>16</span>
                                <span>12</span>
                                <span>8</span>
                                <span>4</span>
                                <span>0</span>
                            </div>

                            {/* Bars */}
                            {[
                                { w: 'Week 1', b: 8, y: 0 },
                                { w: 'Week 2', b: 10, y: 7 },
                                { w: 'Week 3', b: 5, y: 0 },
                                { w: 'Week 4', b: 8, y: 10 },
                                { w: 'Week 5', b: 0, y: 12 }
                            ].map((data, idx) => (
                                <div key={idx} className="bar-group">
                                    <div className="bar blue" style={{ height: `${(data.b / 16) * 100}%` }}></div>
                                    <div className="bar yellow" style={{ height: `${(data.y / 16) * 100}%` }}></div>
                                    <span className="bar-label">{data.w}</span>
                                </div>
                            ))}
                        </div>

                        <div className="legend">
                            <div className="legend-item">
                                <span className="dot" style={{ background: '#2563eb' }}></span>
                                <span>Resolved</span>
                            </div>
                            <div className="legend-item">
                                <span className="dot" style={{ background: '#fbbf24' }}></span>
                                <span>Failed</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="right-col">
                    <section className="perf-card stats-card">
                        <h3 className="stat-label mb-4">TASK STATS</h3>

                        <div className="circular-stats-row">
                            <div className="circle-widget cyan">
                                <span className="circle-val">
                                    16<span className="text-xs">min</span>
                                </span>
                                <span className="circle-label">AVG RESOLUTION</span>
                            </div>

                            <div className="circle-widget red">
                                <span className="circle-val">9</span>
                                <span className="circle-label">CRITICAL TASKS</span>
                            </div>
                        </div>

                        <div className="big-circle-container">
                            <div className="circle-widget big-circle cyan">
                                <span className="circle-val">53.3<span className="text-sm">km</span></span>
                                <span className="circle-label">TASK DISTANCE</span>
                            </div>
                        </div>
                    </section>

                    <section className="perf-card">
                        <h3 className="stat-label mb-4">INCIDENT BREAKDOWN</h3>
                        <div className="breakdown-list">
                            <div className="breakdown-item">
                                <div className="breakdown-label">
                                    <span className="status-dot" style={{ background: '#8b5cf6' }}></span>
                                    Medical Emergencies
                                </div>
                                <div className="breakdown-val">15 <span className="percent">54%</span></div>
                            </div>
                            <div className="breakdown-item">
                                <div className="breakdown-label">
                                    <span className="status-dot" style={{ background: '#fbbf24' }}></span>
                                    Hazmat Incidents
                                </div>
                                <div className="breakdown-val">8 <span className="percent">25%</span></div>
                            </div>
                            <div className="breakdown-item">
                                <div className="breakdown-label">
                                    <span className="status-dot" style={{ background: '#ef4444' }}></span>
                                    Structural Damage
                                </div>
                                <div className="breakdown-val">6 <span className="percent">21%</span></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-600">
                Incident-SLR+performance metrics v.2.4
            </div>
        </div>
    );
};

export default VolunteerPerformance;
