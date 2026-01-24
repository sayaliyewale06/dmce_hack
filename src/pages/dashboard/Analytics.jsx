import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import {
  AlertTriangle, CheckCircle, Clock, Users, Search, Filter, MoreHorizontal, Activity,
  Shield, Flame, Stethoscope
} from 'lucide-react';

const Analytics = () => {
  // Mock Data for Top Cards
  const metrics = [
    {
      title: "INCIDENTS REPORTED",
      value: "128",
      subtitle: "In the last 24 hours",
      color: "#f97316", // Orange
      gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05))",
      border: "#f97316"
    },
    {
      title: "RESPONDED INCIDENTS",
      value: "118",
      subtitle: "In the last 24 hours",
      color: "#06b6d4", // Cyan
      gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.05))",
      border: "#06b6d4"
    },
    {
      title: "PENDING INCIDENTS",
      value: "10",
      subtitle: "Awaiting Response",
      color: "#f59e0b", // Amber/Yellow
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05))",
      border: "#f59e0b"
    },
    {
      title: "NEARBY RESPONDERS",
      value: "24",
      subtitle: "Currently Active Units",
      color: "#3b82f6", // Blue
      gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",
      border: "#3b82f6"
    }
  ];

  // Mock Data for Bar Chart
  const barData = [
    { name: 'MON', Medical: 198, Fire: 120, Security: 80 },
    { name: 'TUE', Medical: 242, Fire: 130, Security: 90 },
    { name: 'WED', Medical: 273, Fire: 150, Security: 100 },
    { name: 'THU', Medical: 315, Fire: 170, Security: 110 },
    { name: 'FRI', Medical: 221, Fire: 140, Security: 95 },
    { name: 'SAT', Medical: 132, Fire: 90, Security: 60 },
    { name: 'SUN', Medical: 88, Fire: 50, Security: 40 },
  ];

  // Mock Data for Pie Charts
  const typeData = [
    { name: 'Medical', value: 38, color: '#3b82f6' },
    { name: 'Fire', value: 35, color: '#f97316' },
    { name: 'Security', value: 27, color: '#ef4444' },
  ];

  const responseTimeData = [
    { name: 'Under 10 Min', value: 23, color: '#f59e0b' }, // Amber - using amber for "Under 10" based on screenshot palette roughly
    { name: '10-30 Min', value: 16, color: '#10b981' },   // Green
    { name: 'Over 30 Min', value: 16, color: '#ef4444' },  // Red
    // The screenshot has 4 slices in right pie chart (23, 16, 16, 38 actually matches left, wait, let's match screenshot visual labels)
    // Screenshot labels: Under 10 Min, 10-30 Min, Over 30 Min. But chart shows 4 slices? 
    // Wait, the text descriptions below the chart don't strictly match the slices. 
    // I will try to match the visible labels roughly.
    // Let's stick to the 3 labels shown in the legend of the screenshot for the right chart: Under 10, 10-30, Over 30.
    // Wait, the screenshot shows 23%, 16%, 16% visible. The remaining piece is likely "Other" or implied.
    // I will add "Other" to make it 100%.
    { name: 'Other', value: 45, color: '#64748b' }
  ];

  // Mock Data for Recent Incidents
  const recentIncidents = [
    { id: 1, type: 'Fire', location: 'Industrial Zone, Sector 3', responders: 'Rescue Team 7', time: '2 mins ago', status: 'DISPATCHED', icon: Flame, iconColor: '#ef4444' },
    { id: 2, type: 'Medical', location: 'Willow District', responders: 'Med Team 4', time: '12 minutes ago', status: 'RESOLVED', icon: Stethoscope, iconColor: '#3b82f6' },
    { id: 3, type: 'Security', location: 'Eastgate Mall', responders: 'SWAT Unit 1', time: '5 minute ago', status: 'RESPONDING', icon: Shield, iconColor: '#ef4444' }, // Screenshot says "RESPONDING" is yellow/orange
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'DISPATCHED': return { text: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)', border: '#ef4444' }; // Reddish
      case 'RESOLVED': return { text: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', border: '#10b981' };   // Green
      case 'RESPONDING': return { text: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', border: '#f59e0b' };  // Amber
      case 'CRITICAL': return { text: '#ef4444', bg: 'rgba(239, 68, 68, 0.2)', border: '#ef4444' };
      default: return { text: '#94a3b8', bg: 'rgba(148, 163, 184, 0.1)', border: '#94a3b8' };
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '4px' }}>
          <p style={{ color: '#fff', fontSize: '12px' }}>{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color, fontSize: '12px' }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ color: 'white', fontFamily: "'Rajdhani', sans-serif" }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '1px' }}>ANALYTICS</h1>

      {/* Metrics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {metrics.map((metric, index) => (
          <div key={index} style={{
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.05)',
            borderLeft: `4px solid ${metric.border}`,
            background: `linear-gradient(90deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.5) 100%)`,
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Glow effect */}
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              background: metric.gradient, pointerEvents: 'none'
            }} />

            <h3 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '600' }}>{metric.title}</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: metric.color, lineHeight: 1 }}>{metric.value}</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>{metric.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Bar Chart - Incidents Overview */}
        <div style={{ gridColumn: 'span 7', background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>INCIDENTS OVERVIEW</h3>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
              <span style={{ color: '#00f0ff', borderBottom: '2px solid #00f0ff', paddingBottom: '2px', cursor: 'pointer' }}>24 HOURS</span>
              <span style={{ color: '#94a3b8', cursor: 'pointer' }}>7 DAYS</span>
              <span style={{ color: '#94a3b8', cursor: 'pointer' }}>30 DAYS</span>
            </div>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                <Bar dataKey="Medical" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                {/* To mimic the gradient look in screenshot, we'd need SVG gradients, keeping it simple solid for now matching generic bar chart look or multi-bar if needed. 
                      Screenshot appears to be one main metric or stacked? It looks like single bars per day actually, colored by urgency or random? 
                      Wait, the legend says "Medical, Fire, Security".
                      The screenshot bars look like single bars with a gradient orange color. 
                      But there's a legend "Medical (Blue), Fire (Orange), Security (Red)".
                      The bars in the screenshot are all distinct heights but look like they might be separate series or just total?
                      Actually, looking at the screenshot 'Incidents Overview' chart:
                      It has days MON TUE WED etc.
                      Bars are orange gradients.
                      But the legend below says Medical(Blue) Fire(Orange) Security(Red). 
                      This is slightly contradictory if the bars are all orange. 
                      Maybe it's a "Total" view selected?
                      I will implement a stacked bar or grouped bar to show all 3 dimensions since the legend implies it.
                  */}
                <Bar dataKey="Fire" fill="#f97316" radius={[4, 4, 0, 0]} maxBarSize={40} />
                <Bar dataKey="Security" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3b82f6' }} /> Medical
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f97316' }} /> Fire
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} /> Security
            </div>
          </div>
        </div>

        {/* Pie Charts - Incident Types */}
        <div style={{ gridColumn: 'span 5', background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.5px', marginBottom: '1.5rem' }}>INCIDENT TYPES</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '220px' }}>
            {/* Chart 1 */}
            <div style={{ position: 'relative', width: '140px', height: '140px' }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={typeData} innerRadius={45} outerRadius={65} paddingAngle={5} dataKey="value" stroke="none">
                    {typeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f97316' }}>37%</span>
              </div>
            </div>

            {/* Chart 2 */}
            <div style={{ position: 'relative', width: '140px', height: '140px' }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={responseTimeData} innerRadius={45} outerRadius={65} paddingAngle={5} dataKey="value" stroke="none">
                    {responseTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444' }}>16%</span>
              </div>
            </div>
          </div>

          {/* Legends */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div>
              {typeData.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }} /> {item.name}
                  </span>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
            <div>
              {responseTimeData.filter(x => x.name !== 'Other').map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }} /> {item.name}
                  </span>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Incidents Table */}
      <div style={{ background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>RECENT INCIDENTS</h3>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Filter by urgency"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                padding: '0.5rem 1rem 0.5rem 2.5rem',
                color: 'white',
                fontSize: '0.85rem',
                outline: 'none',
                width: '200px'
              }}
            />
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.05)', textAlign: 'left' }}>
                <th style={{ padding: '1rem', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem' }}>Incident</th>
                <th style={{ padding: '1rem', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem' }}>Location</th>
                <th style={{ padding: '1rem', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem' }}>Responders</th>
                <th style={{ padding: '1rem', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem' }}>Time</th>
                <th style={{ padding: '1rem', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem', textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentIncidents.map((incident) => {
                const statusStyle = getStatusColor(incident.status);
                return (
                  <tr key={incident.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <incident.icon size={18} color={incident.iconColor} />
                        <span style={{ fontWeight: '600' }}>{incident.type}</span>
                        <span style={{
                          fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '4px',
                          background: statusStyle.bg, color: statusStyle.text, border: `1px solid ${statusStyle.border}`,
                          fontWeight: 'bold', letterSpacing: '0.5px'
                        }}>
                          {incident.status}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', color: '#cbd5e1' }}>{incident.location}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ background: 'rgba(51, 65, 85, 0.5)', padding: '0.25rem 0.75rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem' }}>
                        {incident.responders}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>{incident.time}</td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <MoreHorizontal size={18} color="#64748b" style={{ cursor: 'pointer' }} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
