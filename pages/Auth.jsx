import React from 'react';
import { Button } from '../components/UI/Button';

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {/* Glassmorphism Form Card */}
      <div className="glass p-12 rounded-[3rem] w-full max-w-md border-white/20 animate-page-fade bg-white/90">
        <div className="mb-10">
          {/* UPDATED: Text color changed to black */}
          <h2 className="text-4xl font-black text-black mb-2">Welcome Back</h2>
          <p className="text-slate-600 font-medium">Login to continue learning</p>
        </div>

        <form className="space-y-6">
          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-slate-100 border-none p-4 rounded-2xl focus:ring-2 focus:ring-gold outline-none text-slate-900"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-slate-100 border-none p-4 rounded-2xl focus:ring-2 focus:ring-gold outline-none text-slate-900"
            />
          </div>
          
          <Button className="w-full bg-midnight text-gold py-4 rounded-2xl font-bold shadow-xl hover:bg-black transition-all">
            Login to Account
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Don't have an account? <span className="text-gold-dark font-bold cursor-pointer hover:underline">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;