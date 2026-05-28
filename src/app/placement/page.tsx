'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PlacementPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
            <Target size={16} /> 100% Placement Assistance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Career, Our Priority</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Hi-Tech Training Institute, we don't just train you; we build your career. Our strong industry ties and dedicated placement cell ensure you get the best opportunities in manufacturing and engineering.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Career Opportunities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Top Career Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'CNC Programmer & Operator',
                desc: 'Operate and program advanced CNC machinery in top manufacturing units.',
                salary: '₹2.5L - ₹6.0L / Year'
              },
              {
                title: 'CAD/CAM Design Engineer',
                desc: 'Design intricate mechanical parts and create efficient toolpaths for production.',
                salary: '₹3.0L - ₹8.0L / Year'
              },
              {
                title: 'Quality Control Inspector',
                desc: 'Ensure precision and maintain high-quality standards in machined components.',
                salary: '₹2.5L - ₹5.5L / Year'
              }
            ].map((profile, i) => (
              <motion.div 
                key={profile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{profile.title}</h3>
                <p className="text-slate-600 text-sm mb-6 h-12">{profile.desc}</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Expected Salary Package</div>
                  <div className="text-blue-700 font-bold">{profile.salary}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Hire Our Students */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-slate-100 mb-20 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mb-20 opacity-60"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Industry Prefers Hi-Tech Students?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our curriculum is designed in consultation with industry experts. Students spend 80% of their time on practical training, making them productive from day one on the job.
              </p>
              
              <div className="space-y-4">
                {[
                  'Hands-on experience on industrial machines',
                  'Familiarity with the latest software versions',
                  'Understanding of industry-standard tolerances and GD&T',
                  'Strong foundation in engineering drawing interpretation',
                  'Ability to work independently on shop floors'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="text-blue-400" /> Hiring Partners Stats
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Manufacturing Sector</span>
                      <span className="font-semibold">65%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Automotive Industry</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Aerospace & Defense</span>
                      <span className="font-semibold">10%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to start your engineering career?</h3>
          <Link href="/admissions" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
            Apply for Admission Now
          </Link>
        </div>

      </div>
    </div>
  );
}
