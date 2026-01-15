import React from 'react';
import {
    Box, Briefcase, Battery, Shield, Truck,
    Navigation, AlertCircle, PlusCircle, Search
} from 'lucide-react';
import './VolunteerDashboard.css';

const VolunteerResources = () => {
    const myEquipment = [
        { id: 1, name: 'First Aid Kit (L2)', status: 'Good', level: 85, icon: Briefcase, color: 'text-green-400' },
        { id: 2, name: 'Tactical Radio', status: 'Low Batt', level: 15, icon: Box, color: 'text-orange-400' },
        { id: 3, name: 'Safety Helmet', status: 'Good', level: 100, icon: Shield, color: 'text-blue-400' },
        { id: 4, name: 'Flashlight', status: 'Good', level: 90, icon: Battery, color: 'text-yellow-400' },
    ];

    const nearbyDepots = [
        { id: 101, name: 'Med Camp Alpha', sector: 'Sector 6', distance: '0.8 KM', type: 'Medical' },
        { id: 102, name: 'Supply Station 4', sector: 'Sector 7', distance: '1.2 KM', type: 'General' },
        { id: 103, name: 'Forward Post Delta', sector: 'Sector 5', distance: '2.4 KM', type: 'Equipment' },
    ];

    return (
        <div className="p-6 md:p-8 space-y-8">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-white font-['Share_Tech_Mono'] mb-2 flex items-center gap-3">
                    <Box className="text-cyan-400" /> RESOURCE MANAGEMENT
                </h1>
                <p className="text-gray-400 text-sm">Track personnel equipment and request resupply.</p>
            </div>

            {/* My Equipment Grid */}
            <section>
                <div className="vol-section-header">
                    <span>MY EQUIPMENT STATUS</span>
                    <span className="text-xs text-gray-500 font-mono">ID: VOL-ALPHA-88</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {myEquipment.map(item => (
                        <div key={item.id} className="bg-[rgba(15,23,42,0.6)] border border-gray-800 rounded-xl p-4 relative overflow-hidden group hover:border-cyan-500/50 transition">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                    <item.icon size={20} />
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded ${item.level < 30 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                                    {item.status}
                                </span>
                            </div>
                            <h3 className="text-white font-bold text-sm mb-1">{item.name}</h3>
                            <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${item.level < 30 ? 'bg-red-500' : 'bg-cyan-500'}`}
                                    style={{ width: `${item.level}%` }}
                                ></div>
                            </div>
                            <div className="text-right text-xs text-gray-500 mt-1">{item.level}% Condition</div>
                        </div>
                    ))}

                    {/* Add Item Card */}
                    <button className="border border-dashed border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/50 transition bg-transparent">
                        <PlusCircle size={24} />
                        <span className="text-sm font-bold">LOG ITEM</span>
                    </button>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Nearby Depots (2/3 width) */}
                <section className="lg:col-span-2">
                    <div className="vol-section-header">
                        <span>NEARBY SUPPLY DEPOTS</span>
                    </div>
                    <div className="bg-[rgba(15,23,42,0.6)] border border-gray-800 rounded-xl overflow-hidden">
                        {nearbyDepots.map((depot, index) => (
                            <div key={depot.id} className={`p-4 flex items-center justify-between hover:bg-white/5 transition border-gray-800 ${index !== nearbyDepots.length - 1 ? 'border-b' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <Truck size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{depot.name}</h4>
                                        <div className="text-xs text-gray-400 flex items-center gap-2">
                                            <span>{depot.type}</span> • <span className="text-cyan-400">{depot.sector}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-white font-bold font-mono">{depot.distance}</div>
                                    <button className="text-xs text-cyan-400 hover:underline flex items-center gap-1 mt-1">
                                        Route <Navigation size={10} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Request Form (1/3 width) */}
                <section>
                    <div className="vol-section-header">
                        <span>REQUEST SUPPLIES</span>
                    </div>
                    <div className="bg-[rgba(15,23,42,0.6)] border border-gray-800 rounded-xl p-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">RESOURCE TYPE</label>
                                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none">
                                    <option>Medical Supplies</option>
                                    <option>Water / Rations</option>
                                    <option>Battery / Power</option>
                                    <option>Rescue Tools</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">URGENCY</label>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-bold rounded border border-gray-700">NORMAL</button>
                                    <button className="flex-1 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 border border-red-900/50 text-xs font-bold rounded">CRITICAL</button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">NOTES</label>
                                <textarea
                                    rows="3"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white text-sm focus:border-cyan-500 focus:outline-none"
                                    placeholder="Describe specific needs..."
                                ></textarea>
                            </div>

                            <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-900/20 transition">
                                SUBMIT REQUEST
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VolunteerResources;
