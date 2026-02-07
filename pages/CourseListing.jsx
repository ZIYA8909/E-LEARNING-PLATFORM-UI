import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Users } from 'lucide-react';

const CourseListing = ({ courses = [
  { id: 1, title: "Modern React Mastery", instructor: "Dr. Angela Yu", price: 94.99, level: "Beginner", students: "12k", rating: 4.8 },
  { id: 2, title: "UI Design Principles", instructor: "Gary Simon", price: 0, level: "Intermediate", students: "8k", rating: 4.9 },
  { id: 3, title: "Advanced Backend Logic", instructor: "Stephen Grider", price: 89.99, level: "Advanced", students: "5k", rating: 4.7 }
] }) => {
  return (
    <div className="max-w-7xl mx-auto p-8 animate-page-fade">
      {/* Header & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-white">Explore Courses</h1>
          <p className="text-white/50 mt-2 font-medium">Master your craft with our elite curriculum</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="glass bg-white/5 border-white/10 pl-12 pr-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-gold text-white w-full md:w-80"
            />
          </div>
          <button className="glass p-4 rounded-2xl text-white/60 hover:text-gold transition-colors border-white/10">
            <Filter size={24} />
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="glass p-8 rounded-[3rem] border-white/5 flex flex-col h-full hover:scale-[1.02] transition-all duration-500 hover:border-gold/30 group">
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white/10 text-white/40 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {course.level}
                </span>
                <div className="flex items-center gap-1 text-gold">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-white/80">{course.rating}</span>
                </div>
              </div>

              {/* Course Name - Dark Gold */}
              <h3 className="text-2xl font-black text-[#996515] mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                {course.title}
              </h3>
              
              {/* Mentor Name - Dark Gold */}
              <p className="text-[#996515]/80 font-bold text-sm tracking-wide">
                By {course.instructor}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-8 text-white/40 text-xs font-bold">
              <div className="flex items-center gap-1">
                <Users size={14} /> <span>{course.students} Learners</span>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-2xl font-black text-white">
                {course.price === 0 ? 'FREE' : `$${course.price}`}
              </span>
              <Link to={`/course/${course.id}`}>
                <button className="bg-gold hover:bg-gold-dark text-midnight px-8 py-3 rounded-2xl font-black text-sm transition-all hover:scale-105 border-none shadow-xl shadow-gold/10">
                  View Course
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;