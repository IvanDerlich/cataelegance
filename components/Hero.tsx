import { getWhatsAppUrl } from '@/config/contact';

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
            <div className="flex flex-wrap gap-4">
              <a 
                href={getWhatsAppUrl('¡Hola! Quiero ver la colección completa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cacao text-crema font-montserrat text-sm px-8 py-3 rounded-full hover:bg-cacao/90 transition-colors"
              >
                VER COLECCIÓN
              </a>
              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-cacao text-cacao font-montserrat text-sm px-8 py-3 rounded-full hover:bg-cacao hover:text-crema transition-colors"
              >
                CONSULTAR POR WHATSAPP
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-nude/30 rounded-3xl overflow-hidden">
              <img
                src="/images/hero.jpg"
                alt="Colección de moda femenina en tonos pastel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
