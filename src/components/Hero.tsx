
import { ArrowRight, Users, Building, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
              Transforme sua 
              <span className="text-gold-400 block">Relação com o Dinheiro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-navy-200 max-w-4xl mx-auto leading-relaxed">
              Consultoria financeira especializada para quem busca liberdade financeira 
              e crescimento patrimonial sustentável
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('servicos')}
                className="bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-400 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                Conheça nossos serviços
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                Agende uma consulta
              </button>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {/* Pessoa Física */}
            <div 
              onClick={() => scrollToSection('pessoa-fisica')}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <Users size={48} className="mx-auto mb-4 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-playfair font-bold mb-4">Pessoa Física</h3>
                <p className="text-navy-200 mb-6">
                  Consultoria personalizada em investimentos e gestão patrimonial para indivíduos
                </p>
                <div className="text-gold-400 font-semibold flex items-center justify-center group-hover:text-gold-300">
                  Saiba mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Pessoa Jurídica */}
            <div 
              onClick={() => scrollToSection('pessoa-juridica')}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <Building size={48} className="mx-auto mb-4 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-playfair font-bold mb-4">Pessoa Jurídica</h3>
                <p className="text-navy-200 mb-6">
                  Soluções financeiras empresariais, recuperação tributária e otimização fiscal
                </p>
                <div className="text-gold-400 font-semibold flex items-center justify-center group-hover:text-gold-300">
                  Saiba mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Profissionais da Medicina */}
            <div 
              onClick={() => scrollToSection('protocolo-especializado')}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <TrendingUp size={48} className="mx-auto mb-4 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-playfair font-bold mb-4">Profissionais da Medicina e Saúde</h3>
                <p className="text-navy-200 mb-6">
                  Protocolo especializado "Mais Renda, Menos Plantão" para profissionais da saúde
                </p>
                <div className="text-gold-400 font-semibold flex items-center justify-center group-hover:text-gold-300">
                  Saiba mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
