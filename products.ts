export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  rating: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Casque Premium Noir',
    price: 299.99,
    description: 'Casque audio haute qualité avec réduction de bruit active et son immersif.',
    image: 'https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzJTIwYmxhY2t8ZW58MXx8fHwxNzcyNDgyMzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Audio',
    stock: 24,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Écouteurs Sans Fil',
    price: 149.99,
    description: 'Écouteurs bluetooth ultra-légers avec étui de charge magnétique.',
    image: 'https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjB3aGl0ZXxlbnwxfHx8fDE3NzI0MzQ4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Audio',
    stock: 45,
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Montre Connectée',
    price: 399.99,
    description: 'Montre intelligente avec suivi fitness et notifications en temps réel.',
    image: 'https://images.unsplash.com/photo-1739287700815-7eef4abaab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaHxlbnwxfHx8fDE3NzI1MDQ1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearables',
    stock: 18,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Ordinateur Portable Pro',
    price: 1299.99,
    description: 'Laptop ultra-fin et puissant pour les professionnels créatifs.',
    image: 'https://images.unsplash.com/photo-1554125970-e3f2399e937f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMG1pbmltYWx8ZW58MXx8fHwxNzcyNDEyMjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Ordinateurs',
    stock: 12,
    rating: 4.9,
  },
  {
    id: '5',
    name: 'Appareil Photo 4K',
    price: 899.99,
    description: 'Caméra professionnelle avec capteur haute résolution et objectifs interchangeables.',
    image: 'https://images.unsplash.com/photo-1729655669048-a667a0b01148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI1MDI1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Photo',
    stock: 8,
    rating: 4.8,
  },
  {
    id: '6',
    name: 'Smartphone Elite',
    price: 799.99,
    description: 'Téléphone haut de gamme avec écran OLED et système photo triple capteur.',
    image: 'https://images.unsplash.com/photo-1646719223599-9864b351e242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwZGV2aWNlfGVufDF8fHx8MTc3MjQ3MDg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Téléphones',
    stock: 32,
    rating: 4.7,
  },
  {
    id: '7',
    name: 'Tablette Moderne',
    price: 549.99,
    description: 'Tablette légère avec écran tactile haute résolution et performance rapide.',
    image: 'https://images.unsplash.com/photo-1769603795371-ad63bd85d524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcyNDYxMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tablettes',
    stock: 20,
    rating: 4.5,
  },
  {
    id: '8',
    name: 'Clavier Gaming RGB',
    price: 179.99,
    description: 'Clavier mécanique pour gamers avec rétroéclairage RGB personnalisable.',
    image: 'https://images.unsplash.com/photo-1645802106095-765b7e86f5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMHJnYnxlbnwxfHx8fDE3NzI0MjQwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Accessoires',
    stock: 35,
    rating: 4.6,
  },
];

export const categories = [
  'Tous',
  'Audio',
  'Ordinateurs',
  'Téléphones',
  'Tablettes',
  'Photo',
  'Wearables',
  'Accessoires',
];
