import React, { useState } from 'react';
import {
    Bell, Siren, RefreshCw, AlertTriangle, MessageSquare,
    Check, X, ChevronRight, Inbox
} from 'lucide-react';
import './VolunteerNotifications.css';

const VolunteerNotifications = () => {
    // Mock Data - Matching User Request Examples
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'URGENT', // urgent-red
            title: 'URGENT: CRITICAL MEDICAL EMERGENCY',
            desc: 'Sector 4 requires immediate support. Multiple casualties report. Medics en route, immediate assistance needed for triage.',
            time: '2 min ago',
            read: false
        },
        {
            id: 2,
            type: 'TASK', // task-yellow
            title: 'Task Reassigned',
            desc: 'Your supply run in Sector 6 has been transferred to Team Bravo. Proceed to new waypoints for Sector 8.',
            time: '13 min ago',
            read: false
        },
        {
            id: 3,
            type: 'WARNING', // warning-orange
            title: 'Hazard Warning: Sector 9',
            desc: 'Chemical leak detected. Avoid the industrial zone until further notice. Hazmat teams active in the area.',
            time: '43 min ago',
            read: true
        },
        {
            id: 4,
            type: 'MESSAGE', // message-cyan/blue
            title: 'New Message from Coordinator',
            desc: 'Great work on the evacuation task! Return to base for resupply once current sector is clear. Keep it up.',
            time: '1 hour ago',
            read: true
        },
    ]);

    const [filter, setFilter] = useState('ALL'); // ALL, URGENT, INFO (Task, Warning), MESSAGES

    // Filter Logic
    const filteredNotifications = notifications.filter(notif => {
        if (filter === 'ALL') return true;
        if (filter === 'URGENT') return notif.type === 'URGENT';
        if (filter === 'INFO') return notif.type === 'TASK' || notif.type === 'WARNING';
        if (filter === 'MESSAGES') return notif.type === 'MESSAGE';
        return true;
    });

    const markAllRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const deleteNotification = (id) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    return (
        <div className="notifications-page-container">
            {/* Header */}
            <header className="notifications-header">
                <div className="header-title-group">
                    <Bell size={28} className="text-[#00ffff]" />
                    <h1 className="page-title">NOTIFICATION CENTER</h1>
                </div>

                <div className="header-actions">
                    <div className="filter-tabs">
                        {['ALL', 'URGENT', 'INFO', 'MESSAGES'].map((tab) => (
                            <button
                                key={tab}
                                className={`filter-tab ${filter === tab ? 'active' : ''}`}
                                onClick={() => setFilter(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button className="mark-read-btn" onClick={markAllRead}>
                        Mark All Read
                    </button>
                </div>
            </header>

            {/* Notification List */}
            <div className="notification-list">
                {filteredNotifications.length > 0 ? (
                    filteredNotifications.map(notif => (
                        <NotificationCard
                            key={notif.id}
                            data={notif}
                            onDismiss={() => deleteNotification(notif.id)}
                        />
                    ))
                ) : (
                    <EmptyState />
                )}
            </div>
        </div>
    );
};

const NotificationCard = ({ data, onDismiss }) => {
    // Determine styles based on type
    const getCardStyles = (type) => {
        switch (type) {
            case 'URGENT':
                return {
                    className: 'card-urgent',
                    Icon: Siren,
                    titleColor: '#DC143C'
                };
            case 'TASK':
                return {
                    className: 'card-task',
                    Icon: RefreshCw,
                    titleColor: '#FFA500'
                };
            case 'WARNING':
                return {
                    className: 'card-warning',
                    Icon: AlertTriangle,
                    titleColor: '#FF6B35'
                };
            case 'MESSAGE':
                return {
                    className: 'card-message',
                    Icon: MessageSquare,
                    titleColor: '#00ffff'
                };
            default:
                return {
                    className: '',
                    Icon: Bell,
                    titleColor: '#fff'
                };
        }
    };

    const styles = getCardStyles(data.type);
    const IconComponent = styles.Icon;

    return (
        <div className={`notification-card ${styles.className}`}>
            {/* Icon Section */}
            <div className="card-icon">
                <IconComponent size={24} />
            </div>

            {/* Content Section */}
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title" style={{ color: styles.titleColor }}>
                        {data.title}
                    </h3>
                    <span className="card-timestamp">{data.time}</span>
                </div>

                <p className="card-description">
                    {data.desc}
                </p>

                {/* Actions */}
                <div className="card-actions">
                    {data.type === 'URGENT' && (
                        <button className="btn-action btn-primary-urgent">
                            View & Accept
                        </button>
                    )}

                    {data.type === 'MESSAGE' && (
                        <button className="btn-action btn-primary-message">
                            Reply
                        </button>
                    )}

                    <button className="btn-action btn-dismiss" onClick={onDismiss}>
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    );
};

const EmptyState = () => (
    <div className="empty-state">
        <div className="flex justify-center mb-4">
            <div className="p-4 bg-gray-800 rounded-full border border-gray-700">
                <Inbox size={48} className="text-gray-500" />
            </div>
        </div>
        <h3>No New Notifications</h3>
        <p>You're all caught up! Check back later for updates.</p>
    </div>
);

export default VolunteerNotifications;
