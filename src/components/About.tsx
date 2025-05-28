
const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                  Sobre Vilson Rauch
                </h2>
                <div className="w-16 h-1 bg-gold-500 mb-6"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Vilson Rauch é economista, contador, estrategista em investimentos e finanças e planejador financeiro, com sólida experiência 
                na consultoria independente de investimentos e gestão patrimonial para indivíduos, 
                famílias e empresas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Atua com foco na excelência técnica e rigor ético, oferecendo soluções que integram 
                finanças, patrimônio, geração de renda e estratégias avançadas de investimento.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-corporate-500">
                <h4 className="font-semibold text-navy-600 mb-3">Modelo de Atendimento:</h4>
                <p className="text-gray-700 mb-6">
                  Personalizado, independente e orientado à construção e preservação do patrimônio.
                </p>
                
                {/* Navigation Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => scrollToSection('pessoa-fisica')}
                    className="bg-navy-600 text-white px-6 py-3 rounded-lg hover:bg-navy-700 transition-all duration-300 font-medium"
                  >
                    Pessoa Física
                  </button>
                  <button
                    onClick={() => scrollToSection('profissionais-medicina')}
                    className="bg-corporate-500 text-white px-6 py-3 rounded-lg hover:bg-corporate-600 transition-all duration-300 font-medium"
                  >
                    Profissionais da Medicina e Saúde
                  </button>
                  <button
                    onClick={() => scrollToSection('pessoa-juridica')}
                    className="bg-financial-500 text-white px-6 py-3 rounded-lg hover:bg-financial-600 transition-all duration-300 font-medium"
                  >
                    Pessoa Jurídica (Empresas)
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/4c689919-5ada-4401-9bc5-618572d3f688.png" 
                alt="Vilson Rauch - Consultor" 
                className="w-full rounded-lg shadow-xl object-cover object-top h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
