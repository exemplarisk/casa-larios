import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
export const navLinks = [
    {
        name: "About Us",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
    {
        name: "Find",
        href: "/find",
    },
    {
        name: "Images",
        href: "/images",
    },
    {
        name: "Book",
        href: "/book",
    },
];

export const features = [
    {
        name: '82 sqm apartment',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Nice neighborhood',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Animal Friendly',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
    {
        name: '6 beds',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
    },
]

export const aboutTitles = [
  {
    title: 'Apartment Overview',
  },
  {
    title: 'Location',
  },
  {
    title: 'Cost',
  },
  {
    title: 'Pool Area',
  },
  {
    title: 'Nearby Restaurants',
  },
  {
    title: 'Nearby Shopping',
  },
]

export const aboutData = [
  {
    id: 1,
    description:
      '82 Sqm, 2 Bedrooms, 6 beds, 2 Bathrooms, kitchen, large terrasse',
    parent: 'Apartment Overview',
  },
  {
    id: 2,
    description: 'Large outdoor pool area',
    parent: 'Apartment Overview',
  },
  {
    id: 3,
    description: 'Wifi: Fiber 100/100',
    parent: 'Apartment Overview',
  },
  {
    id: 4,
    description: 'Dish washer, washing machine, TV, books',
    parent: 'Apartment Overview',
  },
  {
    id: 5,
    description: 'Closest airport: Alicante',
    parent: 'Location',
  },
  {
    id: 6,
    description: 'City: Playa Flamenca',
    parent: 'Location',
  },
  {
    id: 7,
    description: 'Closest large city: Torrevieja',
    parent: 'Location',
  },
  {
    id: 8,
    description: '15 minute walk to large outdoor mall',
    parent: 'Location',
  },
  {
    id: 9,
    description: '20 minute walk to nearest beach',
    parent: 'Location',
  },
  {
    id: 10,
    description: 'Every 1 day: 150 Euro',
    parent: 'Cost',
  },
  {
    id: 11,
    description: 'Every 1 week: 400 Euro',
    parent: 'Cost',
  },
  {
    id: 12,
    description: 'Every 1 month: 1100 Euro',
    parent: 'Cost',
  },
  {
    id: 13,
    description:
      'What is the refund policy if I have to cancel during the month',
    parent: 'Cost',
  },
  {
    id: 14,
    description: 'Deep: 2.2m',
    parent: 'Pool Area',
  },
  {
    id: 15,
    description: 'Sun heated',
    parent: 'Pool Area',
  },
  {
    id: 16,
    description: 'Showers',
    parent: 'Pool Area',
  },
  {
    id: 17,
    description: 'Childrens area',
    parent: 'Pool Area',
  },

  {
    id: 18,
    description: 'Concierto',
    parent: 'Nearby Restaurants',
    href: 'http://www.cafeteriaconcierto.com/',
  },
  {
    id: 19,
    description: 'El Gato: For Meat Lovers',
    parent: 'Nearby Restaurants',
  },
  {
    id: 20,
    description: 'Clarkes Bar',
    parent: 'Nearby Restaurants',
  },
  {
    id: 21,
    description: 'La Zenia Boulevard Restaurants',
    parent: 'Nearby Restaurants',
    href: 'https://zeniaboulevard.es/en/restaurants',
  },
  {
    id: 22,
    description: 'La Zenia Boulevard Stores',
    parent: 'Nearby Shopping',
    href: 'https://zeniaboulevard.es/en/stores',
  },
  {
    id: 23,
    description: 'El Corte Iglés',
    parent: 'Nearby Shopping',
  },
  {
    id: 24,
    description: 'Torrevieja',
    parent: 'Nearby Shopping',
  },
]
