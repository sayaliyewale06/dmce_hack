import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, MapPin, CheckCircle, Cpu, Building2, Upload, AlertTriangle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ReportIncident.css';

// Fix Default Leaflet Icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const ReportIncident = () => {
    const navigate = useNavigate();

    // Map Center (Jersey City Area)
    const CENTER = [40.7282, -74.0776];

    // Simulated Locations with Real Coordinates
    const locations = [
        { name: 'Central Plaza', coords: [40.7282, -74.0776] },
        { name: 'Sector 7 Industrial', coords: [40.7350, -74.0600] },
        { name: 'North Residential', coords: [40.7400, -74.0800] },
        { name: 'East Power Grid', coords: [40.7200, -74.0500] },
        { name: 'West Harbor', coords: [40.7150, -74.0900] },
    ];

    // State
    const [formData, setFormData] = useState({
        type: '',
        location: '',
        severity: 'MODERATE',
        description: '',
        media: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState(null);

    // Custom Icon Setup
    const createCustomIcon = (active) => {
        return L.divIcon({
            html: `<div style="
                background: ${active ? '#f472b6' : '#60a5fa'};
                width: 16px; height: 16px;
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 0 10px ${active ? '#f472b6' : '#60a5fa'};
                animation: ${active ? 'pulse 1s infinite' : 'none'};
            "></div>`,
            className: 'custom-map-icon',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
    };

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    // Handler for form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handler for severity
    const handleSeverity = (level) => {
        setFormData(prev => ({ ...prev, severity: level }));
    };

    // Handler for Map Marker Click
    const handleMarkerClick = (locName) => {
        setFormData(prev => ({ ...prev, location: locName }));
    };

    // Component to handle map view updates
    const MapController = ({ selectedLoc }) => {
        const map = useMap();
        React.useEffect(() => {
            if (selectedLoc) {
                const loc = locations.find(l => l.name === selectedLoc);
                if (loc) {
                    map.flyTo(loc.coords, 14);
                }
            }
        }, [selectedLoc, map]);
        return null;
    };

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            showToast("Incident Reported Successfully!", "success");
            setTimeout(() => navigate('/dashboard/community'), 1500);
        }, 1500);
    };

    return (
        <div className="report-page-container">
            {/* Toast Notification */}
            {toast && (
                <div className="toast-container">
                    <div className={`glass-panel toast-msg ${toast.type}`} style={{
                        padding: '1rem',
                        borderLeft: `4px solid ${toast.type === 'success' ? '#10b981' : '#ef4444'}`,
                        background: 'rgba(15, 23, 42, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '10px'
                    }}>
                        {toast.type === 'success' ? <CheckCircle color="#10b981" size={20} /> : <AlertTriangle color="#ef4444" size={20} />}
                        <span style={{ color: '#fff' }}>{toast.message}</span>
                    </div>
                </div>
            )}

            {/* Header */}
            <header className="page-header">
                <div className="top-bar">
                    <h1 className="page-title">FILL INCIDENT REPORT</h1>
                    <button className="exit-btn" onClick={() => navigate('/dashboard/community')}>
                        Exit
                    </button>
                </div>
                <div className="breadcrumbs">
                    Dashboard <span>&gt;</span> Community Member <span>&gt;</span> Report Incident <span>&gt;</span> Fill Report Form
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">

                {/* Top Row: Form & Map */}
                <div className="top-row">
                    {/* Left Column: Form */}
                    <section className="glass-panel form-panel">
                        <div className="section-label">INCIDENT DETAILS:</div>

                        <form onSubmit={handleSubmit} className="form-section">

                            {/* Incident Type */}
                            <div className="form-group">
                                <label>Incident Type <span className="required">*</span></label>
                                <select
                                    name="type"
                                    className="futuristic-input"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Incident Type</option>
                                    <option value="Fire">Fire</option>
                                    <option value="Flood">Flood</option>
                                    <option value="Medical">Medical Emergency</option>
                                    <option value="Crime">Crime / Violence</option>
                                    <option value="Power">Power Outage</option>
                                    <option value="Gas">Gas Leak</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Location (Synced with Map) */}
                            <div className="form-group">
                                <label>Location <span className="required">*</span></label>
                                <select
                                    name="location"
                                    className="futuristic-input"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Location</option>
                                    {locations.map(loc => (
                                        <option key={loc.name} value={loc.name}>{loc.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Severity */}
                            <div className="form-group">
                                <label>Severity Level <span className="required">*</span></label>
                                <div className="severity-group">
                                    <button
                                        type="button"
                                        className={`severity-btn low ${formData.severity === 'LOW' ? 'active' : ''}`}
                                        onClick={() => handleSeverity('LOW')}
                                    >
                                        LOW
                                    </button>
                                    <button
                                        type="button"
                                        className={`severity-btn moderate ${formData.severity === 'MODERATE' ? 'active' : ''}`}
                                        onClick={() => handleSeverity('MODERATE')}
                                    >
                                        MODERATE
                                    </button>
                                    <button
                                        type="button"
                                        className={`severity-btn urgent ${formData.severity === 'URGENT' ? 'active' : ''}`}
                                        onClick={() => handleSeverity('URGENT')}
                                    >
                                        URGENT
                                    </button>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    name="description"
                                    className="futuristic-input description-area"
                                    rows="5"
                                    placeholder="Describe the incident..."
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {/* Media Upload */}
                            <div className="form-group">
                                <label className="upload-btn">
                                    <Camera size={20} />
                                    <input type="file" multiple hidden onChange={(e) => setFormData(p => ({ ...p, media: e.target.files }))} />
                                    UPLOAD PHOTOS / VIDEOS
                                </label>
                                {formData.media && <div className="file-preview">{formData.media.length} file(s) selected</div>}
                            </div>

                            {/* Actions */}
                            <div className="form-actions">
                                <button type="submit" className="submit-btn">
                                    {isSubmitting ? 'Processing...' : 'SUBMIT REPORT'}
                                </button>
                                <button type="button" className="cancel-btn" onClick={() => navigate('/dashboard/community')}>
                                    CANCEL
                                </button>
                            </div>

                        </form>
                    </section>

                    {/* Right Column: Interactive Map */}
                    <div className="right-col map-section-col">
                        <section className="glass-panel video-map-container" style={{ padding: 0, height: '100%', minHeight: '600px', overflow: 'hidden' }}>
                            <MapContainer
                                center={CENTER}
                                zoom={12}
                                style={{ height: '100%', width: '100%' }}
                                zoomControl={false}
                            >
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                    attribution='&copy; CARTO'
                                />

                                <MapController selectedLoc={formData.location} />

                                {locations.map(loc => (
                                    <Marker
                                        key={loc.name}
                                        position={loc.coords}
                                        icon={createCustomIcon(formData.location === loc.name)}
                                        eventHandlers={{
                                            click: () => handleMarkerClick(loc.name),
                                        }}
                                    >
                                        <Popup className="custom-popup-dark">
                                            <div className="p-2 text-center">
                                                <div className="font-bold text-cyan-400">{loc.name}</div>
                                                <div className="text-xs text-white">Click to Select</div>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </section>
                    </div>
                </div>

                {/* Bottom Feature Cards */}
                <div className="feature-cards">
                    <div className="feature-card">
                        <div className="card-icon"><Cpu size={24} /></div>
                        <h3>AI ASSESSMENT</h3>
                        <p>Severity Predicted</p>
                    </div>
                    <div className="feature-card">
                        <div className="card-icon"><CheckCircle size={24} /></div>
                        <h3>TASK TRACKING</h3>
                        <p>Incident Logged</p>
                    </div>
                    <div className="feature-card">
                        <div className="card-icon"><Building2 size={24} /></div>
                        <h3>RESOURCE MANAGEMENT</h3>
                        <p>Resources Allocated</p>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default ReportIncident;
