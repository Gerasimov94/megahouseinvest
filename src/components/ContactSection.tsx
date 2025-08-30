'use client';

import { useState } from 'react';
import StatusMessage from '@/components/ui/StatusMessage';
import { COMPANY_CONTACTS } from '@/lib/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        console.error('Error:', data.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string): string => {
    // Удаляем все символы кроме цифр
    const phoneNumber = value.replace(/\D/g, '');

    // Если номер начинается с 8, заменяем на 7
    const normalizedNumber = phoneNumber.startsWith('8') ? '7' + phoneNumber.slice(1) : phoneNumber;

    // Применяем маску +7 (***) ***-**-**
    if (normalizedNumber.length === 0) return '';
    if (normalizedNumber.length <= 1) return '+7';
    if (normalizedNumber.length <= 4) return `+7 (${normalizedNumber.slice(1)}`;
    if (normalizedNumber.length <= 7) return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(4)}`;
    if (normalizedNumber.length <= 9) return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(4, 7)}-${normalizedNumber.slice(7)}`;
    return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(4, 7)}-${normalizedNumber.slice(7, 9)}-${normalizedNumber.slice(9, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="px-12 lg:px-16 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-lg text-primary-dark max-w-2xl mx-auto">
            Свяжитесь с нами для консультации по вашему проекту
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-primary-dark mb-8">
                Мы готовы ответить на все ваши вопросы и предложить оптимальные решения
                для строительства вашего дома.
              </h3>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Телефон</h4>
                  <a href={COMPANY_CONTACTS.phone.href} className="text-primary-dark hover:text-primary transition-colors">
                    {COMPANY_CONTACTS.phone.display}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href={COMPANY_CONTACTS.email.href} className="text-primary-dark hover:text-primary transition-colors">
                    {COMPANY_CONTACTS.email.display}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Адрес</h4>
                  <p className="text-primary-dark">
                    {COMPANY_CONTACTS.address.display}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Время работы</h4>
                  <p className="text-primary-dark">
                    {COMPANY_CONTACTS.workingHours.weekdays}<br />
                    {COMPANY_CONTACTS.workingHours.weekends}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - показывается первой на мобильных, второй на десктопе */}
          <div className="bg-muted p-8 rounded-2xl order-1 lg:order-2">
            <h3 className="text-xl font-bold font-display text-foreground mb-6">
              Оставить заявку
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="+7 (777) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Ваш email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о ваших пожеланиях"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Отправка...</span>
                  </>
                ) : (
                  <>
                    <span>Связаться с нами</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <StatusMessage
                  type="success"
                  message="Заявка отправлена! Мы свяжемся с вами в ближайшее время."
                />
              )}

              {submitStatus === 'error' && (
                <StatusMessage
                  type="error"
                  message={`Ошибка отправки. Попробуйте позже или свяжитесь по телефону: ${COMPANY_CONTACTS.phone.display}`}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}