const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="py-20 pb-8 bg-gray-50" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Sobre Vilson Rauch - Fundador da Valorum
            </h2>
            <div className="w-16 h-1 bg-gold-500 mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Image */}
            <div>
              <img 
                src="/lovable-uploads/198f0dc1-b9de-4fcd-b390-8204dc19dbaa.png" 
                alt="Vilson Rauch - Estrategista Patrimonial & Financeiro da Valorum, especialista em Wealth Planning" 
                className="w-full rounded-lg shadow-xl object-contain"
                loading="lazy"
                decoding="async"
              />
              <p className="text-center text-xl font-playfair italic font-semibold text-gold-600 mt-6">
                "Planejamento patrimonial real"
              </p>
            </div>

            {/* Content - Text alongside image */}
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                🧭 Vilson Rauch é estrategista patrimonial e financeiro, consultor e fundador da Valorum, onde atua como mentor na jornada pela liberdade financeira de indivíduos, famílias e empresas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                ♞ Como estrategista, Vilson traduz a economia em estratégias patrimoniais orientadas pelos ciclos econômicos; a lógica da engenharia em mecanismos estruturados de crescimento e proteção patrimonial; e a contabilidade e a administração em gestão eficiente e operações voltadas à otimização e maximização de recursos ao longo do tempo, sempre reavaliando a eficiência fiscal e tributária.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                🛡️ Sua abordagem combina excelência técnica, ética inegociável e uma compreensão prática dos desafios reais, aplicando estratégia, método e visão integrada à gestão patrimonial, financeira e empresarial.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                📖 Coautor do best-seller "Como Milionários Americanos Investem: A Revolução do Wealth Planning no Brasil", Vilson é uma das vozes que ajudaram a introduzir no país um novo modelo de gestão de investimentos e planejamento patrimonial estratégico, estruturado e genuinamente centrado no cliente.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                🏛️ Sua visão inovadora e pró-cliente é sustentada por uma formação sólida e consistente. É mestre em Economia e Mercados pelo Mackenzie de São Paulo, especialista em Mercado Financeiro pela PUC Minas e possui formação em Value Investing pela Columbia University, em Nova York — berço do value investing. Esse conjunto une teoria econômica, rigor analítico e aplicação prática, fortalecendo sua capacidade de interpretar cenários complexos e traduzi-los em estratégias patrimoniais e empresariais que funcionam na vida real.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                🕰️ Mais de duas décadas de experiência na gestão de indústrias nacionais e multinacionais permitiram a Vilson desenvolver uma combinação única de pensamento estratégico e execução operacional, lidando com decisões complexas, alocação eficiente de recursos e gestão de riscos. Hoje, essa mesma lógica é aplicada na Valorum, orientando soluções patrimoniais, financeiras e empresariais voltadas à organização, proteção e crescimento, com eficiência fiscal e tributária, método e clareza.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                ♞ Como estrategista de movimentos inteligentes e coordenados, Vilson lidera uma equipe multidisciplinar de especialistas em economia, contabilidade, investimentos, excelência operacional e gestão empresarial, garantindo que cada solução seja robusta, integrada e executável.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                👑 Reconhecido por sua atuação consistente, Vilson é considerado um dos principais especialistas em Value Investing e estratégias de dividendos no Brasil, aplicando esses princípios de forma disciplinada à gestão de investimentos e à construção patrimonial. Além da atuação profissional, colabora com insights e análises na maior comunidade de investidores focada em dividendos do país, contribuindo para o debate qualificado e a disseminação de boas práticas em investimentos.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                🎤 Em palestras e encontros estratégicos, Vilson compartilha essa visão aplicada por meio de temas como economia, empreendedorismo e inovação, eficiência tributária, mecanismos patrimoniais e liderança, conectando teoria, prática e tomada de decisão em contextos reais.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                🔑 Toda estratégia construída por Vilson reflete o mesmo princípio que sustenta a Valorum:<br />
                liberdade começa com consciência — e se realiza com escolhas estruturadas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export { About };
