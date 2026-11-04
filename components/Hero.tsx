export default function Hero() {
  return (
    <section className="bg-blush py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-satisfy text-2xl md:text-3xl text-rosa">
              Nueva colección
            </p>
            <h2 className="font-cormorant text-4xl md:text-6xl text-cacao font-semibold leading-tight">
              Prendas suaves para sentirte elegante
            </h2>
            <p className="font-montserrat text-base md:text-lg text-cacao/80 leading-relaxed">
              Blusas, faldas y textiles en tonos pastel, pensados para acompañarte todos los días.
            </p>
            <button className="bg-cacao text-crema font-montserrat text-sm px-8 py-3 rounded-full hover:bg-cacao/90 transition-colors">
              VER COLECCIÓN
            </button>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-nude/30 rounded-3xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-64 h-80 bg-gradient-to-br from-rosa/20 to-nude/40 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
