export default function Header() {
  return (
    <header className="bg-blush py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="font-satisfy text-4xl md:text-5xl text-cacao">
          Cata
        </h1>
        <nav className="hidden md:flex gap-8 font-montserrat text-sm text-cacao">
          <a href="#inicio" className="hover:text-rosa transition-colors">Inicio</a>
          <a href="#novedades" className="hover:text-rosa transition-colors">Novedades</a>
          <a href="#tienda" className="hover:text-rosa transition-colors">Tienda</a>
          <a href="#contacto" className="hover:text-rosa transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
