'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { TESTIMONIALS } from '@/lib/constants';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="bg-[var(--color-cream)]">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400" size={24} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
            Beberapa Review Klien Aku
          </h2>
          <p className="text-lg text-[var(--color-text-light)]">
            FYI: Aku buka jasa curhat sejak Juni 2023
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="relative w-full aspect-[9/16] max-w-md mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    {/* Placeholder */}
                    <div className="text-center p-8">
                      <p className="text-gray-600 mb-2 font-semibold">Testimonial Screenshot</p>
                      <p className="text-sm text-gray-500">
                        Add image at: {testimonial.image}
                      </p>
                    </div>
                    {/* Uncomment when images are added:
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-[var(--color-teal)]" size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-[var(--color-teal)]" size={24} />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-light)] mb-4">
            Terima kasih kepada semua klien yang sudah mempercayai PI Curhat ❤️
          </p>
          <div className="flex justify-center items-center gap-2 text-[var(--color-teal)] font-semibold">
            <Star size={20} fill="currentColor" />
            <span>4.9/5 dari 100+ sesi konseling</span>
          </div>
        </div>
      </div>
    </section>
  );
}
