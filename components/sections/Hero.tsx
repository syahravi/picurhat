'use client';

import { HERO_CONTENT, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { MessageCircle, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-[var(--color-cream)] flex items-center overflow-hidden">
      {/* Decorative Circles */}
      <DecorativeCircles position="top-left" className="opacity-30" />
      <DecorativeCircles position="bottom-right" className="opacity-30" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-dark)] mb-6 animate-fade-in">
              {HERO_CONTENT.headline}
            </h1>

            {/* Value Props */}
            <div className="mb-6 space-y-3">
              {HERO_CONTENT.valueProps.map((prop, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl text-[var(--color-text-light)] animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {prop}
                </p>
              ))}
            </div>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-[var(--color-text-dark)] font-semibold mb-8">
              {HERO_CONTENT.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const bookingSection = document.getElementById('booking');
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <MessageCircle size={20} className="mr-2" />
                Booking Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const testimonialsSection = document.getElementById('testimonials');
                  if (testimonialsSection) {
                    testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Lihat Review
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 flex flex-col items-center lg:items-start">
              <p className="text-sm text-[var(--color-text-light)] mb-2">Geser untuk melihat review</p>
              <ArrowDown size={24} className="text-[var(--color-teal)] animate-bounce" />
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px]">
            {/* Placeholder
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-blue-gray)] rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-white p-8">
                <MessageCircle size={64} className="mx-auto mb-4" />
                <p className="text-xl font-semibold mb-2">Counseling Session Photo</p>
                <p className="text-sm opacity-80">
                  Add image at: {HERO_CONTENT.image}
                </p>
              </div>
            </div> */}
            <Image
              src={HERO_CONTENT.image}
              alt="Counseling session"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />


            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
              <p className="text-sm text-[var(--color-text-light)]">Mulai dari</p>
              <p className="text-2xl font-bold text-[var(--color-teal)]">Rp 25.000</p>
              <p className="text-xs text-[var(--color-text-light)]">per jam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
