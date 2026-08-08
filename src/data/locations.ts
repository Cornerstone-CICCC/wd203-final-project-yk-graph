export type Location = {
  id: string
  year: string
  name: string
  description: string
  address: string
  phone: string
  hours: string
  photos: string[]
}

export const LOCATIONS: Location[] = [
  {
    id: 'main-st',
    year: '2026',
    name: 'Main St',
    description: 'Discover the largest café in Vancouver.',
    address: '195 E 36th Ave, Vancouver, BC V5W 4A1',
    phone: '604-000-0000',
    hours: '7 AM - 10 PM',
    photos: ['/locations/main-st-1.jpg', '/locations/main-st-2.jpg', '/locations/main-st-3.jpg'],
  },
  {
    id: 'pitt-meadows',
    year: '2024',
    name: 'Pitt Meadows',
    description:
      'Discover our café in Pitt Meadows, where modern and affordable luxury meets specialty coffee, offering a comfortable, spacious, and open environment for all.',
    address: '#301A - 19265 Airport Way, Pitt Meadows, BC V3Y 2M5',
    phone: '604-000-0000',
    hours: '7 AM - 9 PM',
    photos: ['/locations/pitt-meadows-1.jpg', '/locations/pitt-meadows-2.jpg', '/locations/pitt-meadows-3.jpg'],
  },
  {
    id: 'port-coquitlam',
    year: '2022',
    name: 'Port Coquitlam',
    description:
      'In the spring of 2022, we opened our beautiful and aesthetic headquarters, where we freshly roast our finest green beans to perfection.',
    address: '#110 - 820 Village Dr, Port Coquitlam, BC V3B 0G9',
    phone: '604-000-0000',
    hours: '8 AM - 9 PM',
    photos: ['/locations/port-coquitlam-1.jpg', '/locations/port-coquitlam-2.jpg', '/locations/port-coquitlam-3.jpg'],
  },
  {
    id: 'coquitlam',
    year: '2019',
    name: 'Coquitlam',
    description:
      'Our first location opened in early 2019, featuring an on-site roastery, a fully equipped commercial kitchen, and an elegant coffee bar and dining area.',
    address: '#111 - 100 Schoolhouse St, Coquitlam, BC V3K 6V9',
    phone: '604-000-0000',
    hours: '8 AM - 9 PM',
    photos: ['/locations/coquitlam-1.jpg', '/locations/coquitlam-2.jpg', '/locations/coquitlam-3.jpg'],
  },
]
