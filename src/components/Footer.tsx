
const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {/* Logo and Description */}
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Vilson Rauch</h3>
              <p className="text-white/80 mb-4 max-w-md">
                Consultor de Valores Mobiliários CVM credenciado, especialista em wealth planning e palestrante.
              </p>
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <span className="w-2 h-2 bg-financial-500 rounded-full"></span>
                <span>Consultoria independente</span>
                <span className="w-2 h-2 bg-financial-500 rounded-full"></span>
                <span>Credenciado CVM</span>
                <span className="w-2 h-2 bg-financial-500 rounded-full"></span>
                <span>Gestor de patrimônio</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Vilson Rauch. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
