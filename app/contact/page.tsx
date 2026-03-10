'use client';

import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/Button";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Client-side validation
  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone.trim() && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Formspree integration for GitHub Pages static hosting
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    
    if (!formspreeId) {
      // Fallback to mailto if Formspree not configured
      const mailtoSubject = encodeURIComponent(`Service Inquiry: ${formData.service}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Service: ${formData.service}\n\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:info@pcquanti.co.za?subject=${mailtoSubject}&body=${mailtoBody}`;
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error submitting your form. Please try emailing us directly at info@pcquanti.co.za');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <main className="py-16 sm:py-24">
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-pc-neutral-900 sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-pc-neutral-600 max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll respond within 24 hours with a tailored recommendation.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl border border-pc-neutral-200 shadow-sm">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-6">
                Request a Consultation
              </h2>
              
              <form onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-pc-neutral-600 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pc-gold focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-pc-neutral-200'
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-pc-neutral-600 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pc-gold focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-pc-neutral-200'
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-pc-neutral-600 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pc-gold focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-pc-neutral-200'
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-pc-neutral-600 mb-2">
                    Service Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pc-gold focus:border-transparent ${
                      errors.service ? 'border-red-500' : 'border-pc-neutral-200'
                    }`}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="">Select a service...</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Quantity Surveying">Quantity Surveying</option>
                    <option value="Contract Administration">Contract Administration</option>
                    <option value="Claims Management">Claims Management</option>
                    <option value="Project Controls">Project Controls</option>
                    <option value="Risk Management">Risk Management</option>
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1 text-sm text-red-500">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-pc-neutral-600 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pc-gold focus:border-transparent resize-y ${
                      errors.message ? 'border-red-500' : 'border-pc-neutral-200'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-6">
                  Direct Access
                </h2>
                <p className="text-pc-neutral-600 mb-6">
                  Whether you need project management, quantity surveying, contract support, or specialist guidance on a complex programme, we&apos;re ready to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-pc-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-pc-neutral-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-pc-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-pc-neutral-600 mb-1">Email</p>
                      <a href="mailto:info@pcquanti.co.za" className="text-pc-neutral-900 hover:text-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm">
                        info@pcquanti.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-pc-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-pc-neutral-600 mb-1">Phone</p>
                      <a href="https://wa.me/+27828632154" className="text-pc-neutral-900 hover:text-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm">
                        082 863 2154
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-pc-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-pc-neutral-600 mb-1">Location</p>
                      <p className="text-pc-neutral-900">
                        South Africa & United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-pc-neutral-50 p-6 rounded-xl border border-pc-neutral-200">
                <h3 className="text-lg font-semibold text-pc-neutral-900 mb-2">
                  Quick Response
                </h3>
                <p className="text-pc-neutral-600">
                  We aim to respond to all enquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
  );
}
