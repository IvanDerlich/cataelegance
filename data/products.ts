export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Blusa Rosa Satén',
    price: 38900,
    image: '/images/blusa-rosa.jpg',
    description: 'Elegante blusa de satén en tono rosa empolvado',
  },
  {
    id: '2',
    name: 'Falda Midi Lino',
    price: 45500,
    image: '/images/falda-lino.jpg',
    description: 'Falda midi confeccionada en lino premium',
  },
  {
    id: '3',
    name: 'Cárdigan Perla',
    price: 52000,
    image: '/images/cardigan-perla.jpg',
    description: 'Cárdigan suave en tono perla con botones delicados',
  },
];
