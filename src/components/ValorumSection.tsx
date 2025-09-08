const ValorumSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 mb-6">
            Plataforma Valorum
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Acesse o site de serviços do nosso time especializado
          </p>
          <div>
            <a 
              href="https://valorum.vilsonrauch.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-navy-600 hover:bg-navy-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Acesse a Valorum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ValorumSection };