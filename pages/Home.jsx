import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { Sparkles, Play } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.toiimg.com/thumb/msid-122069034,width-1070,height-580,imgsize-181312,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" 
          alt="Premium Study Background"
          className="w-full h-full object-cover opacity-40 animate-float"
        />
        <div className="absolute inset-0 bg-midnight/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6">
        <div className="glass p-12 md:p-20 rounded-[4rem] text-center border-gold/20">
          <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-8 border border-gold/30">
            <Sparkles size={16} className="text-gold animate-pulse" />
            <span className="text-gold-light text-xs font-black tracking-widest uppercase">Elite Learning</span>
          </div>

          <div className="flex justify-center mb-6">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight typewriter">
              Build your future <span className="text-gold">today.</span>
            </h1>
          </div>

          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Master high-demand skills with our premium Midnight Gold curriculum 
            designed for the next generation of leaders.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/courses">
              <Button className="bg-gold hover:bg-gold-dark text-midnight px-12 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-gold/20 border-none transition-transform hover:scale-105">
                <Play size={20} fill="currentColor" className="inline mr-2" /> Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;