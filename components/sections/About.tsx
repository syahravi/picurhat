import { COUNSELOR_INFO } from '@/lib/constants';
import { Heart, Check } from 'lucide-react';
import Image from 'next/image';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';

export function About() {
  return (
    <section id="about" className="relative bg-[var(--color-cream)]">
      <DecorativeCircles position="bottom-right" className="opacity-20" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 mb-4">
            <Heart className="text-[var(--color-coral)]" size={32} fill="currentColor" />
            <Heart className="text-[var(--color-coral)]" size={32} fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
            ABOUT ME
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4 border-b-2 border-[var(--color-text-dark)] pb-2 inline-block">
              {COUNSELOR_INFO.name}
            </h3>

            <p className="text-lg text-[var(--color-text-light)] mb-6 uppercase">
              {COUNSELOR_INFO.credentials}
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-[var(--color-text-dark)] mb-4">
                KEMAMPUAN:
              </h4>
              <ul className="space-y-3">
                {COUNSELOR_INFO.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-teal)] flex items-center justify-center">
                        <Check size={16} className="text-white" />
                      </div>
                    </div>
                    <span className="text-[var(--color-text-dark)] font-medium">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2 items-center">
              <Heart className="text-[var(--color-coral)]" size={28} fill="currentColor" />
              <Heart className="text-[var(--color-coral)]" size={24} fill="currentColor" />
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Placeholder for counselor photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-blue-gray)] rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-lg font-semibold mb-2">Counselor Photo</p>
                  <p className="text-sm opacity-80">
                    Add image at: {COUNSELOR_INFO.photo}
                  </p>
                </div>
              </div>
              {/* Uncomment when image is added:
              <Image
                src={COUNSELOR_INFO.photo}
                alt={COUNSELOR_INFO.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
