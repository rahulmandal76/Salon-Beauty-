// Mock data for Maison Lumière salon & beauty academy

export const CATEGORIES = ['Women', 'Men', 'Wedding']

// Rate lists shown on the home "Service Menu" section.
// Organized by master category -> sub-category -> services.
export const RATE_MENU = {
  Women: {
    Hair: [
      { name: 'Signature Haircut & Style', price: 1400, image: '/images/service-haircut.png' },
      { name: 'Hair Spa Ritual', price: 2200, image: '/images/hairspa.jpg' },
      { name: 'Global Hair Colour', price: 3800, image: '/images/service-color.png' },
      { name: 'Balayage / Ombré', price: 5500, image: '/images/Balayage.jpg' },
      { name: 'Keratin Smoothening', price: 6500, image: '/images/KeratinSmoothening.jpg' },
    ],
    Beauty: [
      { name: 'Luminous Glow Facial', price: 2500, image: '/images/service-bridal.png' },
      { name: 'Classic Clean-Up', price: 900, image: '/images/service-brows.png' },
      { name: 'Full Arms Waxing', price: 600, image: '/images/service-waxing.png' },
      { name: 'Threading & Brow Shape', price: 250, image: '/images/service-brows.png' },
    ],
    Cosmetology: [
      { name: 'Skin Brightening Peel', price: 3200, image: '/images/service-facial.png' },
      { name: 'Anti-Ageing Treatment', price: 4500, image: '/images/AntiAgeing.jpg' },
      { name: 'Laser Hair Reduction', price: 5000, image: '/images/service-laser.png' },
      { name: 'Hydra Facial', price: 3800, image: '/images/hydraFacial.jpg' },
    ],
  },
  Men: {
    Hair: [
      { name: 'Precision Haircut', price: 900, image: '/images/haircut.jpg' },
      { name: 'Beard Sculpt & Trim', price: 500, image: '/images/service-beard.png' },
      { name: 'Hair Colour', price: 1800, image: '/images/man-haircolor.jpg' },
      { name: 'Scalp Detox Spa', price: 1600, image: '/images/Scalp Detox Spa.jpg' },
    ],
    Beauty: [
      { name: 'Charcoal Detox Facial', price: 1800, image: '/images/Charcoal Detox Facial.jpg' },
      { name: 'D-Tan Clean-Up', price: 800, image: '/images/de-tan.jpg' },
      { name: 'Full Body Wax', price: 2200, image: '/images/man-wax.jpg' },
    ],
    Cosmetology: [
      { name: 'Acne Control Treatment', price: 2800, image: '/images/acne-treat.jpg' },
      { name: 'Laser Hair Reduction', price: 4500, image: '/images/facial-hair man.jpg' },
      { name: 'Skin Resurfacing', price: 3500, image: '/images/haircut.jpg' },
    ],
  },
  Wedding: {
    Bridal: [
      { name: 'Bridal Makeup & Hair', price: 25000 },
      { name: 'Engagement Look', price: 15000 },
      { name: 'Reception Glam', price: 18000 },
    ],
    'Pre-Bridal': [
      { name: 'Pre-Bridal Glow Package', price: 22000 },
      { name: 'Bridal Hair Spa Course', price: 8000 },
    ],
    Groom: [
      { name: 'Groom Grooming Package', price: 9000 },
      { name: 'Groom Facial & Styling', price: 5000 },
    ],
  },
}

// Detailed service catalogue used inside the booking interface.
// Each service has a filter group used by the chip row.
const IMG = {
  haircut: '/images/service-haircut.png',
  facial: '/images/service-facial.png',
  massage: '/images/service-massage.png',
  color: '/images/service-color.png',
  bridal: '/images/service-bridal.png',
}

