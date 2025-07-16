import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle, CheckCircle } from 'lucide-react';

// Import local images
import OfficeImage from '../assets/images/office.webp';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@linetab.us',
      description: 'General inquiries and support'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(206) 681-0952',
      description: 'Monday - Friday, 9 AM - 5 PM PST'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Seattle, WA',
      description: 'Serving dental practices nationwide'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '24-48 hours',
      description: 'We respond to all inquiries promptly'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please call us directly at (206) 681-0952.'
    },
    {
      question: 'Do you provide technical support for setup?',
      answer: 'Yes! Our expert team provides comprehensive support for initial setup, usage questions, and ongoing maintenance. We also have detailed setup guides available on our website.'
    },
    {
      question: 'What information should I include in my inquiry?',
      answer: 'Please include your practice name, contact information, and specific questions about LineTab. If you\'re experiencing issues, details about your current waterline system are helpful.'
    },
    {
      question: 'Is there a trial period available?',
      answer: 'Yes, we offer a 3-month trial period for new customers. Contact us to learn more about trial options and how to get started.'
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'We offer competitive pricing for larger orders. Contact our sales team to discuss volume pricing and delivery options for your practice.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          {/* Contact Information */}
          <div className="h-full">
            {/* Consolidated Contact Methods Card */}
            <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Contact Information</CardTitle>
                <CardDescription>Multiple ways to reach our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{info.label}</h3>
                      <p className="text-blue-600 font-medium">{info.value}</p>
                      <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Commitment</h3>
                  <p className="text-gray-600 text-sm">
                    Dedicated to providing dental professionals with reliable, effective waterline maintenance solutions 
                    and exceptional customer support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="h-full">
            <Card className="shadow-xl h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {submitStatus === 'success' ? (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Thank you for your message! We'll get back to you within 24-48 hours.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        rows={5}
                        className="bg-white resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-600" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Quick answers to common questions about LineTab and our support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Emergency or Urgent Issues?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              For urgent technical issues or emergency support needs, call us directly during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call (206) 681-0952
              </Button>
              <span className="text-gray-600">Monday - Friday, 9 AM - 5 PM PST</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage; 