
const Services = () => {
  const services = [
    {
      title: "Consultoria de Investimentos Personalizada",
      icon: "📊",
      items: [
        "Análise de perfil de risco",
        "Alocação estratégica de ativos",
        "Monitoramento contínuo",
        "Gestão profissional de investimentos"
      ]
    },
    {
      title: "Gestão Patrimonial e Wealth Planning",
      icon: "💎",
      items: [
        "Estruturação patrimonial familiar e empresarial",
        "Otimização tributária via holdings",
        "Proteção patrimonial e planejamento sucessório",
        "Leilão de Crédito para redução de custos financeiros",
        "Análise e adequação de previdência privada",
        "Seguros e Proteções, com foco em responsabilidade civil customizada"
      ]
    },
    {
      title: "Consultoria Financeira para Empresas (PJ)",
      icon: "🏢",
      items: [
        "Gestão de caixa corporativo",
        "Estruturação de investimentos empresariais",
        "Planejamento financeiro estratégico",
        "Estruturação patrimonial empresarial",
        "Leilão de Crédito para otimização de financiamentos"
      ],
      highlight: {
        title: "Recuperação Tributária",
        items: [
          "Diagnóstico de créditos tributários recuperáveis",
          "Assessoria em restituição e compensação",
          "Estruturação segura e eficiente dos processos"
        ]
      }
    },
    {
      title: "Estratégias de Alavancagem e Aceleração Patrimonial",
      icon: "🚀",
      items: [
        "Investimentos alavancados com capital de terceiros",
        "Financiamento estruturado para expansão",
        "Estruturação societária com foco em crescimento"
      ]
    },
    {
      title: "FIDC e Estratégias Tributárias",
      icon: "⚖️",
      items: [
        "Estruturação e participação em FIDCs",
        "Captação e gestão de fluxo de caixa empresarial",
        "Planejamento tributário eficiente"
      ]
    },
    {
      title: "Educação Financeira e Palestras",
      icon: "🎤",
      items: [
        "Workshops para equipes e gestores",
        "Mentoria financeira estratégica",
        "Palestras corporativas sobre mercado financeiro",
        "Palestras de empreendedorismo, gestão e liderança"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Serviços Oferecidos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em consultoria financeira e gestão patrimonial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-navy-600">
                    {service.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-corporate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {service.highlight && (
                  <div className="bg-gradient-to-r from-financial-500 to-investment-500 p-6 rounded-lg text-white">
                    <h4 className="font-bold mb-3 text-lg">{service.highlight.title}</h4>
                    <ul className="space-y-2">
                      {service.highlight.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };
