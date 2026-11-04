import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <section className="bg-crema py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-satisfy text-2xl md:text-3xl text-rosa mb-4">
            Lo más elegido
          </p>
          <h2 className="font-cormorant text-3xl md:text-5xl text-cacao font-semibold">
            Nueva colección
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-cacao text-crema font-montserrat text-sm px-8 py-3 rounded-full hover:bg-cacao/90 transition-colors">
            VER TIENDA
          </button>
        </div>
      </div>
    </section>
  );
}
