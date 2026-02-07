import React from 'react';
import { PlayCircle, CheckCircle, ChevronLeft } from 'lucide-react';
import { courses } from '../data/mockData';
import { Link } from 'react-router-dom';

const LearningInterface = () => {
  // Accessing course data - ensure course titles/instructors use the blue you requested
  const course = courses[0];

  return (
    <div className="flex flex-col lg:flex-row h-screen p-4 gap-4 animate-page-fade">
      {/* Video Player Section */}
      <div className="flex-1 flex flex-col glass rounded-[2.5rem] overflow-hidden relative border-white/10">
        <Link to="/dashboard" className="absolute top-6 left-6 z-20 glass p-3 rounded-full text-gold hover:bg-gold hover:text-midnight transition-all">
          <ChevronLeft />
        </Link>
        
        {/* Main Video Area */}
        <div className="flex-1 bg-black/40 flex items-center justify-center group">
           <PlayCircle size={100} className="text-gold opacity-40 group-hover:opacity-100 group-hover:scale-110 cursor-pointer transition-all duration-500" />
        </div>

        {/* Video Info Bar - Using Dark Blue as requested */}
        <div className="p-10 bg-white/10 backdrop-blur-md border-t border-white/10">
          <h1 className="text-3xl font-black text-[#1e3a8a]">{course.title}</h1>
          <p className="text-gold/80 mt-2 italic font-bold tracking-wide">
            Currently Playing: Module 1 - Introduction
          </p>
        </div>
      </div>

      {/* Course Sidebar Section */}
      <div className="w-full lg:w-96 glass rounded-[2.5rem] flex flex-col overflow-hidden border-white/10">
        <div className="p-8 border-b border-white/10">
          <h2 className="font-black text-gold text-2xl tracking-tighter">Course Content</h2>
          
          {/* Progress Bar - Gold Glow */}
          <div className="mt-6 bg-white/10 h-3 rounded-full overflow-hidden border border-white/5">
            <div className="bg-gold h-full w-[33%] rounded-full shadow-[0_0_15px_rgba(179,148,91,0.6)] transition-all duration-1000"></div>
          </div>
          <p className="text-[10px] font-black text-white/40 mt-3 uppercase tracking-[0.2em] text-center">
            33% Progress
          </p>
        </div>
        
        {/* Lessons List */}
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {course.syllabus.map(item => (
            <div key={item.id} className="p-6 flex items-center gap-5 border-b border-white/5 hover:bg-white/5 transition-all cursor-pointer group">
              {item.completed ? (
                <CheckCircle className="text-gold" size={24} />
              ) : (
                <PlayCircle className="text-white/20 group-hover:text-gold transition-colors" size={24} />
              )}
              <div>
                {/* Lesson title in Dark Blue for consistency */}
                <p className="text-sm font-black text-[#1e3a8a] group-hover:text-gold transition-colors">
                  {item.title}
                </p>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">
                  {item.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningInterface;