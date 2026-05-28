'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Settings, PenTool, Monitor, ArrowRight } from 'lucide-react';
import FloatingCAD from '@/components/3d/FloatingCAD';

const featuredCourses = [
  {
    title: 'CNC Machine Operating',
    icon: <Settings className="w-8 h-8 text-blue-600" />,
    duration: '4 Months',
    fees: '₹12,000',
    slug: 'cnc-operating',
  },
  {
    title: 'AutoCAD Mechanical/Civil',
    icon: <PenTool className="w-8 h-8 text-blue-600" />,
    duration: '2 Months',
    fees: '₹8,000',
    slug: 'autocad',
  },
  {
    title: 'MasterCAM (X5 to 2023)',
    icon: <Monitor className="w-8 h-8 text-blue-600" />,
    duration: '2 Months',
    fees: '₹14,000',
    slug: 'mastercam',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Subtle Faded Photographic Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/workshop-bg.png)' }}
        />
        
        {/* Gradient Overlay for Depth and Light Theme: 85% opaque #F5F7FA to white */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F5F7FA]/85 to-white/90" />

        <FloatingCAD />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center min-h-[90vh]">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Glassmorphism Text Container - Crisp and Defined */}
            <div className="bg-white/45 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-white/20 max-w-3xl mx-auto mt-12">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/30 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">Admissions Open 2026-2027</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-slate-900 tracking-tight leading-tight mb-6"
              >
                Master <span className="bg-gradient-to-r from-[#1D4ED8] to-[#0369A1] text-transparent bg-clip-text">CNC, CAD & CAM</span><br /> Technologies
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
              >
                Professional Industrial Training Institute Since 2010. Equip yourself with industry-ready skills for a thriving career in manufacturing and engineering.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link href="/courses" className="w-full sm:w-auto px-8 py-4 bg-[#1D4ED8] text-white font-semibold rounded-xl shadow-lg shadow-blue-700/30 hover:bg-[#1e40af] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Explore Courses
                  <ChevronRight size={20} />
                </Link>
                <Link href="/admissions" className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 font-semibold rounded-xl shadow-md border border-white hover:border-blue-200 hover:bg-white hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Apply for Admission
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Subtle scroll arrow at the very bottom */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: [0, 8, 0] }} 
          transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative z-20 border-y border-slate-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '20+' },
              { label: 'Students Trained', value: '5000+' },
              { label: 'Placement Rate', value: '100%' },
              { label: 'Expert Trainers', value: '10+' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 bg-slate-50 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Industry-Leading Programs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Hands-on training designed to bridge the gap between academic learning and industrial requirements.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group bg-white border border-slate-200"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{course.title}</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    Duration: <span className="font-semibold text-slate-900">{course.duration}</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    Fees: <span className="font-semibold text-slate-900">{course.fees}</span>
                  </li>
                </ul>
                <Link href={`/courses/${course.slug}`} className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1D4ED8] font-semibold rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors">
              View All Courses <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
