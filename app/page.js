export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">NEXUS</div>
          <div className="flex gap-8 text-sm">
            <a href="#features" className="hover:text-white/70 transition">Características</a>
            <a href="#about" className="hover:text-white/70 transition">Sobre</a>
            <a href="#contact" className="hover:text-white/70 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 flex items-center justify-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#3b0764_0%,transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            El futuro<br />empieza aquí
          </h1>
          <p className="text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Una experiencia digital premium creada con Grok
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-all active:scale-95">
            Explorar ahora
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Características</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "Diseño Moderno", desc: "Estética oscura premium con glassmorphism"},
              {title: "Rápido", desc: "Optimizado para máxima velocidad"},
              {title: "Responsive", desc: "Se ve perfecto en todos los dispositivos"}
            ].map((f, i) => (
              <div key={i} className="bg-zinc-800/50 border border-white/10 rounded-3xl p-8 hover:border-violet-500/50 transition">
                <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
                <p className="text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
