const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 pb-8 bg-gray-50" id="sobre">
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
            <div>
              <img 
                src="/lovable-uploads/198f0dc1-b9de-4fcd-b390-8204dc19dbaa.png" 
                alt="Vilson Rauch - Consultor" 
                className="w-full rounded-lg shadow-xl object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Content - Text alongside image */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                🧭 Vilson Rauch é estrategista financeiro, consultor e fundador da Valorum, onde atua como mentor na jornada pela liberdade financeira de indivíduos, famílias e empresas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Com ampla experiência em gestão patrimonial e consultoria, sua abordagem combina excelência técnica, ética inegociável e uma compreensão prática dos desafios reais enfrentados por seus clientes.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                📖 Coautor do best-seller "Como Milionários Americanos Investem: A Revolução do Wealth Planning no Brasil", Vilson é uma das vozes que ajudaram a introduzir no país um novo modelo de gestão de investimentos e planejamento patrimonial — mais estratégico, de longo prazo e genuinamente centrado no cliente.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Sua visão inovadora e pró-cliente é sustentada por uma base sólida. É mestre em Economia e Mercados pelo Mackenzie de São Paulo e especialista em Mercado Financeiro pela PUC Minas — duas formações que unem teoria econômica e aplicação prática. Esse repertório acadêmico reforça sua capacidade de interpretar cenários complexos e traduzi-los em estratégias patrimoniais e empresariais eficazes e sob medida.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Essa perspectiva é moldada por mais de duas décadas de experiência na gestão industrial, onde desenvolveu uma combinação única de pensamento estratégico e execução operacional. Hoje, essa bagagem técnica e prática é aplicada à consultoria financeira personalizada, com foco em gerar autonomia, clareza e decisões alinhadas ao longo prazo.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                ♞ Como estrategista de movimentos inteligentes e coordenados, Vilson lidera uma equipe multidisciplinar de especialistas em economia, contabilidade, investimentos, excelência operacional e gestão empresarial, garantindo que cada solução entregue seja robusta, integrada e feita sob medida para quem a recebe.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Além do trabalho de consultoria, leva essa visão para o palco em palestras e encontros estratégicos, onde compartilha não apenas conhecimento técnico, mas vivências aplicadas que inspiram mudança, decisão e propósito.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                🔑 Toda estratégia construída por Vilson reflete o mesmo princípio que sustenta a Valorum: liberdade começa com consciência — e se realiza com escolhas estruturadas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { About };
