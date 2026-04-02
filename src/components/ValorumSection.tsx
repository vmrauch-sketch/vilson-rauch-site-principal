const ValorumSection = () => {
  return (
    <section className="pt-8 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 mb-6">
            Soluções da Valorum
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Acesse o site de serviços do nosso time especializado
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="https://valorum.vilsonrauch.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-navy-600 text-white rounded-lg font-semibold text-center hover:bg-navy-700 transition-colors shadow-md hover:scale-105 duration-300"
            >
              Valorum Investimentos e Patrimônio
            </a>
            <a
              href="https://cfvalorum.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-navy-600 text-white rounded-lg font-semibold text-center hover:bg-navy-700 transition-colors shadow-md hover:scale-105 duration-300"
            >
              Valorum BPO — Terceirização e Gestão do Financeiro
            </a>
            <a
              href="https://palestras.vilsonrauch.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-navy-600 text-white rounded-lg font-semibold text-center hover:bg-navy-700 transition-colors shadow-md hover:scale-105 duration-300"
            >
              Palestras
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ValorumSection };