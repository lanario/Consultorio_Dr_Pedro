export function Footer() {
  const currentYear = new Date().getFullYear()
  const address = "Rua Doutor Lassance Cunha, 158 - Jardim Tropical, Nova Iguaçu - RJ, 26010-145"
  const businessName = "Consultório Dr Pedro Lucas - Dentista Nova Iguaçu"
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessName + ' ' + address)}`
  
  return (
    <footer className="bg-slate-800 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Título e Endereço */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-[1.9rem] font-semibold text-white mb-3">
            Onde nos encontrar
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            {address}
          </p>
        </div>
        
        {/* Mapa clicável */}
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg mb-6 relative group">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(businessName + ' ' + address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                Clique para abrir no Google Maps
              </span>
            </div>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Consultório Dr. Pedro Lucas
          </p>
        </div>
      </div>
    </footer>
  )
}

