'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  lineId: z.string().optional(),
  placement: z.string().min(3, 'Placement info required'),
  size: z.string().min(2, 'Size info required'),
  budget: z.string().min(1, 'Budget info required'),
  message: z.string().min(10, 'Please provide more details'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const t = useTranslations('commissions');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual API endpoint (Resend/SendGrid)
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-6 bg-sumi">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-washi mb-4">
            {t('bookingFormTitle')}
          </h2>
          <p className="text-washi/70">
            {t('formIntro')}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-sumi/80 backdrop-blur-sm rounded-lg border border-washi/10 p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-washi font-semibold mb-2">
              {t('formName')} <span className="text-shu">*</span>
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-sumi border border-washi/20 rounded-lg text-washi focus:border-neon focus:outline-none transition-colors"
              placeholder={t('formNamePlaceholder')}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-shu">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-washi font-semibold mb-2">
              {t('formEmail')} <span className="text-shu">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-sumi border border-washi/20 rounded-lg text-washi focus:border-neon focus:outline-none transition-colors"
              placeholder={t('formEmailPlaceholder')}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-shu">{errors.email.message}</p>
            )}
          </div>

          {/* LINE ID */}
          <div>
            <label htmlFor="lineId" className="block text-washi font-semibold mb-2">
              {t('formLineId')} <span className="text-washi/40 text-sm">({t('optional')})</span>
            </label>
            <input
              {...register('lineId')}
              type="text"
              id="lineId"
              className="w-full px-4 py-3 bg-sumi border border-washi/20 rounded-lg text-washi focus:border-neon focus:outline-none transition-colors"
              placeholder={t('formLineIdPlaceholder')}
            />
          </div>

          {/* Placement & Size (Row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="placement" className="block text-washi font-semibold mb-2">
                {t('formPlacement')} <span className="text-shu">*</span>
              </label>
              <input
                {...register('placement')}
                type="text"
                id="placement"
                className="w-full px-4 py-3 bg-sumi border border-washi/20 rounded-lg text-washi focus:border-neon focus:outline-none transition-colors"
                placeholder={t('formPlacementPlaceholder')}
              />
              {errors.placement && (
                <p className="mt-2 text-sm text-shu">{errors.placement.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="size" className="block text-washi font-semibold mb-2">
                {t('formSize')} <span className="text-shu">*</span>
              </label>
              <input
                {...register('size')}
                type="text"
                id="size"
                className="w-full px-4 py-3 bg-sumi border border-washi/20 rounded-lg text-washi focus:border-neon focus:outline-none transition-colors"
                placeholder={t('formSizePlaceholder')}
              />
              {errors.size && (
                <p className="mt-2 text-sm text-shu">{errors.size.message}</p>
              )}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block text-washi font-semibold mb-2">
              {t('formBudget')} <span className="text-shu">*</span>
            </label>
            <input
              {...register('budget')}
              type="text"
              id="budget"
              className="w-full px-4 py-3 bg-sumi border border-washi/20 rounded-lg text-washi focus:border-neon focus:outline-none transition-colors"
              placeholder={t('formBudgetPlaceholder')}
            />
            {errors.budget && (
              <p className="mt-2 text-sm text-shu">{errors.budget.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-washi font-semibold mb-2">
              {t('formMessage')} <span className="text-shu">*</span>
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={6}
              className="w-full px-4 py-3 bg-sumi border border-washi/20 rounded-lg text-washi focus:border-neon focus:outline-none transition-colors resize-none"
              placeholder={t('formMessagePlaceholder')}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-shu">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-neon hover:bg-neon/90 text-sumi font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            <span className="relative z-10">
              {isSubmitting ? t('formSubmitting') : t('formSubmit')}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon via-ai to-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-neon/20 border border-neon/50 rounded-lg text-neon text-center">
              {t('formSuccess')}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-shu/20 border border-shu/50 rounded-lg text-shu text-center">
              {t('formError')}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
