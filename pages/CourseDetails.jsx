import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, Clock, BarChart, Globe, ShieldCheck, ChevronLeft } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();

  // Mock data for the detailed view
  const course = {
    title: "Modern React Mastery",
    instructor: "Dr. Angela Yu",
    description: "Master React.js from scratch. Learn Hooks, Redux, and professional deployment workflows in this elite curriculum.",
    duration: "24 Hours",
    level: "Beginner",
    language: "English",
    curriculum: [
      { id: 1, title: "Introduction to React Concepts", duration: "45m" },
      { id: 2, title: "Understanding the Virtual DOM", duration: "1h 20m" },
      { id: 3, title: "State Management with Hooks", duration: "2h 15m" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-8 animate-page-fade">
      {/* Back Button */}
      <Link to="/courses" className="inline-flex items-center gap-2 text-white/60 hover:text-gold mb-8 transition-colors font-bold">
        <ChevronLeft size={20} /> Back to Courses
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Course Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass p-10 rounded-[3rem] border-white/5">
            {/* Dark Golden Heading */}
            <h1 className="text-4xl md:text-5xl font-black text-[#996515] mb-4">{course.title}</h1>
            <p className="text-[#996515]/80 font-bold text-lg mb-6">Instructor: {course.instructor}</p>
            <p className="text-white/70 leading-relaxed text-lg">{course.description}</p>
          </div>

          <div className="glass p-10 rounded-[3rem] border-white/5">
            <h2 className="text-2xl font-black text-white mb-6">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <PlayCircle className="text-gold opacity-50 group-hover:opacity-100" size={24} />
                    <span className="font-bold text-white/80 group-hover:text-white">{item.title}</span>
                  </div>
                  <span className="text-white/40 font-black text-xs uppercase tracking-widest">{item.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Enrollment Sidebar */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-[3rem] border-[#B3945B]/20 sticky top-8">
            <div className="aspect-video bg-black/40 rounded-2xl mb-6 flex items-center justify-center border border-white/5">
              <PlayCircle size={48} className="text-gold" />
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/70 font-bold">
                <Clock size={18} className="text-gold" /> <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 font-bold">
                <BarChart size={18} className="text-gold" /> <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 font-bold">
                <Globe size={18} className="text-gold" /> <span>{course.language}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 font-bold">
                <ShieldCheck size={18} className="text-gold" /> <span>Certificate of Completion</span>
              </div>
            </div>

            <button className="w-full bg-[#B3945B] hover:bg-[#996515] text-[#1A1A1A] py-5 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] shadow-xl shadow-gold/20 border-none">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;