'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Desai',
    course: 'CNC Programming',
    company: 'Tata Motors',
    text: 'The practical training at Hi-Tech was exactly what I needed. The trainers have real industry experience, and the curriculum covers everything from basics to advanced G-codes. I got placed within a week of course completion.',
    rating: 5,
  },
  {
    name: 'Amit Sharma',
    course: 'MasterCAM',
    company: 'Bharat Forge',
    text: 'I had theoretical knowledge from college, but Hi-Tech gave me the hands-on experience. The MasterCAM course taught me how to generate complex 3D toolpaths efficiently. Highly recommended for mechanical engineers.',
    rating: 5,
  },
  {
    name: 'Sneha Patil',
    course: 'AutoCAD Mechanical',
    company: 'L&T Heavy Engineering',
    text: 'The way they teach AutoCAD is very structured. Moving from 2D drafting to complex 3D solid modeling felt seamless. The continuous practice sessions in the lab made a huge difference.',
    rating: 5,
  },
  {
    name: 'Karan Singh',
    course: 'SolidWorks',
    company: 'Godrej Aerospace',
    text: 'Learning SolidWorks here was a game-changer for my career. The focus on top-down assembly and sheet metal methods was particularly useful for my current role. Great infrastructure and supportive staff.',
    rating: 5,
  },
  {
    name: 'Vikram Joshi',
    course: 'CNC Operating',
    company: 'Mahindra & Mahindra',
    text: 'I started as a fresher with no background in machining. The 4-month CNC operating course built my confidence. They teach you not just how to run the machine, but how to set it up properly and safely.',
    rating: 4,
  },
  {
    name: 'Pooja Verma',
    course: 'DEL-CAM',
    company: 'Minda Industries',
    text: 'The advanced high-speed machining techniques taught in the DEL-CAM course are perfectly aligned with what top companies look for. The placement cell was very active and helped me secure a great job.',
    rating: 5,
  }
];

export default function TestimonialsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Student Success Stories</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't just take our word for it. Hear what our alumni have to say about their learning experience and career growth after joining Hi-Tech Training Institute.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-blue-50 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    size={16} 
                    className={index < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"} 
                  />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 relative z-10 italic leading-relaxed h-32 overflow-hidden text-ellipsis">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-slate-100 pt-6 relative z-10">
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <div className="text-sm text-slate-500 mb-1">{testimonial.course}</div>
                <div className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">
                  Placed at {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
