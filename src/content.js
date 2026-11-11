// Everything the site says lives here, so copy changes never touch layout code.
// Source for the copy and numbers: Anand's deck, Anand-Vijay-Portfolio-2026.pdf.

export const profile = {
  firstName: 'Anand',
  lastName: 'Vijay',
  handle: 'anand',
  tld: '.co',
  role: 'performance marketing strategist',
  location: 'noida, india',
  year: 2026,
  status: 'open to work',
}

export const hero = {
  //   keeps the dash on the same line as "strategist" when the tagline wraps on phones
  tagline: ['performance marketing strategist —', 'full-funnel growth on google & meta'],
  services: ['Google Ads', 'Meta Ads', 'GA4 & Analytics'],
  accent: 'based in india',
  cta: { label: 'View my work', href: '#work' },
}

// Contact icons in the nav.
export const contact = {
  email: 'anandvijay210@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anand-vijayy/',
  // wa.me needs the number with the country code and no + or spaces
  whatsapp: 'https://wa.me/918252909455',
}

export const terminal = {
  title: '~/anand — zsh',
  history: [
    { cmd: 'whoami', out: 'performance marketing — full-funnel growth on google & meta' },
    // `wide` entries only show on desktop; the mobile terminal keeps to one entry
    { cmd: 'stack --list', out: 'google ads · meta ads · ga4 · gtm · looker studio · hubspot', wide: true },
  ],
  typed: ['launch campaign --test', 'scale --winners', 'report --weekly'],
}

export const ctas = [
  { label: './view-work', href: '#work', primary: true },
  { label: './contact', href: '#contact' },
]

// Work section: Anand's ten client mandates, in the deck's order. The figures
// are the 2026 targets agreed with each client (monthly revenue unless marked),
// not results already delivered — keep the copy framed that way.
// Rows with a screenshot (public/work/, 1280×800) show the headline numbers in
// an `overlay` badge; rows without one show them as `screen` lines in a
// terminal-style frame. Add `href`/`host`/`linkLabel` to link a row.
export const work = {
  kicker: ['Ten mandates', 'I run end to end —', '2026 targets'],
  projects: [
    {
      id: 'seeaash',
      name: 'Seeaash',
      kind: 'revenue mandate',
      statusLabel: 'india',
      href: 'https://seeaash.in',
      host: 'seeaash.in',
      image: '/work/seeaash.webp',
      imageAlt: 'Seeaash storefront',
      overlay: '₹75 L → ₹2 Cr / month · 2.7× · ROAS 5+',
      description:
        'Triple monthly revenue to ₹2 Cr while holding blended ROAS at 5 or better — growth funded by efficiency, not by margin.',
      linkLabel: 'Visit now',
    },
    {
      id: 'nouria',
      name: 'Nouria',
      kind: 'revenue mandate',
      statusLabel: 'india',
      href: 'https://nouriadesign.com',
      host: 'nouriadesign.com',
      image: '/work/nouria.webp',
      imageAlt: 'Nouria storefront: “Owning it”, AW2026 collection',
      overlay: '₹10 L → ₹70 L / month · 7.0×',
      description:
        'Seven times the monthly run-rate inside a year without breaking contribution margin — the hardest multiple in the book.',
      linkLabel: 'Visit now',
    },
    {
      id: 'bajaao',
      name: 'Bajaao',
      kind: 'revenue mandate',
      statusLabel: 'india',
      description:
        'Double ₹3 Cr to ₹6 Cr a month on a deep catalogue with long consideration cycles and thin per-SKU volume.',
      screen: [
        ['$', 'mandate bajaao'],
        ['→', '₹3 Cr → ₹6 Cr / month'],
        ['→', '2.0× · kpi: blended cac'],
      ],
    },
    {
      id: 'homelivingfurniture',
      name: 'Home Living Furniture',
      kind: 'footfall mandate',
      statusLabel: 'usa',
      description:
        'Move 300 store visits a month to 1,000 across US metros, with cost per visit — not cost per click — as the number we manage.',
      screen: [
        ['$', 'mandate home-living-furniture'],
        ['→', '300 → 1,000 store visits / month'],
        ['→', '3.3× · kpi: cost per visit'],
      ],
    },
    {
      id: 'koshayoga',
      name: 'Kosha Yoga',
      kind: 'revenue mandate',
      statusLabel: 'india',
      description:
        'Grow ₹14 L to ₹25 L a month in a seasonal category with a short buying window and a naturally low repeat rate.',
      screen: [
        ['$', 'mandate kosha-yoga'],
        ['→', '₹14 L → ₹25 L / month'],
        ['→', '1.8× · focus: member ltv'],
      ],
    },
    {
      id: 'kaanjj',
      name: 'Kaanjj',
      kind: 'launch mandate',
      statusLabel: 'india',
      description:
        'A standing start to ₹15 L a month at ROAS 5 — the account has to be profitable on the first day it scales, not after it.',
      screen: [
        ['$', 'mandate kaanjj --launch'],
        ['→', '₹0 → ₹15 L / month'],
        ['→', 'new launch · kpi: roas 5'],
      ],
    },
    {
      id: 'mytvs',
      name: 'Mytvs',
      kind: 'launch mandate',
      statusLabel: 'india',
      description:
        'Zero to ₹20 L a month inside two quarters, with a channel mix that still works when the launch novelty wears off.',
      screen: [
        ['$', 'mandate mytvs --launch'],
        ['→', '₹0 → ₹20 L / month'],
        ['→', '6 months · launch → scale'],
      ],
    },
    {
      id: 'brightfutureschool',
      name: 'Bright Future School',
      kind: 'enrolment mandate',
      // the deck labels this India, but the school itself is in Ajman, UAE
      statusLabel: 'uae',
      href: 'https://brightfutureschool.ae',
      host: 'brightfutureschool.ae',
      image: '/work/brightfutureschool.webp',
      imageAlt: 'Bright Future Private School homepage: “Leading British Curriculum School in Ajman”',
      overlay: '100 → 300 admissions / year · 3.0×',
      description:
        'Triple admissions from 100 to 300 in one academic year, at a cost per admission the school can fund from fee revenue.',
      linkLabel: 'Visit now',
    },
    {
      id: 'swastikproduction',
      name: 'Swastik Production',
      kind: 'engagement mandate',
      statusLabel: 'india',
      description:
        'Build an owned audience across app downloads, video views and episode completion — managed as one funnel, not three reports.',
      screen: [
        ['$', 'mandate swastik-production'],
        ['→', 'no app base → full funnel'],
        ['→', '3 kpis · cpi · cpm · vtr'],
      ],
    },
    {
      id: 'ambrosia',
      name: 'Ambrosia',
      kind: 'launch mandate',
      statusLabel: 'india',
      href: 'https://ambrosiaindia.in',
      host: 'ambrosiaindia.in',
      image: '/work/ambrosia.webp',
      imageAlt: 'Ambrosia India storefront',
      overlay: '₹0 → ₹12 L / month in 12 months',
      description:
        'A standing start to ₹12 L a month in twelve months, built on acquisition that repeats without the launch discount.',
      linkLabel: 'Visit now',
    },
  ],
}

export const skills = [
  'Google Ads',
  'Meta Ads',
  'GA4',
  'Google Tag Manager',
  'Looker Studio',
  'HubSpot',
  'Zapier',
  'Excel',
]
