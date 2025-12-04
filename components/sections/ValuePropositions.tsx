import { VALUE_PROPS, COUNSELOR_INFO } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Heart } from 'lucide-react';
import { DecorativeCirclesPattern } from '@/components/ui/DecorativeCircles';

export function ValuePropositions() {
  return (
    <section className="relative bg-white">
      <DecorativeCirclesPattern />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 mb-6">
            <Heart className="text-[var(--color-coral)]" size={32} fill="currentColor" />
            <Heart className="text-[var(--color-coral)]" size={32} fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
            Kamu Tidak Sendirian
          </h2>
          <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
            Kami hadir untuk mendengarkan, memahami, dan mendukungmu
          </p>
        </div>

        {/* Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {VALUE_PROPS.map((prop, index) => (
            <Card key={index} padding="lg" hover className="text-center">
              <Heart className="text-[var(--color-coral)] mx-auto mb-4" size={48} fill="currentColor" />
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">
                {prop.title}
              </h3>
              <p className="text-base font-medium text-[var(--color-coral)] mb-3">
                {prop.subtitle}
              </p>
              <p className="text-[var(--color-text-light)]">
                {prop.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Closing Message */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-3 mb-4">
            <Heart className="text-[var(--color-coral)]" size={24} fill="currentColor" />
          </div>
          <p className="text-xl font-semibold text-[var(--color-text-dark)]">
            {COUNSELOR_INFO.closingMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
