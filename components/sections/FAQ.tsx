'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[var(--color-cream)]">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
            Pertanyaan yang sering ditanyakan seputar layanan konseling kami
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[var(--color-text-dark)]">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    'flex-shrink-0 text-[var(--color-teal)] transition-transform duration-200',
                    openIndex === index ? 'transform rotate-180' : ''
                  )}
                />
              </button>

              {/* Answer */}
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-6 pb-4 text-[var(--color-text-light)]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-light)] mb-4">
            Masih ada pertanyaan? Jangan ragu untuk menghubungi kami
          </p>
          <a
            href="#booking"
            className="inline-block text-[var(--color-teal)] font-semibold hover:text-[var(--color-teal-dark)] transition-colors"
          >
            Hubungi Kami →
          </a>
        </div>
      </div>
    </section>
  );
}
