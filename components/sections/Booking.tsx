'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SITE_CONFIG, TIME_SLOTS } from '@/lib/constants';
import { BookingFormData } from '@/lib/types';
import { generateWhatsAppLink, formatDate, isValidIndonesianPhone } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Calendar, Clock, MessageCircle, Send } from 'lucide-react';
import { id } from 'date-fns/locale';

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    setIsSubmitting(true);

    // Generate WhatsApp message
    const message = `Halo! Saya ingin booking konseling:

Nama: ${data.name}
Kontak: ${data.contact}
Tanggal: ${formatDate(data.date)}
Jam: ${data.timeSlot}
${data.message ? `\nPesan tambahan: ${data.message}` : ''}

Terima kasih!`;

    // Generate WhatsApp link and open
    const whatsappLink = generateWhatsAppLink(SITE_CONFIG.whatsappNumber, message);
    window.open(whatsappLink, '_blank');

    setIsSubmitting(false);
  };

  const handleDirectWhatsApp = () => {
    const message = 'Halo! Saya ingin tanya tentang layanan konseling PI Curhat.';
    const whatsappLink = generateWhatsAppLink(SITE_CONFIG.whatsappNumber, message);
    window.open(whatsappLink, '_blank');
  };

  const today = new Date();

  return (
    <section id="booking" className="bg-white">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
            Booking Konseling
          </h2>
          <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
            Isi form di bawah ini atau langsung hubungi kami via WhatsApp
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <Card padding="lg" className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <Input
                  label="Nama Lengkap"
                  placeholder="Masukkan nama lengkap"
                  {...register('name', { required: 'Nama wajib diisi' })}
                  error={errors.name?.message}
                />

                {/* Contact */}
                <Input
                  label="Nomor WhatsApp"
                  placeholder="08xxxxxxxxxx"
                  {...register('contact', {
                    required: 'Nomor WhatsApp wajib diisi',
                    validate: (value) =>
                      isValidIndonesianPhone(value) || 'Nomor WhatsApp tidak valid',
                  })}
                  error={errors.contact?.message}
                />

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Tanggal Konseling
                  </label>
                  <Controller
                    name="date"
                    control={control}
                    rules={{ required: 'Tanggal wajib dipilih' }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        minDate={today}
                        dateFormat="dd MMMM yyyy"
                        locale={id}
                        placeholderText="Pilih tanggal"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)] focus:outline-none transition-colors"
                      />
                    )}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
                  )}
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                    <Clock className="inline mr-2" size={16} />
                    Jam Konseling
                  </label>
                  <Select
                    options={TIME_SLOTS.map((slot) => ({ value: slot, label: slot }))}
                    {...register('timeSlot', { required: 'Jam wajib dipilih' })}
                    error={errors.timeSlot?.message}
                  />
                </div>

                {/* Message (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
                    Pesan Tambahan (Opsional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Ceritakan sedikit tentang apa yang ingin kamu konsultasikan..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send size={18} className="mr-2" />
                  {isSubmitting ? 'Membuka WhatsApp...' : 'Booking via WhatsApp'}
                </Button>
              </form>
            </Card>

            {/* Direct WhatsApp */}
            <div className="space-y-6">
              <Card padding="lg" className="bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-dark)] text-white">
                <MessageCircle size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">Langsung Chat</h3>
                <p className="text-white/90 mb-6">
                  Atau langsung chat dengan kami via WhatsApp tanpa perlu isi form
                </p>
                <Button
                  onClick={handleDirectWhatsApp}
                  variant="secondary"
                  size="md"
                  className="w-full bg-white text-[var(--color-teal)] hover:bg-gray-100"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Chat WhatsApp
                </Button>
              </Card>

              <Card padding="lg" className="bg-[var(--color-cream)]">
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-3">
                  Info Penting
                </h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-light)]">
                  <li>• Konfirmasi booking max H-1</li>
                  <li>• Pembayaran sebelum sesi dimulai</li>
                  <li>• Bisa reschedule H-2</li>
                  <li>• Confidential & professional</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
