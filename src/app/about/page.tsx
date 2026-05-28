'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const stats = [
  { icon: <Briefcase className="w-6 h-6" />, value: '20+', label: 'Years Experience' },
  { icon: <GraduationCap className="w-6 h-6" />, value: '2010', label: 'Established' },
  { icon: <Users className="w-6 h-6" />, value: '5000+', label: 'Students Trained' },
  { icon: <Award className="w-6 h-6" />, value: '100%', label: 'Job Assistance' },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Hi-Tech Training Institute</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Leading the way in industrial technical education since 2010. We specialize in providing hands-on training in CNC, CAD, CAM, and industrial automation to build the next generation of engineers.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Founder Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-lg text-blue-700 font-semibold text-sm mb-2">
              Founder & Principal
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Prashant Arun Ranadhir</h2>
            <p className="text-xl text-slate-500 font-medium pb-4 border-b border-slate-200">B.E Mechanical</p>
            
            <p className="text-slate-600 leading-relaxed">
              With over 20 years of rich industrial experience across various manufacturing sectors, Prashant Arun Ranadhir brings practical knowledge directly to the classroom. As an expert CNC/CAD/CAM Trainer, he has been successfully running the institute since 2010, bridging the gap between theoretical knowledge and industrial requirements.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Under his leadership, Hi-Tech Training Institute has become a premier destination for students seeking quality technical education and guaranteed placement assistance.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Affiliations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-slate-100 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#2563eb 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Recognitions & Affiliations</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 text-blue-600">
                  <Award size={32} />
                </div>
                <p className="font-semibold text-slate-700 max-w-[200px]">Indian Technical Education Society</p>
              </div>
              <div className="hidden md:block w-px h-24 bg-slate-200"></div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 text-blue-600">
                  <Award size={32} />
                </div>
                <p className="font-semibold text-slate-700 max-w-[200px]">National Board of Technical Education</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
