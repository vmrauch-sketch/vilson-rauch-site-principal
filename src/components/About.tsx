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
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Sobre Vilson Rauch
            </h2>
            <div className="w-16 h-1 bg-gold-500 mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Image */}
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/198f0dc1-b9de-4fcd-b390-8204dc19dbaa.png" 
                alt="Vilson Rauch - Consultor" 
                className="w-full rounded-lg shadow-xl object-contain"
              />
            </div>

            {/* Content - Text alongside image */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vilson Rauch é estrategista, consultor independente e fundador da Valorum, onde atua como mentor e guia na jornada pela liberdade financeira de indivíduos, famílias e empresas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Com ampla experiência em gestão patrimonial e consultoria independente, sua atuação se destaca pela excelência técnica, rigor ético e visão integrada.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Coautor do best-seller "Como Milionários Americanos Investem: A Revolução do Wealth Planning no Brasil", Vilson é uma das vozes que ajudaram a introduzir no país um novo modelo de gestão de investimentos e planejamento patrimonial — mais estratégico, alinhado ao longo prazo e centrado no cliente.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Antes da Valorum, acumulou mais de 20 anos de experiência na gestão industrial, onde desenvolveu uma visão estratégica e operacional única — hoje aplicada à consultoria personalizada com profundidade prática e visão sistêmica.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Sua trajetória o capacita a compreender, com precisão, os desafios reais enfrentados por empresários, profissionais liberais e famílias em busca de independência e legado.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Atualmente, lidera uma equipe multidisciplinar de especialistas nas áreas de investimentos, economia, contabilidade, gestão empresarial e excelência operacional. Juntos, entregam soluções robustas, eficazes e verdadeiramente personalizadas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Toda estratégia construída reflete o mesmo princípio que move a Valorum: liberdade começa com consciência — e se realiza com escolhas estruturadas.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-corporate-500">
              <p className="text-gray-700 mb-6 text-center text-lg font-medium">
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
                  onClick={() => scrollToSection('protocolo-especializado')}
                  className="bg-corporate-500 text-white px-6 py-3 rounded-lg hover:bg-corporate-600 transition-all duration-300 font-medium"
                >
                  Profissionais da Medicina e Saúde
                </button>
                <button
                  onClick={() => scrollToSection('pessoa-juridica')}
                  className="bg-financial-500 text-white px-6 py-3 rounded-lg hover:bg-financial-600 transition-all duration-300 font-medium"
                >
                  Pessoa Jurídica
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
