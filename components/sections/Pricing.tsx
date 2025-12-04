'use client';

import { PRICING_PLANS } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
            Paket Konseling
          </h2>
          <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhanmu. Semua paket confidential dan professional.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              padding="lg"
              hover
              className={`relative ${plan.highlight ? 'border-4 border-[var(--color-coral)]' : ''
                }`}
            >
              {/* Badge */}
              {'badge' in plan && plan.badge && (
                <div className="absolute -top-4 right-6">
                  <div className="bg-[var(--color-coral)] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles size={14} />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[var(--color-teal)]">
                    {plan.price}
                  </span>
                </div>
                <p className="text-[var(--color-text-light)]">{plan.duration}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={14} className="text-green-600" />
                      </div>
                    </div>
                    <span className="text-[var(--color-text-dark)]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                size="lg"
                className="w-full"
                onClick={() => {
                  const bookingSection = document.getElementById('booking');
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Booking Sekarang
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-light)]">
            Pembayaran melalui transfer bank, e-wallet (Shopeepay, GoPay, DANA), atau QRIS
          </p>
        </div>
      </div>
    </section>
  );
}
