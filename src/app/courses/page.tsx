'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, IndianRupee, Calendar } from 'lucide-react';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Training Programs</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Industry-aligned courses designed to make you job-ready. Learn from experts with our comprehensive curriculum and hands-on practical training.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 overflow-hidden group"
            >
              <div className="p-6 md:p-8 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {course.title}
                  </h2>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-6 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase">Duration</div>
                      <div className="text-sm font-semibold text-slate-800">{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase">Batch Timing</div>
                      <div className="text-sm font-semibold text-slate-800">{course.batchTiming}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IndianRupee className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase">Fees</div>
                      <div className="text-sm font-semibold text-slate-800">{course.fees}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-6 md:px-8 pb-6 md:pb-8 mt-auto pt-2">
                <Link 
                  href={`/courses/${course.slug}`}
                  className="flex items-center justify-center w-full py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  View Course Details
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
