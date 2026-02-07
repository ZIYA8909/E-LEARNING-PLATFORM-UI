import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-2xl font-black text-white mb-4 italic">LEARN.LY</h3>
        <p className="text-sm leading-relaxed">
          The world's leading platform for high-quality, accessible education for everyone, everywhere.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4 text-lg">Platform</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-primary cursor-pointer">About Us</li>
          <li className="hover:text-primary cursor-pointer">Teach on Learn.ly</li>
          <li className="hover:text-primary cursor-pointer">Mobile App</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4 text-lg">Support</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-primary cursor-pointer">Help Center</li>
          <li className="hover:text-primary cursor-pointer">Contact Support</li>
          <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4 text-lg">Keep in Touch</h4>
        <div className="flex gap-4">
          <Facebook size={20} className="hover:text-primary cursor-pointer" />
          <Twitter size={20} className="hover:text-primary cursor-pointer" />
          <Instagram size={20} className="hover:text-primary cursor-pointer" />
          <Github size={20} className="hover:text-primary cursor-pointer" />
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-xs">
      © 2026 LEARN.LY E-Learning Platform. Designed with passion for learners.
    </div>
  </footer>
);

export default Footer;