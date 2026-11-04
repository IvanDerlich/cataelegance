import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] bg-crema/50 rounded-2xl overflow-hidden mb-4 relative">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gradient-to-br from-nude/40 to-rosa/20 rounded-xl group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="font-cormorant text-xl md:text-2xl text-cacao font-medium mb-2">
        {product.name}
      </h3>
      <p className="font-montserrat text-sm text-cacao/70 mb-2">
        {product.description}
      </p>
      <p className="font-montserrat text-lg text-cacao font-semibold">
        {formattedPrice}
      </p>
    </div>
  );
}
