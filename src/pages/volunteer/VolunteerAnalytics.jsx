import React from 'react';
import {
    Award, TrendingUp, Clock, MapPin, CheckCircle,
    Star, Target, Zap, Activity
} from 'lucide-react';
import './VolunteerDashboard.css';

const VolunteerAnalytics = () => {
    return (
        <div className="p-6 md:p-8 space-y-8 animate-fade-in">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-white font-['Share_Tech_Mono'] mb-1">PERFORMANCE LOG</h1>
                    <p className="text-gray-400 text-sm">Volunteer ID: ALPHA-88 | Rank: #12</p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-xs text-cyan-400 uppercase tracking-widest mb-1">Global Standing</div>
                    <div className="text-3xl font-mono font-bold text-white">TOP 5%</div>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="TASKS COMPLETED" value="28" sub="+4 Today" icon={CheckCircle} color="text-green-400" />
                <StatCard label="AVG RESPONSE" value="8m 24s" sub="-12s vs avg" icon={Clock} color="text-cyan-400" />
                <StatCard label="DISTANCE" value="17.4 KM" sub="Sector 7 & 6" icon={MapPin} color="text-orange-400" />
                <StatCard label="SUCCESS RATE" value="96%" sub="Reliable" icon={Target} color="text-purple-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Visualizations (Left 2/3) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Activity Graph Placeholder */}
                    <div className="bg-[rgba(15,23,42,0.6)] border border-gray-800 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-white flex items-center gap-2">
                                <Activity size={18} className="text-cyan-400" /> RESPONSE TRENDS
                            </h3>
                            <div className="flex gap-2">
                                <span className="text-xs bg-cyan-900/40 text-cyan-400 px-2 py-1 rounded">WEEKLY</span>
                            </div>
                        </div>

                        {/* CSS-only Bar Chart */}
                        <div className="h-48 flex items-end justify-between gap-2 px-2">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <div key={i} className="w-full bg-gray-800 rounded-t relative group">
                                    <div
                                        className="absolute bottom-0 w-full bg-cyan-500/20 border-t border-cyan-500 hover:bg-cyan-500/40 transition-all duration-500"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                                        {h}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <Award size={18} className="text-yellow-400" /> EARNED BADGES
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <AchievementCard title="First Responder" desc="10 Tasks Done" icon={Zap} active />
                            <AchievementCard title="Speed Demon" desc="Avg < 10min" icon={TrendingUp} active />
                            <AchievementCard title="Reliable" desc="95%+ Success" icon={Star} active />
                            <AchievementCard title="Explorer" desc="50km Covered" icon={MapPin} locked />
                        </div>
                    </div>

                </div>

                {/* Leaderboard (Right 1/3) */}
                <div className="bg-[rgba(15,23,42,0.6)] border border-gray-800 rounded-xl p-6 h-fit">
                    <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Top Volunteers</h3>
                    <div className="space-y-4">
                        <LeaderboardItem rank="1" name="Sarah Connor" score="1240 XP" />
                        <LeaderboardItem rank="2" name="R. Neville" score="1150 XP" />
                        <LeaderboardItem rank="3" name="E. Ripley" score="1100 XP" />
                        <div className="border-t border-gray-700 my-2"></div>
                        <LeaderboardItem rank="12" name="You (Luke)" score="850 XP" highlight />
                        <LeaderboardItem rank="13" name="M. Watney" score="820 XP" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value, sub, icon: Icon, color }) => (
    <div className="bg-[rgba(15,23,42,0.6)] border border-gray-800 rounded-xl p-4 flex items-center gap-4 hover:border-gray-600 transition">
        <div className={`p-3 rounded-lg bg-gray-800 ${color}`}>
            <Icon size={24} />
        </div>
        <div>
            <div className="text-[10px] text-gray-500 font-bold tracking-wider">{label}</div>
            <div className="text-2xl font-mono font-bold text-white leading-none mb-1">{value}</div>
            <div className={`text-xs ${color} font-medium`}>{sub}</div>
        </div>
    </div>
);

const AchievementCard = ({ title, desc, icon: Icon, active, locked }) => (
    <div className={`p-4 rounded-xl border flex flex-col items-center text-center transition ${active ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-yellow-500/30' : 'bg-gray-900 border-gray-800 opacity-50'}`}>
        <div className={`mb-3 p-2 rounded-full ${active ? 'bg-yellow-500/20 text-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.3)]' : 'bg-gray-800 text-gray-600'}`}>
            <Icon size={20} />
        </div>
        <h4 className={`font-bold text-sm ${active ? 'text-white' : 'text-gray-500'}`}>{title}</h4>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
        {locked && <div className="mt-2 text-[10px] uppercase font-bold text-gray-600">Locked</div>}
    </div>
);

const LeaderboardItem = ({ rank, name, score, highlight }) => (
    <div className={`flex items-center justify-between p-2 rounded ${highlight ? 'bg-cyan-900/30 border border-cyan-500/30' : 'hover:bg-white/5'}`}>
        <div className="flex items-center gap-3">
            <span className={`w-6 text-center font-mono font-bold ${rank <= 3 ? 'text-yellow-400' : 'text-gray-500'}`}>#{rank}</span>
            <span className={`text-sm font-bold ${highlight ? 'text-cyan-400' : 'text-gray-300'}`}>{name}</span>
        </div>
        <span className="text-xs font-mono text-gray-400">{score}</span>
    </div>
);

export default VolunteerAnalytics;
