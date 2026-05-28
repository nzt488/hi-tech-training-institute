import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Clock, IndianRupee, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';
import { courses } from '@/data/courses';

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb & Back Link */}
        <div className="mb-8">
          <Link href="/courses" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Back to all courses
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 pointer-events-none"></div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 relative z-10 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-slate-600 mb-8 relative z-10 leading-relaxed">
                {course.description}
              </p>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 font-medium pt-1">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-6 md:p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Course Highlights</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Duration</div>
                    <div className="font-semibold text-slate-900">{course.duration}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Batch Timing</div>
                    <div className="font-semibold text-slate-900">{course.batchTiming}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <IndianRupee size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Fees</div>
                    <div className="font-semibold text-slate-900 text-xl">{course.fees}</div>
                    {course.installment !== 'No Installments' && (
                      <div className="text-sm text-emerald-600 mt-1 font-medium bg-emerald-50 inline-block px-2 py-0.5 rounded">
                        Installment: {course.installment}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500" /> Guaranteed Practical Training
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500" /> Job Placement Assistance
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500" /> Industry Expert Trainers
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  href={`/admissions?course=${course.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1"
                >
                  Apply for Admission
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
