import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, BookOpenCheck, Play } from 'lucide-react';

const Dashboard = ({ enrolledIds = ['1'] }) => {
  // Stats data using the Gold color (#B3945B)
  const stats = [
    { id: 1, label: 'Enrolled', value: enrolledIds.length, icon: <BookOpenCheck size={24} /> },
    { id: 2, label: 'Certificates', value: '12', icon: <Award size={24} /> },
    { id: 3, label: 'Study Hours', value: '48h', icon: <Clock size={24} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 animate-page-fade">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white drop-shadow-2xl">My Dashboard ✨</h1>
        <p className="text-white/60 mt-2 font-medium">Track your premium learning progress</p>
      </div>

      {/* Stats Grid - Using Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat) => (
          <div key={stat.id} className="glass p-8 rounded-[2.5rem] border-white/5 group hover:border-[#B3945B]/30 transition-all">
            <div className="text-[#B3945B] mb-4 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">
              {stat.label}
            </p>
            <h3 className="text-4xl font-black text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Active Courses Section */}
      <h2 className="text-2xl font-black text-white mb-8">Continue Learning</h2>
      <div className="grid gap-6">
        <div className="glass p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 border-white/5">
          <div className="flex-1 w-full text-left">
            {/* Dark Golden Title */}
            <h4 className="font-black text-xl text-[#996515]">Modern React Mastery</h4>
            <div className="w-full bg-white/10 h-3 rounded-full mt-4 overflow-hidden border border-white/5">
              <div className="bg-[#B3945B] h-full rounded-full shadow-[0_0_15px_rgba(179,148,91,0.4)]" style={{width: '45%'}}></div>
            </div>
            <p className="text-[10px] font-black text-white/30 mt-3 uppercase tracking-widest">45% Completed</p>
          </div>
          <Link to="/learn/1" className="w-full md:w-auto">
            <button className="w-full bg-[#B3945B] hover:bg-[#996515] text-[#1A1A1A] px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all hover:scale-105 border-none shadow-xl shadow-[#B3945B]/10">
              <Play size={18} fill="currentColor" /> Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;