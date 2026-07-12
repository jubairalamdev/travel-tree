'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'react-toastify';
import Button from '@/components/Button';
import Input from '@/components/Input';

type FormEvent = React.FormEvent;

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setLoading(false);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Visit Us', value: '455 West Orchard Street' },
    { icon: Phone, label: 'Call Us', value: '+92 (666) 888 0000' },
    { icon: Mail, label: 'Email Us', value: 'needhelp@company.com' },
    { icon: Clock, label: 'Working Hours', value: 'Mon–Fri, 9 AM – 6 PM' },
  ];

  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have a question about our tours or need help planning your next adventure?
            We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="John Doe"
                  className={`w-full ${errors.name ? 'border-red-400' : ''}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="you@example.com"
                  className={`w-full ${errors.email ? 'border-red-400' : ''}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  placeholder="Tour inquiry"
                  className={`w-full ${errors.subject ? 'border-red-400' : ''}`}
                />
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Tell us about your travel plans..."
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none ${errors.message ? 'border-red-400' : ''}`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{item.label}</h3>
                  <p className="text-gray-900 font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex flex-col items-center justify-center">
              <MapPin size={40} className="text-primary/40 mb-3" />
              <p className="text-gray-500 font-medium">Map Integration</p>
              <p className="text-gray-400 text-sm">Coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
