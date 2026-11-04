export default function Footer() {
  return (
    <footer className="bg-cacao text-crema py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="font-satisfy text-3xl md:text-4xl">
            Cata Elegance
          </h2>
          
          <div className="flex justify-center gap-6 font-montserrat text-sm">
            <a 
              href="https://instagram.com/cataelegance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-rosa transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <span>·</span>
            <a 
              href="https://wa.me/5491123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-rosa transition-colors"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
            <span>·</span>
            <a 
              href="mailto:hola@cataelegance.com"
              className="hover:text-rosa transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          <div className="border-t border-crema/20 pt-6 space-y-2">
            <p className="font-montserrat text-sm">
              © 2026 Cata Elegance · cataelegance.com
            </p>
            <p className="font-montserrat text-xs text-nude">
              Diseño por Roldar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
