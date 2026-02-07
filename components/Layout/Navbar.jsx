import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass mt-6 mx-6 px-8 py-4 rounded-[2rem] flex items-center justify-between border-white/10 sticky top-6 z-50">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-gold p-2 rounded-xl text-midnight shadow-lg shadow-gold/20">
          <BookOpen size={24} />
        </div>
        <span className="text-2xl font-black text-white tracking-tighter italic">LEARN.LY</span>
      </Link>

      {/* Navigation Links - Updated for high contrast */}
      <div className="hidden md:flex items-center gap-10">
        <Link to="/courses" className="text-white/70 hover:text-gold font-bold transition-all text-sm uppercase tracking-widest">Courses</Link>
        <Link to="/mentors" className="text-white/70 hover:text-gold font-bold transition-all text-sm uppercase tracking-widest">Mentors</Link>
        <Link to="/dashboard" className="text-white/70 hover:text-gold font-bold transition-all text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-gold pb-1">Dashboard</Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-white/40 hover:text-gold p-2 transition-colors">
          <Search size={20} />
        </button>
        <Link to="/auth">
          <button className="bg-gold hover:bg-gold-dark text-midnight px-8 py-3 rounded-2xl font-black text-sm shadow-xl shadow-gold/10 transition-all hover:scale-105 flex items-center gap-2 border-none">
            <User size={16} /> Join Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;