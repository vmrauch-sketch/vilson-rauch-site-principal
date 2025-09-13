const Services = () => {
  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-6">
              Serviços de Consultoria
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa equipe especializada oferece consultoria personalizada em gestão patrimonial, 
              planejamento financeiro e estratégias de investimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Consultoria Patrimonial */}
            <div className="bg-gradient-to-br from-navy-50 to-white p-8 rounded-2xl border border-navy-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-4">Consultoria Patrimonial</h3>
              <p className="text-gray-600 mb-4">
                Gestão e proteção do seu patrimônio com estratégias personalizadas de wealth planning.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Planejamento sucessório</li>
                <li>• Proteção patrimonial</li>
                <li>• Diversificação de ativos</li>
              </ul>
            </div>

            {/* Consultoria em Dividendos */}
            <div className="bg-gradient-to-br from-financial-50 to-white p-8 rounded-2xl border border-financial-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-financial-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-financial-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-financial-600 mb-4">Especialista em Dividendos</h3>
              <p className="text-gray-600 mb-4">
                Estratégias especializadas para maximizar renda passiva através de dividendos.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Carteira de dividendos</li>
                <li>• Análise de proventos</li>
                <li>• Renda passiva sustentável</li>
              </ul>
            </div>

            {/* Consultoria em Renda */}
            <div className="bg-gradient-to-br from-corporate-50 to-white p-8 rounded-2xl border border-corporate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-corporate-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-corporate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-corporate-600 mb-4">Estratégias de Renda</h3>
              <p className="text-gray-600 mb-4">
                Desenvolvimento de múltiplas fontes de renda para independência financeira.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Renda fixa e variável</li>
                <li>• Investimentos alternativos</li>
                <li>• Planejamento de aposentadoria</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-navy-600 mb-4">
              Precisa de Consultoria Especializada?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa equipe de consultores está pronta para desenvolver estratégias personalizadas 
              para seus objetivos financeiros e patrimoniais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const message = encodeURIComponent("Olá! Gostaria de agendar uma consultoria especializada sobre planejamento patrimonial e estratégias de investimento.");
                  window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
                }}
                className="inline-flex items-center px-8 py-4 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Falar com Consultor
              </button>
              <a 
                href="https://valorum.vilsonrauch.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Conhecer a Valorum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };