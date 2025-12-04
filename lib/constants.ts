export const SITE_CONFIG = {
  name: 'PI Curhat',
  tagline: 'Ruang Aman untuk Cerita & Healing',
  whatsappNumber: '6281234567890', // TODO: Replace with actual WhatsApp number
  email: 'hello@picurhat.com',
  instagram: '@picurhat',
  instagramUrl: 'https://instagram.com/picurhat',
  address: 'Jakarta, Indonesia',
} as const;

export const PRICING_PLANS = [
  {
    id: 'promo',
    name: 'Paket Promo',
    price: 'Rp 25.000 - 50.000',
    duration: 'per jam',
    badge: 'Limited Time',
    features: [
      'Konseling 1-on-1',
      'Sesi via WhatsApp Call/Video',
      'Fleksibel jadwal',
      'Confidential',
    ],
    highlight: true,
  },
  {
    id: 'normal',
    name: 'Paket Normal',
    price: 'Rp 90.000 - 110.000',
    duration: 'per jam',
    features: [
      'Konseling 1-on-1',
      'Sesi via WhatsApp Call/Video',
      'Fleksibel jadwal',
      'Confidential',
      'Follow-up notes',
    ],
    highlight: false,
  },
] as const;

export const TIME_SLOTS = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
] as const;

export const VALUE_PROPS = [
  {
    title: 'Gapapa untuk Merasa Tidak Baik-Baik Saja',
    subtitle: 'Gapapa Jika Merasa Putus Asa',
    description: 'Semua perasaanmu valid. Kamu berhak merasa sedih, lelah, atau putus asa. Ruang ini aman untukmu.',
  },
  {
    title: 'Kamu Pantas Dicintai dan Berharga',
    subtitle: 'Semua Perasaanmu Valid',
    description: 'Kehadiranmu berarti. Kamu layak mendapat cinta, perhatian, dan kebahagiaan dalam hidupmu.',
  },
  {
    title: 'Dirimu Tetap Berharga',
    subtitle: 'Kamu Sabar dan Kuat, Tapi Kamu Tetap Boleh Mengeluh Kok',
    description: 'Terlepas dari kelemahan dan kekuranganmu, kamu tetap berharga. Kamu boleh lelah dan mengeluh.',
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    image: '/images/testimonial-1.jpg',
    alt: 'Testimonial from client via WhatsApp',
  },
  {
    id: 2,
    image: '/images/testimonial-2.jpg',
    alt: 'Testimonial from client via WhatsApp',
  },
  {
    id: 3,
    image: '/images/testimonial-3.jpg',
    alt: 'Testimonial from client via WhatsApp',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Apa itu PI Curhat?',
    answer: 'PI Curhat adalah layanan konseling psikologi online yang memberikan ruang aman untuk kamu berbagi cerita dan mendapatkan dukungan profesional dari mahasiswa Bimbingan dan Konseling yang sedang belajar teknik psikologi konseling.',
  },
  {
    question: 'Bagaimana cara booking sesi konseling?',
    answer: 'Kamu bisa booking melalui form di website ini atau langsung chat via WhatsApp. Pilih tanggal dan jam yang kamu inginkan, lalu konfirmasi dengan kami. Proses booking sangat mudah dan cepat!',
  },
  {
    question: 'Berapa lama durasi satu sesi konseling?',
    answer: 'Satu sesi konseling berlangsung selama 1 jam. Kamu bisa memilih untuk melanjutkan dengan sesi tambahan jika merasa membutuhkannya.',
  },
  {
    question: 'Apakah kerahasiaan saya terjamin?',
    answer: 'Tentu saja! Semua percakapan dijamin kerahasiaannya sesuai dengan kode etik psikologi. Saya paham asas bimbingan konseling dan menjaga privasi klien dengan sangat serius. Rahasia dijamin aman!',
  },
  {
    question: 'Apa saja metode pembayaran yang tersedia?',
    answer: 'Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan QRIS. Detail pembayaran akan diberikan setelah konfirmasi booking.',
  },
  {
    question: 'Apa yang harus saya persiapkan untuk sesi pertama?',
    answer: 'Tidak perlu persiapan khusus! Yang penting kamu berada di tempat yang nyaman dan tenang saat sesi berlangsung. Pastikan koneksi internet stabil jika menggunakan video call. Yang terpenting, datang dengan hati terbuka untuk berbagi.',
  },
  {
    question: 'Bagaimana jika saya dalam kondisi krisis atau darurat?',
    answer: 'Jika kamu dalam kondisi krisis atau darurat mental health, sebaiknya segera menghubungi layanan darurat psikologi seperti hotline crisis (119 ext 8) atau pergi ke rumah sakit terdekat. PI Curhat lebih cocok untuk konseling non-krisis dan dukungan emosional sehari-hari.',
  },
  {
    question: 'Apakah saya bisa request konselor?',
    answer: 'Saat ini saya (Dinda Chairun Nissa) yang akan menangani sesi konseling kamu. Saya seorang mahasiswi Bimbingan dan Konseling dengan latar belakang ilmu psikologi konseling dan pendidikan.',
  },
] as const;

export const COUNSELOR_INFO = {
  name: 'Dinda Chairun Nissa',
  title: 'Mahasiswi Bimbingan dan Konseling',
  credentials: 'Seorang mahasiswi Bimbingan dan Konseling dengan latar belakang ilmu psikologi konseling dan pendidikan',
  capabilities: [
    'Active Listener',
    'Problem Solver',
    'Menguasai Teknik-Teknik Konseling',
    'Paham Asas Bimbingan Konseling (Rahasia Dijamin Aman)',
    'Open Minded dan Empati Tinggi',
  ],
  closingMessage: 'Yuk curhat dan konseling dengan aku, seorang mahasiswa Bimbingan dan Konseling',
  photo: '/images/counselor-photo.jpg',
} as const;

export const HERO_CONTENT = {
  headline: 'JASA CURHAT & TEMAN NGOBROL',
  valueProps: [
    'Untuk kamu yang ingin didengarkan...',
    'Ingin dimengerti...',
    'Ingin diberi saran...',
    'Ingin curhat dengan mahasiswa Bimbingan dan Konseling yang belajar teknik psikologi konseling',
  ],
  supportingText: 'Aku disini menyediakan jasa curhat untuk kamu yang butuh didengarkan dan butuh dikasih saran',
  image: '/images/hero-counseling.jpg',
} as const;
