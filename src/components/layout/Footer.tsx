import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                HT
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white tracking-tight">
                  HI-TECH
                </span>
                <span className="text-[10px] font-semibold text-blue-400 tracking-wider">
                  TRAINING INSTITUTE
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional Industrial Training Institute Since 2010. Affiliate to Indian Technical Education Society and National Board of Technical Education.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold">
                IN
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Institute', path: '/about' },
                { name: 'All Courses', path: '/courses' },
                { name: 'Placement & Career', path: '/placement' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Admissions', path: '/admissions' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Top Courses</h3>
            <ul className="space-y-3">
              {[
                { name: 'CNC Machine Operating', path: '/courses/cnc-operating' },
                { name: 'CNC Programming', path: '/courses/cnc-programming' },
                { name: 'AutoCAD Mechanical', path: '/courses/autocad' },
                { name: 'SolidWorks', path: '/courses/solidworks' },
                { name: 'MasterCAM', path: '/courses/mastercam' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-slate-400 leading-relaxed">
                  Shop No. 101, Industrial Tech Hub, Ulhasnagar, Maharashtra 421004, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <div className="flex flex-col text-sm text-slate-400">
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">+91-9876543210 (Main)</a>
                  <a href="tel:+919876543211" className="hover:text-white transition-colors">+91-9876543211 (Admissions)</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <div className="flex flex-col text-sm text-slate-400">
                  <a href="mailto:admissions@hitech-institute.in" className="hover:text-white transition-colors">admissions@hitech-institute.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 shrink-0 mt-0.5" size={18} />
                <div className="flex flex-col text-sm text-slate-400">
                  <span className="text-white">Monday to Saturday</span>
                  <span>4:00 PM - 9:30 PM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Hi-Tech Training Institute. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
