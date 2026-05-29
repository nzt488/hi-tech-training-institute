'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, GraduationCap } from 'lucide-react';
import { courses } from '@/data/courses';

export default function AdmissionsPage() {
  const searchParams = useSearchParams();
  const defaultCourse = searchParams?.get('course') || '';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    qualification: '',
    course: defaultCourse,
    batchTiming: '',
    paymentMode: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setFormData(prev => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  const selectedCourseDetails = courses.find(c => c.slug === formData.course);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email && formData.phone && formData.qualification;
  const isStep2Valid = formData.course && formData.batchTiming && formData.paymentMode;

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[100px] -mr-[400px] -mt-[400px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
            <GraduationCap size={16} /> Admissions Open
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Apply for Admission</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Take the first step towards a rewarding engineering career. Fill out the application form below and our admissions team will contact you.
          </p>
        </motion.div>

        {/* Multi-step Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 md:p-20 text-center flex flex-col items-center justify-center min-h-[500px]"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="w-24 h-24 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-8"
                  >
                    <CheckCircle size={56} />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Submitted!</h2>
                  <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you, {formData.firstName}. Your application for {selectedCourseDetails?.title || 'the selected course'} has been received successfully.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-md mx-auto w-full text-left">
                    <h3 className="font-semibold text-slate-900 mb-4">Next Steps:</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs">1</span>
                        Our admissions counselor will call you within 24 hours.
                      </li>
                      <li className="flex gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs">2</span>
                        Visit the institute with your documents (Aadhar, Photos, Marksheets).
                      </li>
                      <li className="flex gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs">3</span>
                        Complete the fee payment to confirm your seat.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" className="flex flex-col min-h-[600px]">
                  
                  {/* Progress Header */}
                  <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4 w-full max-w-sm mx-auto">
                      <div className={`flex flex-col items-center gap-2 flex-1 ${step >= 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= 1 ? 'bg-blue-600 text-white border-blue-600' : 'bg-transparent border-slate-300'}`}>
                          1
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wide">Personal</span>
                      </div>
                      <div className={`h-0.5 flex-1 ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                      <div className={`flex flex-col items-center gap-2 flex-1 ${step >= 2 ? 'text-blue-600' : 'text-slate-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= 2 ? 'bg-blue-600 text-white border-blue-600' : 'bg-transparent border-slate-300'}`}>
                          2
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wide">Course</span>
                      </div>
                      <div className={`h-0.5 flex-1 ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                      <div className={`flex flex-col items-center gap-2 flex-1 ${step >= 3 ? 'text-blue-600' : 'text-slate-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= 3 ? 'bg-blue-600 text-white border-blue-600' : 'bg-transparent border-slate-300'}`}>
                          3
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wide">Review</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 md:p-12 flex-grow flex flex-col">
                    
                    <AnimatePresence mode="wait">
                      {/* STEP 1: Personal Details */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6 flex-grow"
                        >
                          <h2 className="text-2xl font-bold text-slate-900 mb-6">Personal Information</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                              <input type="text" required value={formData.firstName} onChange={e => updateForm('firstName', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                              <input type="text" required value={formData.lastName} onChange={e => updateForm('lastName', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                              <input type="email" required value={formData.email} onChange={e => updateForm('email', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                              <input type="tel" required value={formData.phone} onChange={e => updateForm('phone', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white" />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-slate-700 mb-1">Highest Qualification *</label>
                              <select required value={formData.qualification} onChange={e => updateForm('qualification', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white appearance-none">
                                <option value="">Select Qualification</option>
                                <option value="10th">10th Pass</option>
                                <option value="12th">12th Pass</option>
                                <option value="ITI">ITI</option>
                                <option value="Diploma">Diploma (Mechanical/Automobile/Production)</option>
                                <option value="BE/BTech">B.E / B.Tech</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 2: Course Selection */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6 flex-grow"
                        >
                          <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Preferences</h2>
                          
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Select Course *</label>
                            <select required value={formData.course} onChange={e => updateForm('course', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white appearance-none">
                              <option value="">Select a Course</option>
                              {courses.map(c => (
                                <option key={c.slug} value={c.slug}>{c.title}</option>
                              ))}
                            </select>
                          </div>

                          {selectedCourseDetails && (
                            <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 my-4 text-sm">
                              <div className="font-semibold text-blue-900 mb-2">Course Details:</div>
                              <ul className="space-y-1 text-blue-800">
                                <li>• <span className="font-medium">Fees:</span> {selectedCourseDetails.fees}</li>
                                <li>• <span className="font-medium">Duration:</span> {selectedCourseDetails.duration}</li>
                                {selectedCourseDetails.installment !== 'No Installments' && (
                                  <li>• <span className="font-medium">Installment Available:</span> {selectedCourseDetails.installment}</li>
                                )}
                              </ul>
                            </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Batch Timing *</label>
                              <select required value={formData.batchTiming} onChange={e => updateForm('batchTiming', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white appearance-none">
                                <option value="">Select Timing</option>
                                <option value="4:00 PM - 5:30 PM">4:00 PM - 5:30 PM</option>
                                <option value="5:30 PM - 7:00 PM">5:30 PM - 7:00 PM</option>
                                <option value="7:30 PM - 9:00 PM">7:30 PM - 9:00 PM</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Payment Mode *</label>
                              <select required value={formData.paymentMode} onChange={e => updateForm('paymentMode', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white appearance-none">
                                <option value="">Select Payment Mode</option>
                                <option value="One Time">One Time Full Payment</option>
                                <option value="Installments" disabled={selectedCourseDetails?.installment === 'No Installments'}>Installments (If applicable)</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3: Review */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6 flex-grow"
                        >
                          <h2 className="text-2xl font-bold text-slate-900 mb-6">Review Application</h2>
                          
                          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                              <div>
                                <h3 className="text-sm font-medium text-slate-500 uppercase mb-1">Personal Details</h3>
                                <div className="font-semibold text-slate-900">{formData.firstName} {formData.lastName}</div>
                                <div className="text-slate-600 text-sm mt-1">{formData.email}</div>
                                <div className="text-slate-600 text-sm mt-1">{formData.phone}</div>
                                <div className="text-slate-600 text-sm mt-1">Qual: {formData.qualification}</div>
                              </div>
                              
                              <div>
                                <h3 className="text-sm font-medium text-slate-500 uppercase mb-1">Course Details</h3>
                                <div className="font-semibold text-slate-900">{selectedCourseDetails?.title}</div>
                                <div className="text-slate-600 text-sm mt-1">Batch: {formData.batchTiming}</div>
                                <div className="text-slate-600 text-sm mt-1">Payment: {formData.paymentMode}</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                            <div className="mt-0.5 text-blue-600"><CheckCircle size={18} /></div>
                            <p className="text-sm text-blue-800">
                              By submitting this form, you agree to our terms and conditions. The application doesn't require any online payment. Fees are to be paid at the institute counter.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
                      {step > 1 ? (
                        <button 
                          type="button" 
                          onClick={handlePrev}
                          className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                          <ChevronLeft size={18} /> Back
                        </button>
                      ) : <div></div>}
                      
                      {step < 3 ? (
                        <button 
                          type="button" 
                          onClick={handleNext}
                          disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continue <ChevronRight size={18} />
                        </button>
                      ) : (
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                      )}
                    </div>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
}