export const BOOKING_SERVICES = {
  Women: [
    {
      id: 'w-cut',
      name: 'Signature Haircut & Style',
      group: 'Haircuts',
      featured: true,
      duration: 45,
      description: 'Consultation, precision cut and a polished blow-dry finish.',
      price: 1400,
      image: IMG.haircut,
    },
    {
      id: 'w-balayage',
      name: 'Balayage / Ombré',
      group: 'Haircuts',
      featured: true,
      duration: 150,
      description: 'Hand-painted, dimensional colour for a sun-kissed look.',
      price: 5500,
      image: IMG.color,
    },
    {
      id: 'w-spa',
      name: 'Hair Spa Ritual',
      group: 'Haircuts',
      featured: false,
      duration: 60,
      description: 'Deep-conditioning treatment with a relaxing scalp massage.',
      price: 2200,
      image: IMG.massage,
    },
    {
      id: 'w-glow',
      name: 'Luminous Glow Facial',
      group: 'Facials',
      featured: true,
      duration: 60,
      description: 'Brightening facial that restores radiance and hydration.',
      price: 2500,
      image: IMG.facial,
    },
    {
      id: 'w-hydra',
      name: 'Hydra Facial',
      group: 'Facials',
      featured: false,
      duration: 75,
      description: 'Medical-grade resurfacing for instantly fresh skin.',
      price: 3800,
      image: IMG.facial,
    },
    {
      id: 'w-massage',
      name: 'Head & Shoulder Massage',
      group: 'Massages',
      featured: false,
      duration: 30,
      description: 'Tension-melting massage with warm aromatic oils.',
      price: 1200,
      image: IMG.massage,
    },
  ],
  Men: [
    {
      id: 'm-cut',
      name: 'Precision Haircut',
      group: 'Haircuts',
      featured: true,
      duration: 40,
      description: 'Tailored cut and styling shaped to your features.',
      price: 900,
      image: IMG.haircut,
    },
    {
      id: 'm-beard',
      name: 'Beard Sculpt & Trim',
      group: 'Haircuts',
      featured: true,
      duration: 25,
      description: 'Hot-towel beard shaping with a clean line-up.',
      price: 500,
      image: IMG.haircut,
    },
    {
      id: 'm-facial',
      name: 'Charcoal Detox Facial',
      group: 'Facials',
      featured: true,
      duration: 50,
      description: 'Deep-cleansing facial that purifies and refreshes.',
      price: 1800,
      image: IMG.facial,
    },
    {
      id: 'm-spa',
      name: 'Scalp Detox Spa',
      group: 'Massages',
      featured: false,
      duration: 45,
      description: 'Invigorating scalp treatment and relaxing massage.',
      price: 1600,
      image: IMG.massage,
    },
    {
      id: 'm-color',
      name: 'Hair Colour',
      group: 'Haircuts',
      featured: false,
      duration: 60,
      description: 'Natural-looking grey coverage or a fresh new shade.',
      price: 1800,
      image: IMG.color,
    },
  ],
  Wedding: [
    {
      id: 'wd-bridal',
      name: 'Bridal Makeup & Hair',
      group: 'Bridal',
      featured: true,
      duration: 180,
      description: 'Complete bridal look with HD makeup and styled hair.',
      price: 25000,
      image: IMG.bridal,
    },
    {
      id: 'wd-engagement',
      name: 'Engagement Look',
      group: 'Bridal',
      featured: true,
      duration: 120,
      description: 'Soft glam makeup and hairstyling for your big day.',
      price: 15000,
      image: IMG.bridal,
    },
    {
      id: 'wd-prebridal',
      name: 'Pre-Bridal Glow Package',
      group: 'Packages',
      featured: true,
      duration: 240,
      description: 'Multi-session skin, hair and body radiance programme.',
      price: 22000,
      image: IMG.facial,
    },
    {
      id: 'wd-groom',
      name: 'Groom Grooming Package',
      group: 'Packages',
      featured: false,
      duration: 90,
      description: 'Haircut, facial and styling for the groom.',
      price: 9000,
      image: IMG.haircut,
    },
  ],
}

export const SALON = {
  name: 'Maison Lumière',
  rating: 5.0,
  reviews: 482,
  address: '12 Rosewood Avenue, Bandra West, Mumbai',
  image: '/images/salon-interior.png',
}

export function formatPrice(value) {
  return '₹' + value.toLocaleString('en-IN')
}
